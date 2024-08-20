<?xml version="1.0" encoding="UTF-8"?><sld:StyledLayerDescriptor xmlns="http://www.opengis.net/sld" xmlns:sld="http://www.opengis.net/sld" xmlns:gml="http://www.opengis.net/gml" xmlns:ogc="http://www.opengis.net/ogc" version="1.0.0">
  <sld:NamedLayer>
    <sld:Name>ch_social_facility_point_cluster</sld:Name>
    <sld:UserStyle>
      <sld:Name>ch_social_facility_point_cluster</sld:Name>
      <sld:FeatureTypeStyle>
        <Transformation>
            <ogc:Function name="gs:PointStacker">
                <ogc:Function name="parameter">
                <ogc:Literal>data</ogc:Literal>
                </ogc:Function>
                <ogc:Function name="parameter">
                <ogc:Literal>cellSize</ogc:Literal>
                <ogc:Literal>150</ogc:Literal>
                </ogc:Function>
                <ogc:Function name="parameter">
                <ogc:Literal>outputBBOX</ogc:Literal>
                <ogc:Function name="env">
                <ogc:Literal>wms_bbox</ogc:Literal>
                </ogc:Function>
                </ogc:Function>
                <ogc:Function name="parameter">
                <ogc:Literal>outputWidth</ogc:Literal>
                <ogc:Function name="env">
                <ogc:Literal>wms_width</ogc:Literal>
                </ogc:Function>
                </ogc:Function>
                <ogc:Function name="parameter">
                <ogc:Literal>outputHeight</ogc:Literal>
                <ogc:Function name="env">
                    <ogc:Literal>wms_height</ogc:Literal>
                </ogc:Function>
                </ogc:Function>
            </ogc:Function>
        </Transformation>
        <Rule>
          <Name>Entre 5 et 25 structures sociales</Name>
          <Title>Entre 5 et 25 structures sociales
              <Localized lang="de">Zwischen 5 und 25 soziale Strukturen</Localized>
              <Localized lang="fr">Entre 5 et 25 structures sociales</Localized>
              <Localized lang="it">Tra 5 e 25 strutture sociali</Localized>
              <Localized lang="rm">Tranter 5 e 25 structuras socialas</Localized>
              <Localized lang="en">Between 5 and 25 social structures</Localized>
          </Title>
          <ogc:Filter>
            <ogc:PropertyIsBetween>
              <ogc:PropertyName>count</ogc:PropertyName>
              <ogc:LowerBoundary>
                <ogc:Literal>5</ogc:Literal>
              </ogc:LowerBoundary>
              <ogc:UpperBoundary>
                <ogc:Literal>25</ogc:Literal>
              </ogc:UpperBoundary>
            </ogc:PropertyIsBetween>
          </ogc:Filter>
          <MinScaleDenominator>550000</MinScaleDenominator>   
          <PointSymbolizer>
            <Graphic>
              <Mark>
                <WellKnownName>circle</WellKnownName>
                <Fill>
                  <CssParameter name="fill">#9bd8ce</CssParameter>
                </Fill>
              </Mark>
              <Size>15</Size>
            </Graphic>
          </PointSymbolizer>
          <TextSymbolizer>
            <Label>
              <ogc:PropertyName>count</ogc:PropertyName>
            </Label>
            <Font>
              <CssParameter name="font-family">Arial</CssParameter>
              <CssParameter name="font-size">9</CssParameter>
              <CssParameter name="font-weight">bold</CssParameter>
            </Font>
            <LabelPlacement>
              <PointPlacement>
                <AnchorPoint>
                  <AnchorPointX>0.5</AnchorPointX>
                  <AnchorPointY>0.8</AnchorPointY>
                </AnchorPoint>
              </PointPlacement>
            </LabelPlacement>
            <Halo>
               <Radius>1</Radius>
               <Fill>
                 <CssParameter name="fill">#71c8b9</CssParameter>
                 <CssParameter name="fill-opacity">0.9</CssParameter>
               </Fill>
            </Halo>
            <Fill>
              <CssParameter name="fill">#FFFFFF</CssParameter>
              <CssParameter name="fill-opacity">1.0</CssParameter>
            </Fill>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>Entre 25 et 50 structures sociales</Name>
          <Title>Entre 25 et 50 structures sociales
              <Localized lang="de">Zwischen 25 und 50 soziale Strukturen</Localized>
              <Localized lang="fr">Entre 25 et 50 structures sociales</Localized>
              <Localized lang="it">Tra 25 e 50 strutture sociali</Localized>
              <Localized lang="rm">Tranter 25 e 50 structuras socialas</Localized>
              <Localized lang="en">Between 25 and 50 social structures</Localized>
          </Title>
          <ogc:Filter>
            <ogc:PropertyIsBetween>
              <ogc:PropertyName>count</ogc:PropertyName>
              <ogc:LowerBoundary>
                <ogc:Literal>25</ogc:Literal>
              </ogc:LowerBoundary>
              <ogc:UpperBoundary>
                <ogc:Literal>50</ogc:Literal>
              </ogc:UpperBoundary>
            </ogc:PropertyIsBetween>
          </ogc:Filter>
          <MinScaleDenominator>550000</MinScaleDenominator>   
          <PointSymbolizer>
            <Graphic>
              <Mark>
                <WellKnownName>circle</WellKnownName>
                <Fill>
                  <CssParameter name="fill">#8dd3c7</CssParameter>
                </Fill>
              </Mark>
              <Size>20</Size>
            </Graphic>
          </PointSymbolizer>
           <TextSymbolizer>
            <Label>
              <ogc:PropertyName>count</ogc:PropertyName>
            </Label>
            <Font>
              <CssParameter name="font-family">Arial</CssParameter>
              <CssParameter name="font-size">10</CssParameter>
              <CssParameter name="font-weight">bold</CssParameter>
            </Font>
            <LabelPlacement>
              <PointPlacement>
                <AnchorPoint>
                  <AnchorPointX>0.5</AnchorPointX>
                  <AnchorPointY>0.8</AnchorPointY>
                </AnchorPoint>
              </PointPlacement>
            </LabelPlacement>
            <Halo>
               <Radius>1</Radius>
               <Fill>
                 <CssParameter name="fill">#71c8b9</CssParameter>
                 <CssParameter name="fill-opacity">0.9</CssParameter>
               </Fill>
            </Halo>
            <Fill>
              <CssParameter name="fill">#FFFFFF</CssParameter>
              <CssParameter name="fill-opacity">1.0</CssParameter>
            </Fill>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>Entre 50 et 100 structures sociales</Name>
          <Title>Entre 50 et 100 structures sociales
              <Localized lang="de">Zwischen 50 und 100 soziale Strukturen</Localized>
              <Localized lang="fr">Entre 50 et 100 structures sociales</Localized>
              <Localized lang="it">Tra 50 e 100 strutture sociali</Localized>
              <Localized lang="rm">Tranter 50 e 100 structuras socialas</Localized>
              <Localized lang="en">Between 50 and 100 social structures</Localized>
          </Title>
          <ogc:Filter>
            <ogc:PropertyIsBetween>
              <ogc:PropertyName>count</ogc:PropertyName>
              <ogc:LowerBoundary>
                <ogc:Literal>50</ogc:Literal>
              </ogc:LowerBoundary>
              <ogc:UpperBoundary>
                <ogc:Literal>100</ogc:Literal>
              </ogc:UpperBoundary>
            </ogc:PropertyIsBetween>
          </ogc:Filter>
          <MinScaleDenominator>550000</MinScaleDenominator>   
          <PointSymbolizer>
            <Graphic>
              <Mark>
                <WellKnownName>circle</WellKnownName>
                <Fill>
                  <CssParameter name="fill">#7fcec0</CssParameter>
                </Fill>
              </Mark>
              <Size>30</Size>
            </Graphic>
          </PointSymbolizer>
           <TextSymbolizer>
            <Label>
              <ogc:PropertyName>count</ogc:PropertyName>
            </Label>
            <Font>
              <CssParameter name="font-family">Arial</CssParameter>
              <CssParameter name="font-size">11</CssParameter>
              <CssParameter name="font-weight">bold</CssParameter>
            </Font>
            <LabelPlacement>
              <PointPlacement>
                <AnchorPoint>
                  <AnchorPointX>0.5</AnchorPointX>
                  <AnchorPointY>0.8</AnchorPointY>
                </AnchorPoint>
              </PointPlacement>
            </LabelPlacement>
            <Halo>
               <Radius>1</Radius>
               <Fill>
                 <CssParameter name="fill">#71c8b9</CssParameter>
                 <CssParameter name="fill-opacity">0.9</CssParameter>
               </Fill>
            </Halo>
            <Fill>
              <CssParameter name="fill">#FFFFFF</CssParameter>
              <CssParameter name="fill-opacity">1.0</CssParameter>
            </Fill>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>Plus de 100 structures sociales</Name>
          <Title>Plus de 100 structures sociales
              <Localized lang="de">Mehr als 100 soziale Strukturen</Localized>
              <Localized lang="fr">Plus de 100 structures sociales</Localized>
              <Localized lang="it">Oltre 100 strutture sociali</Localized>
              <Localized lang="rm">Plirs che 100 structuras socialas</Localized>
              <Localized lang="en">More than 100 social structures</Localized>
          </Title>
          <ogc:Filter>
            <ogc:PropertyIsGreaterThan>
              <ogc:PropertyName>count</ogc:PropertyName>
              <ogc:Literal>100</ogc:Literal>
            </ogc:PropertyIsGreaterThan>
          </ogc:Filter>
          <MinScaleDenominator>550000</MinScaleDenominator>   
          <PointSymbolizer>
            <Graphic>
              <Mark>
                <WellKnownName>circle</WellKnownName>
                <Fill>
                  <CssParameter name="fill">#71c8b9</CssParameter>
                </Fill>
              </Mark>
              <Size>35</Size>
            </Graphic>
          </PointSymbolizer>
           <TextSymbolizer>
            <Label>
              <ogc:PropertyName>count</ogc:PropertyName>
            </Label>
            <Font>
              <CssParameter name="font-family">Arial</CssParameter>
              <CssParameter name="font-size">12</CssParameter>
              <CssParameter name="font-weight">bold</CssParameter>
            </Font>
            <LabelPlacement>
              <PointPlacement>
                <AnchorPoint>
                  <AnchorPointX>0.5</AnchorPointX>
                  <AnchorPointY>0.8</AnchorPointY>
                </AnchorPoint>
              </PointPlacement>
            </LabelPlacement>
            <Halo>
               <Radius>1</Radius>
               <Fill>
                 <CssParameter name="fill">#71c8b9</CssParameter>
                 <CssParameter name="fill-opacity">0.9</CssParameter>
               </Fill>
            </Halo>
            <Fill>
              <CssParameter name="fill">#FFFFFF</CssParameter>
              <CssParameter name="fill-opacity">1.0</CssParameter>
            </Fill>
          </TextSymbolizer>
        </Rule>
      </sld:FeatureTypeStyle>
      <sld:FeatureTypeStyle>
        <sld:Name>SVG_Symbolizer</sld:Name>
        <sld:Rule> <!--règle pour visualisation à échelle locale, MAX:zoom12] et - -->
          <sld:Name>Service social -local</sld:Name>
          <sld:Title>Service social
              <sld:Localized lang="de">Sozialdienst</sld:Localized>
              <sld:Localized lang="fr">Service social</sld:Localized>
              <sld:Localized lang="it">Servizio sociale</sld:Localized>
              <sld:Localized lang="rm">Servets social</sld:Localized>
              <sld:Localized lang="en">Social service</sld:Localized>
          </sld:Title>
          <ogc:Filter>
          <ogc:And>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>amenity</ogc:PropertyName>
              <ogc:Literal>social_facility</ogc:Literal>
            </ogc:PropertyIsEqualTo>
            <!--Add social_facility=* who are not tagged with any amenity=social_facily-->
            <ogc:Not>
              <ogc:PropertyIsNull>
                <ogc:PropertyName>social_facility</ogc:PropertyName>
              </ogc:PropertyIsNull>
            </ogc:Not>
          </ogc:And>  
          </ogc:Filter>
          <MaxScaleDenominator>200000</MaxScaleDenominator>
          <sld:PointSymbolizer>
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/wikiosm/social/social_facility-762141.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>20.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule> <!--règle pour visualisation à échelle departementale, ]MIN:zoom11-MAX:zoom8]-->
          <sld:Name>Service social - dep</sld:Name>
          <sld:Title>Service social
              <sld:Localized lang="de">Sozialdienst</sld:Localized>
              <sld:Localized lang="fr">Service social</sld:Localized>
              <sld:Localized lang="it">Servizio sociale</sld:Localized>
              <sld:Localized lang="rm">Servets social</sld:Localized>
              <sld:Localized lang="en">Social service</sld:Localized>
          </sld:Title>
          <ogc:Filter>
          <ogc:And>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>amenity</ogc:PropertyName>
              <ogc:Literal>social_facility</ogc:Literal>
            </ogc:PropertyIsEqualTo>
            <!--Add social_facility=* who are not tagged with any amenity=social_facily-->
            <ogc:Not>
              <ogc:PropertyIsNull>
                <ogc:PropertyName>social_facility</ogc:PropertyName>
              </ogc:PropertyIsNull>
            </ogc:Not>
          </ogc:And>  
          </ogc:Filter>
          <MinScaleDenominator>200000</MinScaleDenominator>
          <MaxScaleDenominator>1000000</MaxScaleDenominator>
          <sld:PointSymbolizer>
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/wikiosm/social/social_facility-762141.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>15.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule> <!--règle pour visualisation à échelle locale, MAX:zoom11] et - -->
          <sld:Name>Centre communautaire -local</sld:Name>
          <sld:Title>Centre communautaire
              <sld:Localized lang="de">Gemeinschaftszentrum</sld:Localized>
              <sld:Localized lang="fr">Centre communautaire</sld:Localized>
              <sld:Localized lang="it">Centro comunitario</sld:Localized>
              <sld:Localized lang="rm">Center da cuminanza</sld:Localized>
              <sld:Localized lang="en">Community center</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>amenity</ogc:PropertyName>
              <ogc:Literal>community_centre</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>200000</MaxScaleDenominator>
          <sld:PointSymbolizer>
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/wikiosm/social/community_centre-14.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>20.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule> <!--règle pour visualisation à échelle departementale, [MIN:zoom11-MAX:zoom8]-->
          <sld:Name>Centre communautaire - dep</sld:Name>
          <sld:Title>Centre communautaire
              <sld:Localized lang="de">Gemeinschaftszentrum</sld:Localized>
              <sld:Localized lang="fr">Centre communautaire</sld:Localized>
              <sld:Localized lang="it">Centro comunitario</sld:Localized>
              <sld:Localized lang="rm">Center da cuminanza</sld:Localized>
              <sld:Localized lang="en">Community center</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>amenity</ogc:PropertyName>
              <ogc:Literal>community_centre</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MinScaleDenominator>200000</MinScaleDenominator>
          <MaxScaleDenominator>1000000</MaxScaleDenominator>
          <sld:PointSymbolizer>
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/wikiosm/social/community_centre-14.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>15.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule> <!--règle pour visualisation à échelle locale, MAX:zoom12] et - -->
          <sld:Name>Centre associatif - local</sld:Name>
          <sld:Title>Centre associatif
              <sld:Localized lang="de">Vereinszentrum</sld:Localized>
              <sld:Localized lang="fr">Centre associatif</sld:Localized>
              <sld:Localized lang="it">Centro associativo</sld:Localized>
              <sld:Localized lang="rm">Center associativ</sld:Localized>
              <sld:Localized lang="en">Association center</sld:Localized>
          </sld:Title>
          <ogc:Filter>
          <ogc:Or>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>amenity</ogc:PropertyName>
              <ogc:Literal>social_centre</ogc:Literal>
            </ogc:PropertyIsEqualTo>
            <ogc:Or>
              <ogc:PropertyIsEqualTo>
                  <ogc:PropertyName>office</ogc:PropertyName>
                  <ogc:Literal>association</ogc:Literal>
              </ogc:PropertyIsEqualTo>
              <ogc:PropertyIsEqualTo>
                  <ogc:PropertyName>office</ogc:PropertyName>
                  <ogc:Literal>ngo</ogc:Literal>
              </ogc:PropertyIsEqualTo>
              <ogc:PropertyIsEqualTo>
                  <ogc:PropertyName>office</ogc:PropertyName>
                  <ogc:Literal>union</ogc:Literal>
              </ogc:PropertyIsEqualTo>
            </ogc:Or> 
          </ogc:Or>  
          </ogc:Filter>
          <MaxScaleDenominator>200000</MaxScaleDenominator>
          <sld:PointSymbolizer>
            <sld:Graphic>
              <sld:Mark>
                <sld:WellKnownName>circle</sld:WellKnownName>
                <sld:Fill>
                  <sld:CssParameter name="fill">#216b76</sld:CssParameter>
                </sld:Fill>
              </sld:Mark>
              <sld:Size>10.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule> <!--règle pour visualisation à échelle departementale, [MIN:zoom11-MAX:zoom8]-->
          <sld:Name>Centre associatif - dep</sld:Name>
          <sld:Title>Centre associatif
              <sld:Localized lang="de">Vereinszentrum</sld:Localized>
              <sld:Localized lang="fr">Centre associatif</sld:Localized>
              <sld:Localized lang="it">Centro associativo</sld:Localized>
              <sld:Localized lang="rm">Center associativ</sld:Localized>
              <sld:Localized lang="en">Association center</sld:Localized>
          </sld:Title>
          <ogc:Filter>
          <ogc:Or>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>amenity</ogc:PropertyName>
              <ogc:Literal>social_centre</ogc:Literal>
            </ogc:PropertyIsEqualTo>
            <ogc:Or>
              <ogc:PropertyIsEqualTo>
                  <ogc:PropertyName>office</ogc:PropertyName>
                  <ogc:Literal>association</ogc:Literal>
              </ogc:PropertyIsEqualTo>
              <ogc:PropertyIsEqualTo>
                  <ogc:PropertyName>office</ogc:PropertyName>
                  <ogc:Literal>ngo</ogc:Literal>
              </ogc:PropertyIsEqualTo>
              <ogc:PropertyIsEqualTo>
                  <ogc:PropertyName>office</ogc:PropertyName>
                  <ogc:Literal>union</ogc:Literal>
              </ogc:PropertyIsEqualTo>
            </ogc:Or> 
          </ogc:Or>  
          </ogc:Filter>
          <MinScaleDenominator>200000</MinScaleDenominator>
          <MaxScaleDenominator>1000000</MaxScaleDenominator>
          <sld:PointSymbolizer>
            <sld:Graphic>
              <sld:Mark>
                <sld:WellKnownName>circle</sld:WellKnownName>
                <sld:Fill>
                  <sld:CssParameter name="fill">#216b76</sld:CssParameter>
                </sld:Fill>
              </sld:Mark>
              <sld:Size>7.50000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
      </sld:FeatureTypeStyle>
    </sld:UserStyle>
  </sld:NamedLayer>
</sld:StyledLayerDescriptor>
