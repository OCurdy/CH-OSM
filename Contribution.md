If you think a topic is missing, don't hesitate to [contact us](https://ch-osm.geodatasolutions.ch) o discuss it!<br>
Each new topic consumes server resources on magOSM, so we try to prioritize themes useful to the majority.

# Propose a New Thematic Layer

To enrich the service with a new data layer on a theme, the following steps are necessary:
* Open a collaborative pad  ([Framapad](https://framapad.org/) or equivalent) 
* Fill in 3 sections:
  * *PGSQL request* corresponding to the theme
  * *SLD style* that will be used by default for the WMS format
  * *metadata sheet* (title and description are sufficient)
* We check/test your additions on the server
* You make a Pull Request on the GitHub repository so your contribution can be integrated

## Define the SQL Query

### Introduction
The CH-OSM database is based on Osm2pgsql, which creates 3 exploitation tables in the ch-osm schema:
* magosm.point
* magosm.line
* magosm.polygon

To create a new theme in magOSM, start by creating a PGSQL "view".<br>
You can get inspired by an [existing query](https://github.com/Magellium/magosm_db/tree/master/pg_views) close to your theme.

### Query Syntax for Tagss

**Generalities**<br>
When importing OSM data into the PGSQL database using Osm2pgsql, the most "frequent" attributes (tags) are imported into dedicated columns (e.g., the "name" attribute), and the less frequent ones are all relegated to a "tags" column of type [hstore](https://www.postgresql.org/docs/9.0/hstore.html) which is a succession of key/value pairs.<br>

Example of the contents of the tags column:<br>
```{"colour"=>"#dda0dd", "network"=>"Agglobus Cavem", "osm_uid"=>"0", "osm_user"=>"", "route_name"=>"11: Les Deux Collines => Lycée Camus", "osm_version"=>"66", "osm_changeset"=>"0", "osm_timestamp"=>"2018-11-22T17:53:42Z", "route_pref_color"=>"0", "public_transport:version"=>"2"}```.

1. To retrieve a "frequent" attribute, simply do a ```SELECT tag_frequent```<br>
Example : ```SELECT name FROM magosm.france_line WHERE ...```
2. Whereas to retrieve a "less frequent" attribute, you need to do a ```SELECT tags->'tag_peu_frequent' AS "tag_peu_frequent"```<br>
Example : ```SELECT tags->'network' AS "network" FROM magosm.france_line WHERE ...```

The list of "frequent" attributes is defined by the [magosm.style](https://github.com/Magellium/magosm_db/tree/master/conf/magosm.style) style used by Osm2pgsql for import. If the key of the attribute of interest is not listed in the magosm.style file, it will be found in the tags column of hstore type.

### Indexes
For performance reasons, make sure an index is already defined for the filtering column corresponding to the theme (example: the "building" column for buildings): check in [the list of existing indexes](https://github.com/Magellium/magosm_db/tree/master/pg_views/ind_useful-indexes.sql)

### Attributes with Special Characters
We adopt the following convention: if the key of the used attribute contains the colon character " :  "  (example : ```public_transport:version```) alors on remplacera le ":" par un tiret "-" dans l'alias, exemple : 
* for a "frequent" tag : ```SELECT "addr:housename" AS "addr-housename"```
* for an "infrequent" tag : ```SELECT tags->'public_transport:version' AS "public_transport-version"```


### Relations
OSM objects of type "relation" are also available in the line and france_polygon tables, with a negative osm_id equal to the opposite of the relation's identifier in OSM (example: the bus line [11: Les Deux Collines => Lycée Camus (8937340)](https://www.openstreetmap.org/relation/8937340/) is present in the form of a multi-line in the table france_line with ```osm_id=-8937340```).<br>
That's why for the theme of bus lines we query on ```osm_id<0``` : [v_bus_routes_line.sql](https://github.com/Magellium/magosm_db/tree/master/pg_views/v_bus_routes_line.sql)<br>
And the bus line is accessible via the CH-OSM portal [ici](https://ch-osm.geodatasolutions.ch/app/#/carte?z=8&lon=8.6000&lat=46.8000&tr=30&vLay=magosm:hospitals_point).<br>
In the case where one would also want to retrieve the list of bus stops (nodes) associated with the relation, the complete list of identifiers of the members of the relation is available in the table france_rels and the node objects are found in the table france_point.

## Define the SLD Style
Get inspired by an existing style. Examples of simple styles:
* Point geometry : [france_police_point.sld](styles/france_police_point.sld)
* Line geometry : [france_subway_routes_line.sld](styles/france_subway_routes_line.sld)
* Polygon geometry : [france_pnr_polygon.sld](styles/france_pnr_polygon.sld)


## Write the Metadata Sheet
Limit yourself to the "Title" and "Summary" fields.<br>
Examples for :
* a query in the "point" and "polygon" table with centroid calculation : [Location of police and gendarmerie stations - Switzerland ](https://www.geocat.ch/geonetwork/srv/fre/catalog.search#/metadata/e61082a5-6917-4826-938d-e79083817859)
* a query in the "line" table with osm_id>0 : [Road network - Switzerland ](https://www.geocat.ch/geonetwork/srv/eng/catalog.search#/metadata/b78b987f-ce6a-461c-af88-6cae0a37c9aa)
* a query in the "line" table with osm_id<0 : [Motorways - Switzerland ](https://www.geocat.ch/geonetwork/srv/eng/catalog.search#/metadata/9761dba0-c250-4d8d-bd16-60bfcfce9886)
* a query in the "polygon" table : [Natural parks - Switzerland ](https://www.geocat.ch/geonetwork/srv/eng/catalog.search#/metadata/urn:isogeo:metadata:uuid:31d848b5-6900-4e36-85c9-a4f2b4990b16)

## Add the Layer in the Configuration File
Get inspired by an existing layer. The file is [here](portail/client/src/assets/maps/default.json).
Some notes:
* The ```md_url``` attribute cannot be completed until we have added the layer in GeoServer.
* The ```main_feature_infos``` attribute allows adding **important information about the object that will display on the left panel** when an object is selected on the map.
There are 4 categories: ```high```, ```medium```, ```low```, and ```no```. For the first three categories, only ONE tag from the ```sub_tags``` vlist will be displayed, specifically the one with the highest priority value and that is contained in the list of tags of the selected object.
For the ```no```category, all listed tags will be displayed.
  * ```priority``` values should start at 1. The sequence is not crucial, but skipping numbers is not allowed.  For instance, a sequence with ```"priority":1``` followed by ```"priority":3``` without a ```"priority":2``` is not correct.
  * There is no priority for ```no```, and tags appear in the list order.
  * Add labels if necessary for clearer understanding of the displayed values.

## Pull request
To make a pull request via the Web interface of Github:
* Fork the magOSM repository to create a personal copy [button at the top right](https://github.com/magellium/magosm) to create a personal copy of the magOSM code repository
* In your new personal repository :
  * Add the SQL query to a new file here : https://github.com/Magellium/magosm_db/tree/master/pg_views
  * Add index here :  https://github.com/Magellium/magosm_db/blob/master/pg_views/ind_useful-indexes.sql
  * Add the SLD style to a new file here : [/styles](styles)
  * Add the metadata sheet to a new file here : [/metadatas](metadatas)
* [Create a pull request from your fork](https://help.github.com/articles/creating-a-pull-request-from-a-fork/)
