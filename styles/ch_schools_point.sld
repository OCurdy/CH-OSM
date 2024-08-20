<?xml version="1.0" encoding="UTF-8"?><sld:StyledLayerDescriptor xmlns="http://www.opengis.net/sld" xmlns:sld="http://www.opengis.net/sld" xmlns:gml="http://www.opengis.net/gml" xmlns:ogc="http://www.opengis.net/ogc" version="1.0.0">
  <sld:NamedLayer>
    <sld:Name>ch_schools_point</sld:Name>
    <sld:UserStyle>
      <sld:Name>ch_schools_point</sld:Name>
      <sld:FeatureTypeStyle>
        <sld:Name>name</sld:Name>
        <sld:Rule>
        <sld:Name>Etablissement d'enseignement supérieur (college)</sld:Name>
        <sld:Title>Etablissement d'enseignement supérieur (college)
            <sld:Localized lang="de">Hochschule</sld:Localized>
            <sld:Localized lang="fr">Etablissement d'enseignement supérieur</sld:Localized>
            <sld:Localized lang="it">Istituto di istruzione superiore</sld:Localized>
            <sld:Localized lang="rm">Instituziun d'instrucziun superiura</sld:Localized>
            <sld:Localized lang="en">College</sld:Localized>
        </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>amenity</ogc:PropertyName>
              <ogc:Literal>college</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer>
            <sld:Graphic>
              <sld:Mark>
                <sld:WellKnownName>circle</sld:WellKnownName>
                <sld:Fill>
                  <sld:CssParameter name="fill">#eb9077</sld:CssParameter>
                </sld:Fill>
                <sld:Stroke/>
              </sld:Mark>
              <sld:Size>7.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
        <sld:Name>Jardin d'enfant (kindergarten)</sld:Name>
        <sld:Title>Jardin d'enfant (kindergarten)
            <sld:Localized lang="de">Kindergarten</sld:Localized>
            <sld:Localized lang="fr">Jardin d'enfant</sld:Localized>
            <sld:Localized lang="it">Asilo</sld:Localized>
            <sld:Localized lang="rm">Curtin d'uffants</sld:Localized>
            <sld:Localized lang="en">Kindergarten</sld:Localized>
        </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>amenity</ogc:PropertyName>
              <ogc:Literal>kindergarten</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer>
            <sld:Graphic>
              <sld:Mark>
                <sld:WellKnownName>circle</sld:WellKnownName>
                <sld:Fill>
                  <sld:CssParameter name="fill">#1e41ec</sld:CssParameter>
                </sld:Fill>
                <sld:Stroke/>
              </sld:Mark>
              <sld:Size>7.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Ecole primaire et/ou secondaire (school)</sld:Name>
          <sld:Title>Ecole primaire et/ou secondaire (school)
              <sld:Localized lang="de">Grund- und/oder Sekundarschule</sld:Localized>
              <sld:Localized lang="fr">Ecole primaire et/ou secondaire</sld:Localized>
              <sld:Localized lang="it">Scuola primaria e/o secondaria</sld:Localized>
              <sld:Localized lang="rm">Scola primara e/u secundara</sld:Localized>
              <sld:Localized lang="en">Primary and/or Secondary School</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>amenity</ogc:PropertyName>
              <ogc:Literal>school</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer>
            <sld:Graphic>
              <sld:Mark>
                <sld:WellKnownName>circle</sld:WellKnownName>
                <sld:Fill>
                  <sld:CssParameter name="fill">#e061de</sld:CssParameter>
                </sld:Fill>
                <sld:Stroke/>
              </sld:Mark>
              <sld:Size>7.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Université (university)</sld:Name>
          <sld:Title>Université (university)
              <sld:Localized lang="de">Universität</sld:Localized>
              <sld:Localized lang="fr">Université</sld:Localized>
              <sld:Localized lang="it">Università</sld:Localized>
              <sld:Localized lang="rm">Universitad</sld:Localized>
              <sld:Localized lang="en">University</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>amenity</ogc:PropertyName>
              <ogc:Literal>university</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer>
            <sld:Graphic>
              <sld:Mark>
                <sld:WellKnownName>circle</sld:WellKnownName>
                <sld:Fill>
                  <sld:CssParameter name="fill">#2eca91</sld:CssParameter>
                </sld:Fill>
                <sld:Stroke/>
              </sld:Mark>
              <sld:Size>7.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
      </sld:FeatureTypeStyle>
      <sld:FeatureTypeStyle>
         <sld:Rule>
           <sld:TextSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Label>
              <ogc:PropertyName>name</ogc:PropertyName>
            </sld:Label>
            <sld:Font>
              <sld:CssParameter name="font-family">MS Shell Dlg 2</sld:CssParameter>
              <sld:CssParameter name="font-size">3.0</sld:CssParameter>
              <sld:CssParameter name="font-style">normal</sld:CssParameter>
              <sld:CssParameter name="font-weight">bold</sld:CssParameter>
            </sld:Font>
            <sld:LabelPlacement>
              <sld:PointPlacement>
                <sld:AnchorPoint>
                  <sld:AnchorPointX>0.5</sld:AnchorPointX>
                  <sld:AnchorPointY>0.5</sld:AnchorPointY>
                </sld:AnchorPoint>
                <sld:Displacement>
                  <sld:DisplacementX>0.0</sld:DisplacementX>
                  <sld:DisplacementY>4.0</sld:DisplacementY>
                </sld:Displacement>
                <sld:Rotation>-0.0</sld:Rotation>
              </sld:PointPlacement>
            </sld:LabelPlacement>
            <sld:Fill>
              <sld:CssParameter name="fill">#ac39ac</sld:CssParameter>
            </sld:Fill>
             <VendorOption name="spaceAround">10</VendorOption>
             <VendorOption name="autoWrap">20</VendorOption>
          </sld:TextSymbolizer>
        </sld:Rule>
      </sld:FeatureTypeStyle>
    </sld:UserStyle>
  </sld:NamedLayer>
</sld:StyledLayerDescriptor>