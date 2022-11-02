<?xml version="1.0" encoding="UTF-8"?><!--File Generated by symbo.xsl from Excel VCR Symbology StyleSheet--><!--Geometry Type LINE--><sld:StyledLayerDescriptor version="1.0.0" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ogc="http://www.opengis.net/ogc" xmlns:gml="http://www.opengis.net/gml" xmlns:sld="http://www.opengis.net/sld">
  <sld:NamedLayer>
    <sld:Name>france_bicycle_mtb_routes_line</sld:Name>
    <sld:UserStyle>
      <sld:Name>france_bicycle_mtb_routes_line</sld:Name>
      <sld:Title/>
      <sld:FeatureTypeStyle>
        <sld:Name>france_bicycle_mtb_routes_line </sld:Name>
        <sld:Rule>
          <sld:Name>Itinéraires cyclables internationaux et nationaux</sld:Name>
          <sld:Title>Itinéraire cyclable international et national</sld:Title>
          <ogc:Filter>
            <ogc:And>
              <ogc:Or>
                  <ogc:PropertyIsEqualTo>
                      <ogc:PropertyName>network</ogc:PropertyName>
                      <ogc:Literal>ncn</ogc:Literal>
                  </ogc:PropertyIsEqualTo>
                  <ogc:PropertyIsEqualTo>
                      <ogc:PropertyName>network</ogc:PropertyName>
                      <ogc:Literal>icn</ogc:Literal>
                  </ogc:PropertyIsEqualTo>
              </ogc:Or>
                  <ogc:PropertyIsNull>
                      <ogc:PropertyName>state</ogc:PropertyName>
                  </ogc:PropertyIsNull>
            </ogc:And>
          </ogc:Filter>
          <sld:LineSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Stroke>
              <sld:CssParameter name="stroke">#FF0000</sld:CssParameter>
              <sld:CssParameter name="stroke-width">14</sld:CssParameter>
              <sld:CssParameter name="stroke-linejoin">round</sld:CssParameter>
              <sld:CssParameter name="stroke-linecap">round</sld:CssParameter>
              <sld:CssParameter name="stroke-opacity">0.8</sld:CssParameter>
            </sld:Stroke>
          </sld:LineSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Itinéraires cyclables régionaux</sld:Name>
          <sld:Title>Itinéraire cyclable régional</sld:Title>
          <ogc:Filter>
            <ogc:And>
                <ogc:PropertyIsEqualTo>
                    <ogc:PropertyName>network</ogc:PropertyName>
                    <ogc:Literal>rcn</ogc:Literal>
                </ogc:PropertyIsEqualTo>
                <ogc:PropertyIsNull>
                    <ogc:PropertyName>state</ogc:PropertyName>
                </ogc:PropertyIsNull>
              </ogc:And>
          </ogc:Filter>
          <sld:MaxScaleDenominator>5000000.0</sld:MaxScaleDenominator>
          <sld:LineSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Stroke>
              <sld:CssParameter name="stroke">#9400D3</sld:CssParameter>
              <sld:CssParameter name="stroke-width">12</sld:CssParameter>
              <sld:CssParameter name="stroke-linejoin">round</sld:CssParameter>
              <sld:CssParameter name="stroke-linecap">round</sld:CssParameter>
              <sld:CssParameter name="stroke-opacity">0.8</sld:CssParameter>
            </sld:Stroke>
          </sld:LineSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Itinéraires cyclables locaux</sld:Name>
          <sld:Title>Itinéraire cyclable local</sld:Title>
          <ogc:Filter>
            <ogc:And>
                                <ogc:PropertyIsEqualTo>
                                                    <ogc:PropertyName>network</ogc:PropertyName>
                                                    <ogc:Literal>lcn</ogc:Literal>
                                </ogc:PropertyIsEqualTo>
                                <ogc:PropertyIsNull>
                                                    <ogc:PropertyName>state</ogc:PropertyName>
                                </ogc:PropertyIsNull>
            </ogc:And>
          </ogc:Filter>
          <sld:MaxScaleDenominator>3000000.0</sld:MaxScaleDenominator>
          <sld:LineSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Stroke>
              <sld:CssParameter name="stroke">#4642fe</sld:CssParameter>
              <sld:CssParameter name="stroke-width">10</sld:CssParameter>
              <sld:CssParameter name="stroke-linejoin">round</sld:CssParameter>
              <sld:CssParameter name="stroke-linecap">round</sld:CssParameter>
              <sld:CssParameter name="stroke-opacity">0.8</sld:CssParameter>
            </sld:Stroke>
          </sld:LineSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Itinéraires cyclables - non précisés</sld:Name>
          <sld:Title>Itinéraire cyclable - non précisé</sld:Title>
          <ogc:Filter>
            <ogc:And>
                                <ogc:Not>
                                                    <ogc:Or>
                                                                        <ogc:PropertyIsEqualTo>
                                                                                            <ogc:PropertyName>network</ogc:PropertyName>
                                                                                            <ogc:Literal>lcn</ogc:Literal>
                                                                        </ogc:PropertyIsEqualTo>
                                                                        <ogc:PropertyIsEqualTo>
                                                                                            <ogc:PropertyName>network</ogc:PropertyName>
                                                                                            <ogc:Literal>rcn</ogc:Literal>
                                                                        </ogc:PropertyIsEqualTo>
                                                                        <ogc:PropertyIsEqualTo>
                                                                                            <ogc:PropertyName>network</ogc:PropertyName>
                                                                                            <ogc:Literal>ncn</ogc:Literal>
                                                                        </ogc:PropertyIsEqualTo>
                                                                        <ogc:PropertyIsEqualTo>
                                                                                            <ogc:PropertyName>network</ogc:PropertyName>
                                                                                            <ogc:Literal>icn</ogc:Literal>
                                                                        </ogc:PropertyIsEqualTo>
                                                    </ogc:Or>
                                </ogc:Not>
                                <ogc:PropertyIsNull>
                                                    <ogc:PropertyName>state</ogc:PropertyName>
                                </ogc:PropertyIsNull>
            </ogc:And>
          </ogc:Filter>
          <sld:MaxScaleDenominator>3000000.0</sld:MaxScaleDenominator>
          <sld:LineSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Stroke>
              <sld:CssParameter name="stroke">#000000</sld:CssParameter>
              <sld:CssParameter name="stroke-width">10</sld:CssParameter>
              <sld:CssParameter name="stroke-linejoin">round</sld:CssParameter>
              <sld:CssParameter name="stroke-linecap">round</sld:CssParameter>
              <sld:CssParameter name="stroke-opacity">0.8</sld:CssParameter>
            </sld:Stroke>
          </sld:LineSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Itinéraires cyclables tout terrain</sld:Name>
          <sld:Title>Itinéraire cyclable tout terrain</sld:Title>
          <ogc:Filter>
            <ogc:And>
                                <ogc:PropertyIsEqualTo>
                                                    <ogc:PropertyName>route</ogc:PropertyName>
                                                    <ogc:Literal>mtb</ogc:Literal>
                                </ogc:PropertyIsEqualTo>
                                <ogc:PropertyIsNull>
                                                    <ogc:PropertyName>state</ogc:PropertyName>
                                </ogc:PropertyIsNull>
            </ogc:And>
          </ogc:Filter>
          <sld:MaxScaleDenominator>2000000.0</sld:MaxScaleDenominator>
          <sld:LineSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Stroke>
              <sld:CssParameter name="stroke">#D2691E</sld:CssParameter>
              <sld:CssParameter name="stroke-width">16</sld:CssParameter>
              <sld:CssParameter name="stroke-linejoin">round</sld:CssParameter>
              <sld:CssParameter name="stroke-linecap">round</sld:CssParameter>
              <sld:CssParameter name="stroke-opacity">0.3</sld:CssParameter>
            </sld:Stroke>
          </sld:LineSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Itinéraires cyclables en proposition</sld:Name>
          <sld:Title>Itinéraire cyclable en proposition</sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
                                <ogc:PropertyName>state</ogc:PropertyName>
                                <ogc:Literal>proposed</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <sld:LineSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Stroke>
              <sld:CssParameter name="stroke">#FFDC00</sld:CssParameter>
              <sld:CssParameter name="stroke-width">14</sld:CssParameter>
              <sld:CssParameter name="stroke-linejoin">round</sld:CssParameter>
              <sld:CssParameter name="stroke-linecap">round</sld:CssParameter>
              <sld:CssParameter name="stroke-opacity">1</sld:CssParameter>
              <sld:CssParameter name="stroke-dasharray">1 50</sld:CssParameter>
            </sld:Stroke>
          </sld:LineSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <!--sld:Name>Itinéraires cyclables internationaux et nationaux Label TextSymbolizer</sld:Name-->
          <ogc:Filter>
            <ogc:And>
                                <ogc:PropertyIsEqualTo>
                                                    <ogc:PropertyName>route</ogc:PropertyName>
                                                    <ogc:Literal>bicycle</ogc:Literal>
                                </ogc:PropertyIsEqualTo>
                                <ogc:Or>
                                                    <ogc:PropertyIsEqualTo>
                                                                        <ogc:PropertyName>network</ogc:PropertyName>
                                                                        <ogc:Literal>ncn</ogc:Literal>
                                                    </ogc:PropertyIsEqualTo>
                                                    <ogc:PropertyIsEqualTo>
                                                                        <ogc:PropertyName>network</ogc:PropertyName>
                                                                        <ogc:Literal>icn</ogc:Literal>
                                                    </ogc:PropertyIsEqualTo>
                                </ogc:Or>
            </ogc:And>
          </ogc:Filter>
          <sld:MaxScaleDenominator>1000000.0</sld:MaxScaleDenominator>
          <sld:TextSymbolizer>
            <sld:Label>
              <ogc:PropertyName>ref</ogc:PropertyName>
            </sld:Label>
            <sld:Font>
              <sld:CssParameter name="font-family">Arial</sld:CssParameter>
              <sld:CssParameter name="font-size">11</sld:CssParameter>
              <sld:CssParameter name="font-style">normal </sld:CssParameter>
              <sld:CssParameter name="font-weight">bold</sld:CssParameter>
            </sld:Font>
            <sld:LabelPlacement>
              <sld:PointPlacement>
                <sld:AnchorPoint>
                  <sld:AnchorPointX>0.5</sld:AnchorPointX>
                  <sld:AnchorPointY>0.5</sld:AnchorPointY>
                </sld:AnchorPoint>
              </sld:PointPlacement>
            </sld:LabelPlacement>
            <sld:Fill>
              <sld:CssParameter name="fill">#FFFFFF</sld:CssParameter>
            </sld:Fill>
            <sld:Graphic>
              <sld:Mark>
                <sld:WellKnownName>square</sld:WellKnownName>
                <sld:Fill>
                  <sld:CssParameter name="fill">#FF0000</sld:CssParameter>
                </sld:Fill>
                <sld:Stroke>
                  <sld:CssParameter name="stroke">#FFFFFF</sld:CssParameter>
                </sld:Stroke>
              </sld:Mark>
            </sld:Graphic>
            <sld:VendorOption name="graphic-resize">stretch</sld:VendorOption>
            <sld:VendorOption name="graphic-margin">2</sld:VendorOption>
            <sld:VendorOption name="repeat">150</sld:VendorOption>
            <sld:VendorOption name="group">yes</sld:VendorOption>
          </sld:TextSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <!--sld:Name>Itinéraires cyclables r?gionaux Label TextSymbolizer</sld:Name-->
          <ogc:Filter>
            <ogc:And>
                                <ogc:PropertyIsEqualTo>
                                                    <ogc:PropertyName>route</ogc:PropertyName>
                                                    <ogc:Literal>bicycle</ogc:Literal>
                                </ogc:PropertyIsEqualTo>
                                <ogc:PropertyIsEqualTo>
                                                    <ogc:PropertyName>network</ogc:PropertyName>
                                                    <ogc:Literal>rcn</ogc:Literal>
                                </ogc:PropertyIsEqualTo>
            </ogc:And>
          </ogc:Filter>
          <sld:MaxScaleDenominator>600000.0</sld:MaxScaleDenominator>
          <sld:TextSymbolizer>
            <sld:Label>
              <ogc:PropertyName>ref</ogc:PropertyName>
            </sld:Label>
            <sld:Font>
              <sld:CssParameter name="font-family">Arial</sld:CssParameter>
              <sld:CssParameter name="font-size">11</sld:CssParameter>
              <sld:CssParameter name="font-style">normal </sld:CssParameter>
              <sld:CssParameter name="font-weight">bold</sld:CssParameter>
            </sld:Font>
            <sld:LabelPlacement>
              <sld:PointPlacement>
                <sld:AnchorPoint>
                  <sld:AnchorPointX>0.5</sld:AnchorPointX>
                  <sld:AnchorPointY>0.5</sld:AnchorPointY>
                </sld:AnchorPoint>
              </sld:PointPlacement>
            </sld:LabelPlacement>
            <sld:Fill>
              <sld:CssParameter name="fill">#FFFFFF</sld:CssParameter>
            </sld:Fill>
            <sld:Graphic>
              <sld:Mark>
                <sld:WellKnownName>square</sld:WellKnownName>
                <sld:Fill>
                  <sld:CssParameter name="fill">#9400D3</sld:CssParameter>
                </sld:Fill>
                <sld:Stroke>
                  <sld:CssParameter name="stroke">#FFFFFF</sld:CssParameter>
                </sld:Stroke>
              </sld:Mark>
            </sld:Graphic>
            <sld:VendorOption name="graphic-resize">stretch</sld:VendorOption>
            <sld:VendorOption name="graphic-margin">2</sld:VendorOption>
            <sld:VendorOption name="repeat">150</sld:VendorOption>
            <sld:VendorOption name="group">yes</sld:VendorOption>
          </sld:TextSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <!--sld:Name>Itinéraires cyclables locaux Label TextSymbolizer</sld:Name-->
          <ogc:Filter>
            <ogc:And>
                                <ogc:PropertyIsEqualTo>
                                                    <ogc:PropertyName>route</ogc:PropertyName>
                                                    <ogc:Literal>bicycle</ogc:Literal>
                                </ogc:PropertyIsEqualTo>
                                <ogc:PropertyIsEqualTo>
                                                    <ogc:PropertyName>network</ogc:PropertyName>
                                                    <ogc:Literal>lcn</ogc:Literal>
                                </ogc:PropertyIsEqualTo>
            </ogc:And>
          </ogc:Filter>
          <sld:MaxScaleDenominator>200000.0</sld:MaxScaleDenominator>
          <sld:TextSymbolizer>
            <sld:Label>
              <ogc:PropertyName>ref</ogc:PropertyName>
            </sld:Label>
            <sld:Font>
              <sld:CssParameter name="font-family">Arial</sld:CssParameter>
              <sld:CssParameter name="font-size">11</sld:CssParameter>
              <sld:CssParameter name="font-style">normal </sld:CssParameter>
              <sld:CssParameter name="font-weight">bold</sld:CssParameter>
            </sld:Font>
            <sld:LabelPlacement>
              <sld:PointPlacement>
                <sld:AnchorPoint>
                  <sld:AnchorPointX>0.5</sld:AnchorPointX>
                  <sld:AnchorPointY>0.5</sld:AnchorPointY>
                </sld:AnchorPoint>
              </sld:PointPlacement>
            </sld:LabelPlacement>
            <sld:Fill>
              <sld:CssParameter name="fill">#FFFFFF</sld:CssParameter>
            </sld:Fill>
            <sld:Graphic>
              <sld:Mark>
                <sld:WellKnownName>square</sld:WellKnownName>
                <sld:Fill>
                  <sld:CssParameter name="fill">#4642fe</sld:CssParameter>
                </sld:Fill>
                <sld:Stroke>
                  <sld:CssParameter name="stroke">#FFFFFF</sld:CssParameter>
                </sld:Stroke>
              </sld:Mark>
            </sld:Graphic>
            <sld:VendorOption name="graphic-resize">stretch</sld:VendorOption>
            <sld:VendorOption name="graphic-margin">2</sld:VendorOption>
            <sld:VendorOption name="repeat">150</sld:VendorOption>
            <sld:VendorOption name="group">yes</sld:VendorOption>
          </sld:TextSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <!--sld:Name>Itinéraires cyclables - non précisés Label TextSymbolizer</sld:Name-->
          <ogc:Filter>
            <ogc:And>
                                <ogc:PropertyIsEqualTo>
                                                    <ogc:PropertyName>route</ogc:PropertyName>
                                                    <ogc:Literal>bicycle</ogc:Literal>
                                </ogc:PropertyIsEqualTo>
                                <ogc:Not>
                                                    <ogc:Or>
                                                                        <ogc:PropertyIsEqualTo>
                                                                                            <ogc:PropertyName>network</ogc:PropertyName>
                                                                                            <ogc:Literal>lcn</ogc:Literal>
                                                                        </ogc:PropertyIsEqualTo>
                                                                        <ogc:PropertyIsEqualTo>
                                                                                            <ogc:PropertyName>network</ogc:PropertyName>
                                                                                            <ogc:Literal>rcn</ogc:Literal>
                                                                        </ogc:PropertyIsEqualTo>
                                                                        <ogc:PropertyIsEqualTo>
                                                                                            <ogc:PropertyName>network</ogc:PropertyName>
                                                                                            <ogc:Literal>ncn</ogc:Literal>
                                                                        </ogc:PropertyIsEqualTo>
                                                                        <ogc:PropertyIsEqualTo>
                                                                                            <ogc:PropertyName>network</ogc:PropertyName>
                                                                                            <ogc:Literal>icn</ogc:Literal>
                                                                        </ogc:PropertyIsEqualTo>
                                                    </ogc:Or>
                                </ogc:Not>
            </ogc:And>
          </ogc:Filter>
          <sld:MaxScaleDenominator>200000.0</sld:MaxScaleDenominator>
          <sld:TextSymbolizer>
            <sld:Label>
              <ogc:PropertyName>ref</ogc:PropertyName>
            </sld:Label>
            <sld:Font>
              <sld:CssParameter name="font-family">Arial</sld:CssParameter>
              <sld:CssParameter name="font-size">11</sld:CssParameter>
              <sld:CssParameter name="font-style">normal </sld:CssParameter>
              <sld:CssParameter name="font-weight">bold</sld:CssParameter>
            </sld:Font>
            <sld:LabelPlacement>
              <sld:PointPlacement>
                <sld:AnchorPoint>
                  <sld:AnchorPointX>0.5</sld:AnchorPointX>
                  <sld:AnchorPointY>0.5</sld:AnchorPointY>
                </sld:AnchorPoint>
              </sld:PointPlacement>
            </sld:LabelPlacement>
            <sld:Fill>
              <sld:CssParameter name="fill">#FFFFFF</sld:CssParameter>
            </sld:Fill>
            <sld:Graphic>
              <sld:Mark>
                <sld:WellKnownName>square</sld:WellKnownName>
                <sld:Fill>
                  <sld:CssParameter name="fill">#000000</sld:CssParameter>
                </sld:Fill>
                <sld:Stroke>
                  <sld:CssParameter name="stroke">#FFFFFF</sld:CssParameter>
                </sld:Stroke>
              </sld:Mark>
            </sld:Graphic>
            <sld:VendorOption name="graphic-resize">stretch</sld:VendorOption>
            <sld:VendorOption name="graphic-margin">2</sld:VendorOption>
            <sld:VendorOption name="repeat">150</sld:VendorOption>
            <sld:VendorOption name="group">yes</sld:VendorOption>
          </sld:TextSymbolizer>
        </sld:Rule>
      </sld:FeatureTypeStyle>
    </sld:UserStyle>
  </sld:NamedLayer>
</sld:StyledLayerDescriptor>