<?xml version="1.0" encoding="UTF-8"?><sld:StyledLayerDescriptor xmlns="http://www.opengis.net/sld" xmlns:sld="http://www.opengis.net/sld" xmlns:gml="http://www.opengis.net/gml" xmlns:ogc="http://www.opengis.net/ogc" version="1.0.0">
  <sld:NamedLayer>
    <sld:Name>ch_police_point</sld:Name>
    <sld:UserStyle>
      <sld:Name>ch_police_point</sld:Name>
      <sld:FeatureTypeStyle>
        <sld:Name>name</sld:Name>
        <sld:Rule>
          <sld:Name>Gendarmerie</sld:Name>
          <sld:Title>Gendarmerie
              <sld:Localized lang="de">Gendarmerie</sld:Localized>
              <sld:Localized lang="fr">Gendarmerie</sld:Localized>
              <sld:Localized lang="it">Gendarmeria</sld:Localized>
              <sld:Localized lang="rm">Gendarmeria</sld:Localized>
              <sld:Localized lang="en">Gendarmerie</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>police-FR</ogc:PropertyName>
              <ogc:Literal>gendarmerie</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer>
            <sld:Graphic>
              <sld:Mark>
                <sld:WellKnownName>circle</sld:WellKnownName>
                <sld:Fill>
                  <sld:CssParameter name="fill">#6cb281</sld:CssParameter>
                </sld:Fill>
                <sld:Stroke/>
              </sld:Mark>
              <sld:Size>7.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Police municipale</sld:Name>
          <sld:Title>Police municipale
            <sld:Localized lang="de">Stadtpolizei</sld:Localized>
            <sld:Localized lang="fr">Police municipale</sld:Localized>
            <sld:Localized lang="it">Polizia municipale</sld:Localized>
            <sld:Localized lang="rm">Polizia communala</sld:Localized>
            <sld:Localized lang="en">Municipal Police</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>police-FR</ogc:PropertyName>
              <ogc:Literal>police_municipale</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer>
            <sld:Graphic>
              <sld:Mark>
                <sld:WellKnownName>circle</sld:WellKnownName>
                <sld:Fill>
                  <sld:CssParameter name="fill">#b577ce</sld:CssParameter>
                </sld:Fill>
                <sld:Stroke/>
              </sld:Mark>
              <sld:Size>7.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Police nationale</sld:Name>
          <sld:Title>Police nationale
            <sld:Localized lang="de">Nationalpolizei</sld:Localized>
            <sld:Localized lang="fr">Police nationale</sld:Localized>
            <sld:Localized lang="it">Polizia nazionale</sld:Localized>
            <sld:Localized lang="rm">Polizia naziunala</sld:Localized>
            <sld:Localized lang="en">National Police</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>police-FR</ogc:PropertyName>
              <ogc:Literal>police</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:PointSymbolizer>
            <sld:Graphic>
              <sld:Mark>
                <sld:WellKnownName>circle</sld:WellKnownName>
                <sld:Fill>
                  <sld:CssParameter name="fill">#457bef</sld:CssParameter>
                </sld:Fill>
                <sld:Stroke/>
              </sld:Mark>
              <sld:Size>7.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Police (sans categorie)</sld:Name>
          <sld:Title>Police (sans categorie)
            <sld:Localized lang="de">Polizei (ohne Kategorie)</sld:Localized>
            <sld:Localized lang="fr">Police (sans catégorie)</sld:Localized>
            <sld:Localized lang="it">Polizia (senza categoria)</sld:Localized>
            <sld:Localized lang="rm">Polizia (senza categoria)</sld:Localized>
            <sld:Localized lang="en">Police (uncategorized)</sld:Localized>
          </sld:Title>
          <ogc:Filter>
          <ogc:And>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>amenity</ogc:PropertyName>
              <ogc:Literal>police</ogc:Literal>
            </ogc:PropertyIsEqualTo>
            <ogc:Not>
              <ogc:Or>
                  <ogc:PropertyIsEqualTo>
                                      <ogc:PropertyName>police-FR</ogc:PropertyName>
                                      <ogc:Literal>gendarmerie</ogc:Literal>
                  </ogc:PropertyIsEqualTo>
                  <ogc:PropertyIsEqualTo>
                                      <ogc:PropertyName>police-FR</ogc:PropertyName>
                                      <ogc:Literal>police_municipale</ogc:Literal>
                  </ogc:PropertyIsEqualTo>
                  <ogc:PropertyIsEqualTo>
                                      <ogc:PropertyName>police-FR</ogc:PropertyName>
                                      <ogc:Literal>police</ogc:Literal>
                  </ogc:PropertyIsEqualTo>
              </ogc:Or>
            </ogc:Not>
          </ogc:And>
          </ogc:Filter>
          <sld:PointSymbolizer>
            <sld:Graphic>
              <sld:Mark>
                <sld:WellKnownName>circle</sld:WellKnownName>
                <sld:Fill>
                  <sld:CssParameter name="fill">#ffffff</sld:CssParameter>
                </sld:Fill>
                <sld:Stroke>
                  <CssParameter name="stroke">#000000</CssParameter>
                  <CssParameter name="stroke-width">2</CssParameter>
               </sld:Stroke>
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
              <sld:CssParameter name="fill">#000000</sld:CssParameter>
            </sld:Fill>
             <VendorOption name="spaceAround">10</VendorOption>
             <VendorOption name="autoWrap">20</VendorOption>
          </sld:TextSymbolizer>
        </sld:Rule>
      </sld:FeatureTypeStyle>
    </sld:UserStyle>
  </sld:NamedLayer>
</sld:StyledLayerDescriptor>