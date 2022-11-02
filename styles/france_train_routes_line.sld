<?xml version="1.0" encoding="UTF-8"?>
<!--File Generated by symbo.xsl from Excel VCR Symbology StyleSheet-->
<!--Geometry Type LINE-->
<sld:StyledLayerDescriptor xmlns:xlink="http://www.w3.org/1999/xlink" 
                           xmlns:ogc="http://www.opengis.net/ogc" 
                           xmlns:gml="http://www.opengis.net/gml" 
                           xmlns:sld="http://www.opengis.net/sld"
                           version="1.0.0">
  <sld:NamedLayer>
    <sld:Name>france_train_routes_line</sld:Name>
    <sld:UserStyle>
      <sld:Name>france_train_routes_line</sld:Name>
      <sld:FeatureTypeStyle>
        <sld:Rule>
          <sld:Name>Ligne TGV</sld:Name>
          <sld:Title>Ligne TGV</sld:Title>
          <ogc:Filter>
           <!--Using <ogc:PropertyIsLike> instead of <ogc: PropertyIsEqualTo> to include all possible values associated with TGV-->          
            <ogc:PropertyIsLike  wildCard="%" singleChar="#" escape="!">
                <ogc:PropertyName>network</ogc:PropertyName>
                <ogc:Literal>TGV%</ogc:Literal>
            </ogc:PropertyIsLike>
          </ogc:Filter>
          <sld:LineSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Stroke>
              <sld:CssParameter name="stroke">
                <ogc:PropertyName>colour</ogc:PropertyName>
              </sld:CssParameter>
              <sld:CssParameter name="stroke-width">12</sld:CssParameter>
              <sld:CssParameter name="stroke-linejoin">round</sld:CssParameter>
              <sld:CssParameter name="stroke-linecap">round</sld:CssParameter>
              <sld:CssParameter name="stroke-opacity">1</sld:CssParameter>
            </sld:Stroke>
          </sld:LineSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Ligne du réseau Intercités</sld:Name>
          <sld:Title>Ligne du réseau Intercités</sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsLike  wildCard="%" singleChar="#" escape="!">
               <ogc:PropertyName>network</ogc:PropertyName>
               <ogc:Literal>Intercités%</ogc:Literal>
            </ogc:PropertyIsLike>
          </ogc:Filter>
          <sld:LineSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Stroke>
              <sld:CssParameter name="stroke">
                <ogc:PropertyName>colour</ogc:PropertyName>
              </sld:CssParameter>
              <sld:CssParameter name="stroke-width">12</sld:CssParameter>
              <sld:CssParameter name="stroke-linejoin">round</sld:CssParameter>
              <sld:CssParameter name="stroke-linecap">round</sld:CssParameter>
              <sld:CssParameter name="stroke-opacity">1</sld:CssParameter>
            </sld:Stroke>
          </sld:LineSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Ligne TER</sld:Name>
          <sld:Title>Ligne TER</sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsLike  wildCard="%" singleChar="#" escape="!">
               <ogc:PropertyName>network</ogc:PropertyName>
               <ogc:Literal>TER%</ogc:Literal>
            </ogc:PropertyIsLike>
          </ogc:Filter>
          <sld:LineSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Stroke>
              <sld:CssParameter name="stroke">
                <ogc:PropertyName>colour</ogc:PropertyName>
              </sld:CssParameter>
              <sld:CssParameter name="stroke-width">10</sld:CssParameter>
              <sld:CssParameter name="stroke-linejoin">round</sld:CssParameter>
              <sld:CssParameter name="stroke-linecap">round</sld:CssParameter>
              <sld:CssParameter name="stroke-opacity">1</sld:CssParameter>
            </sld:Stroke>
          </sld:LineSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Ligne RER</sld:Name>
          <sld:Title>Ligne RER</sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsLike  wildCard="%" singleChar="#" escape="!">
               <ogc:PropertyName>network</ogc:PropertyName>
               <ogc:Literal>RER%</ogc:Literal>
            </ogc:PropertyIsLike>
          </ogc:Filter>
          <sld:MaxScaleDenominator>1000000.0</sld:MaxScaleDenominator>
          <sld:LineSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Stroke>
              <sld:CssParameter name="stroke">
                <ogc:PropertyName>colour</ogc:PropertyName>
              </sld:CssParameter>
              <sld:CssParameter name="stroke-width">8</sld:CssParameter>
              <sld:CssParameter name="stroke-linejoin">round</sld:CssParameter>
              <sld:CssParameter name="stroke-linecap">round</sld:CssParameter>
              <sld:CssParameter name="stroke-opacity">1</sld:CssParameter>
            </sld:Stroke>
          </sld:LineSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Ligne du réseau Transilien</sld:Name>
          <sld:Title>Ligne du réseau Transilien</sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsLike  wildCard="%" singleChar="#" escape="!">
               <ogc:PropertyName>network</ogc:PropertyName>
               <ogc:Literal>Transilien%</ogc:Literal>
            </ogc:PropertyIsLike>
          </ogc:Filter>
          <sld:MaxScaleDenominator>1000000.0</sld:MaxScaleDenominator>
          <sld:LineSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Stroke>
              <sld:CssParameter name="stroke">
                <ogc:PropertyName>colour</ogc:PropertyName>
              </sld:CssParameter>
              <sld:CssParameter name="stroke-width">8</sld:CssParameter>
              <sld:CssParameter name="stroke-linejoin">round</sld:CssParameter>
              <sld:CssParameter name="stroke-linecap">round</sld:CssParameter>
              <sld:CssParameter name="stroke-opacity">1</sld:CssParameter>
            </sld:Stroke>
          </sld:LineSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Ligne locale</sld:Name>
          <sld:Title>Ligne locale</sld:Title>
          <ogc:Filter>
          <ogc:Or>
            <ogc:PropertyIsNotEqualTo>
               <ogc:PropertyName>network</ogc:PropertyName>
               <ogc:Literal>TGV%</ogc:Literal>
            </ogc:PropertyIsNotEqualTo>
            <ogc:PropertyIsNotEqualTo>
               <ogc:PropertyName>network</ogc:PropertyName>
               <ogc:Literal>Intercités%</ogc:Literal>
            </ogc:PropertyIsNotEqualTo>
               <ogc:PropertyIsNotEqualTo>
               <ogc:PropertyName>network</ogc:PropertyName>
               <ogc:Literal>TER%</ogc:Literal>
            </ogc:PropertyIsNotEqualTo>
            <ogc:PropertyIsNotEqualTo>
               <ogc:PropertyName>network</ogc:PropertyName>
               <ogc:Literal>RER%</ogc:Literal>
            </ogc:PropertyIsNotEqualTo>
               <ogc:PropertyIsNotEqualTo>
               <ogc:PropertyName>network</ogc:PropertyName>
               <ogc:Literal>Transilien%</ogc:Literal>
            </ogc:PropertyIsNotEqualTo>
          </ogc:Or> 
          </ogc:Filter>
          <sld:MaxScaleDenominator>1000000.0</sld:MaxScaleDenominator>
          <sld:LineSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Stroke>
              <sld:CssParameter name="stroke">
                <ogc:PropertyName>colour</ogc:PropertyName>
              </sld:CssParameter>
              <sld:CssParameter name="stroke-width">8</sld:CssParameter>
              <sld:CssParameter name="stroke-linejoin">round</sld:CssParameter>
              <sld:CssParameter name="stroke-linecap">round</sld:CssParameter>
              <sld:CssParameter name="stroke-opacity">1</sld:CssParameter>
            </sld:Stroke>
          </sld:LineSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <ogc:Filter>
           <ogc:PropertyIsLike  wildCard="%" singleChar="#" escape="!">
                <ogc:PropertyName>network</ogc:PropertyName>
                <ogc:Literal>TGV%</ogc:Literal>
            </ogc:PropertyIsLike>
          </ogc:Filter>
          <sld:MaxScaleDenominator>5000000.0</sld:MaxScaleDenominator>
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
            <sld:Halo>
              <sld:Radius>
                <ogc:Literal>1</ogc:Literal>
              </sld:Radius>
              <sld:Fill>
                <sld:CssParameter name="fill">#FFFFFF</sld:CssParameter>
              </sld:Fill>
            </sld:Halo>
            <sld:Fill>
              <sld:CssParameter name="fill">#4C4C4C</sld:CssParameter>
            </sld:Fill>
            <sld:Graphic>
              <sld:Mark>
                <sld:WellKnownName>square</sld:WellKnownName>
                <sld:Fill>
                  <sld:CssParameter name="fill">
                    <ogc:PropertyName>colour</ogc:PropertyName>
                  </sld:CssParameter>
                </sld:Fill>
              </sld:Mark>
            </sld:Graphic>
            <sld:VendorOption name="graphic-resize">stretch</sld:VendorOption>
            <sld:VendorOption name="graphic-margin">2</sld:VendorOption>
            <sld:VendorOption name="spaceAround">5</sld:VendorOption>
            <sld:VendorOption name="repeat">4000</sld:VendorOption>
            <sld:VendorOption name="group">yes</sld:VendorOption>
            <sld:VendorOption name="maxDisplacement">1000</sld:VendorOption>
          </sld:TextSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <ogc:Filter>
            <ogc:PropertyIsLike  wildCard="%" singleChar="#" escape="!">
               <ogc:PropertyName>network</ogc:PropertyName>
               <ogc:Literal>Intercités%</ogc:Literal>
            </ogc:PropertyIsLike>
          </ogc:Filter>
          <sld:MaxScaleDenominator>5000000.0</sld:MaxScaleDenominator>
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
            <sld:Halo>
              <sld:Radius>
                <ogc:Literal>1</ogc:Literal>
              </sld:Radius>
              <sld:Fill>
                <sld:CssParameter name="fill">#FFFFFF</sld:CssParameter>
              </sld:Fill>
            </sld:Halo>
            <sld:Fill>
              <sld:CssParameter name="fill">#4C4C4C</sld:CssParameter>
            </sld:Fill>
            <sld:Graphic>
              <sld:Mark>
                <sld:WellKnownName>square</sld:WellKnownName>
                <sld:Fill>
                  <sld:CssParameter name="fill">
                    <ogc:PropertyName>colour</ogc:PropertyName>
                  </sld:CssParameter>
                </sld:Fill>
              </sld:Mark>
            </sld:Graphic>            
            <sld:VendorOption name="graphic-resize">stretch</sld:VendorOption>
            <sld:VendorOption name="graphic-margin">2</sld:VendorOption>
            <sld:VendorOption name="spaceAround">5</sld:VendorOption>
            <sld:VendorOption name="repeat">4000</sld:VendorOption>
            <sld:VendorOption name="group">yes</sld:VendorOption>
            <sld:VendorOption name="maxDisplacement">1000</sld:VendorOption>
          </sld:TextSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <ogc:Filter>
            <ogc:PropertyIsLike  wildCard="%" singleChar="#" escape="!">
               <ogc:PropertyName>network</ogc:PropertyName>
               <ogc:Literal>TER%</ogc:Literal>
            </ogc:PropertyIsLike>
          </ogc:Filter>
          <sld:MaxScaleDenominator>3000000.0</sld:MaxScaleDenominator>
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
            <sld:Halo>
              <sld:Radius>
                <ogc:Literal>1</ogc:Literal>
              </sld:Radius>
              <sld:Fill>
                <sld:CssParameter name="fill">#FFFFFF</sld:CssParameter>
              </sld:Fill>
            </sld:Halo>
            <sld:Fill>
              <sld:CssParameter name="fill">#4C4C4C</sld:CssParameter>
            </sld:Fill>
             <sld:Graphic>
              <sld:Mark>
                <sld:WellKnownName>square</sld:WellKnownName>
                <sld:Fill>
                  <sld:CssParameter name="fill">
                    <ogc:PropertyName>colour</ogc:PropertyName>
                  </sld:CssParameter>
                </sld:Fill>
              </sld:Mark>
            </sld:Graphic>           
            <sld:VendorOption name="graphic-resize">stretch</sld:VendorOption>
            <sld:VendorOption name="graphic-margin">2</sld:VendorOption>
            <sld:VendorOption name="spaceAround">5</sld:VendorOption>
            <sld:VendorOption name="repeat">4000</sld:VendorOption>
            <sld:VendorOption name="group">yes</sld:VendorOption>
            <sld:VendorOption name="maxDisplacement">1000</sld:VendorOption>
          </sld:TextSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <ogc:Filter>
            <ogc:PropertyIsLike  wildCard="%" singleChar="#" escape="!">
               <ogc:PropertyName>network</ogc:PropertyName>
               <ogc:Literal>RER%</ogc:Literal>
            </ogc:PropertyIsLike>
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
            <sld:Halo>
              <sld:Radius>
                <ogc:Literal>1</ogc:Literal>
              </sld:Radius>
              <sld:Fill>
                <sld:CssParameter name="fill">#FFFFFF</sld:CssParameter>
              </sld:Fill>
            </sld:Halo>
            <sld:Fill>
              <sld:CssParameter name="fill">#4C4C4C</sld:CssParameter>
            </sld:Fill>
            <sld:Graphic>
              <sld:Mark>
                <sld:WellKnownName>square</sld:WellKnownName>
                <sld:Fill>
                  <sld:CssParameter name="fill">
                    <ogc:PropertyName>colour</ogc:PropertyName>
                  </sld:CssParameter>
                </sld:Fill>
              </sld:Mark>
            </sld:Graphic>            
            <sld:VendorOption name="graphic-resize">stretch</sld:VendorOption>
            <sld:VendorOption name="graphic-margin">2</sld:VendorOption>
            <sld:VendorOption name="spaceAround">5</sld:VendorOption>
            <sld:VendorOption name="repeat">4000</sld:VendorOption>
            <sld:VendorOption name="group">yes</sld:VendorOption>
            <sld:VendorOption name="maxDisplacement">1000</sld:VendorOption>
          </sld:TextSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <ogc:Filter>
            <ogc:PropertyIsLike  wildCard="%" singleChar="#" escape="!">
               <ogc:PropertyName>network</ogc:PropertyName>
               <ogc:Literal>Transilien%</ogc:Literal>
            </ogc:PropertyIsLike>
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
            <sld:Halo>
              <sld:Radius>
                <ogc:Literal>1</ogc:Literal>
              </sld:Radius>
              <sld:Fill>
                <sld:CssParameter name="fill">#FFFFFF</sld:CssParameter>
              </sld:Fill>
            </sld:Halo>
            <sld:Fill>
              <sld:CssParameter name="fill">#4C4C4C</sld:CssParameter>
            </sld:Fill>
            <sld:Graphic>
              <sld:Mark>
                <sld:WellKnownName>square</sld:WellKnownName>
                <sld:Fill>
                  <sld:CssParameter name="fill">
                    <ogc:PropertyName>colour</ogc:PropertyName>
                  </sld:CssParameter>
                </sld:Fill>
              </sld:Mark>
            </sld:Graphic>            
            <sld:VendorOption name="graphic-resize">stretch</sld:VendorOption>
            <sld:VendorOption name="graphic-margin">2</sld:VendorOption>
            <sld:VendorOption name="spaceAround">5</sld:VendorOption>
            <sld:VendorOption name="repeat">4000</sld:VendorOption>
            <sld:VendorOption name="group">yes</sld:VendorOption>
            <sld:VendorOption name="maxDisplacement">1000</sld:VendorOption>
          </sld:TextSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <ogc:Filter>
          <ogc:Or>
            <ogc:PropertyIsNotEqualTo>
               <ogc:PropertyName>network</ogc:PropertyName>
               <ogc:Literal>TGV%</ogc:Literal>
            </ogc:PropertyIsNotEqualTo>
            <ogc:PropertyIsNotEqualTo>
               <ogc:PropertyName>network</ogc:PropertyName>
               <ogc:Literal>Intercités%</ogc:Literal>
            </ogc:PropertyIsNotEqualTo>
               <ogc:PropertyIsNotEqualTo>
               <ogc:PropertyName>network</ogc:PropertyName>
               <ogc:Literal>TER%</ogc:Literal>
            </ogc:PropertyIsNotEqualTo>
            <ogc:PropertyIsNotEqualTo>
               <ogc:PropertyName>network</ogc:PropertyName>
               <ogc:Literal>RER%</ogc:Literal>
            </ogc:PropertyIsNotEqualTo>
               <ogc:PropertyIsNotEqualTo>
               <ogc:PropertyName>network</ogc:PropertyName>
               <ogc:Literal>Transilien%</ogc:Literal>
            </ogc:PropertyIsNotEqualTo>
          </ogc:Or>  
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
            <sld:Halo>
              <sld:Radius>
                <ogc:Literal>1</ogc:Literal>
              </sld:Radius>
              <sld:Fill>
                <sld:CssParameter name="fill">#FFFFFF</sld:CssParameter>
              </sld:Fill>
            </sld:Halo>
            <sld:Fill>
              <sld:CssParameter name="fill">#4C4C4C</sld:CssParameter>
            </sld:Fill>
            <sld:Graphic>
              <sld:Mark>
                <sld:WellKnownName>square</sld:WellKnownName>
                <sld:Fill>
                  <sld:CssParameter name="fill">
                    <ogc:PropertyName>colour</ogc:PropertyName>
                  </sld:CssParameter>
                </sld:Fill>
              </sld:Mark>
            </sld:Graphic>            
            <sld:VendorOption name="graphic-resize">stretch</sld:VendorOption>
            <sld:VendorOption name="graphic-margin">2</sld:VendorOption>
            <sld:VendorOption name="spaceAround">5</sld:VendorOption>
            <sld:VendorOption name="repeat">4000</sld:VendorOption>
            <sld:VendorOption name="group">yes</sld:VendorOption>
            <sld:VendorOption name="maxDisplacement">1000</sld:VendorOption>
          </sld:TextSymbolizer>
        </sld:Rule>
      </sld:FeatureTypeStyle>
    </sld:UserStyle>
  </sld:NamedLayer>
</sld:StyledLayerDescriptor>
