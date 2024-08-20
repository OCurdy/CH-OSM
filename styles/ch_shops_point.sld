<?xml version="1.0" encoding="UTF-8"?><sld:StyledLayerDescriptor xmlns="http://www.opengis.net/sld" xmlns:sld="http://www.opengis.net/sld" xmlns:gml="http://www.opengis.net/gml" xmlns:ogc="http://www.opengis.net/ogc" version="1.0.0">
  <sld:NamedLayer>
    <sld:Name>ch_shops_point</sld:Name>
    <sld:UserStyle>
      <sld:Name>ch_shops_point</sld:Name>
      <sld:FeatureTypeStyle>
        <sld:Name>name</sld:Name>
        <sld:Rule> <!--règle pour visualisation échelle [MAX:zoom6 MIN:zoom16]-->
          <sld:Name>magasin</sld:Name>
          <sld:Title>magasin
              <sld:Localized lang="de">Geschäft</sld:Localized>
              <sld:Localized lang="fr">magasin</sld:Localized>
              <sld:Localized lang="it">negozio</sld:Localized>
              <sld:Localized lang="rm">butia</sld:Localized>
              <sld:Localized lang="en">shop</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsLike  wildCard="%" singleChar="#" escape="!">
                <ogc:PropertyName>shop</ogc:PropertyName>
                <ogc:Literal>%</ogc:Literal>
            </ogc:PropertyIsLike>
          </ogc:Filter>
          <MinScaleDenominator>5000</MinScaleDenominator>
          <MaxScaleDenominator>5000000</MaxScaleDenominator>
          <sld:PointSymbolizer>
            <sld:Graphic>
              <sld:Mark>
                <sld:WellKnownName>circle</sld:WellKnownName>
                <sld:Fill>
                  <sld:CssParameter name="fill">#ac39ac</sld:CssParameter>
                </sld:Fill>
              </sld:Mark>
              <sld:Size>3.00000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule> <!--règle pour visualisation à échelle worldwide, [MIN:zoom6 et - -->
          <sld:Name>magasin</sld:Name>
          <sld:Title>magasin
              <sld:Localized lang="de">Geschäft</sld:Localized>
              <sld:Localized lang="fr">magasin</sld:Localized>
              <sld:Localized lang="it">negozio</sld:Localized>
              <sld:Localized lang="rm">butia</sld:Localized>
              <sld:Localized lang="en">shop</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsLike  wildCard="%" singleChar="#" escape="!">
                <ogc:PropertyName>shop</ogc:PropertyName>
                <ogc:Literal>%</ogc:Literal>
            </ogc:PropertyIsLike>
          </ogc:Filter>
          <MinScaleDenominator>5000000</MinScaleDenominator>
          <MaxScaleDenominator>70000000</MaxScaleDenominator>
          <sld:PointSymbolizer>
            <sld:Graphic>
              <sld:Mark>
                <sld:WellKnownName>circle</sld:WellKnownName>
                <sld:Fill>
                  <sld:CssParameter name="fill">#ac39ac</sld:CssParameter>
                </sld:Fill>
              </sld:Mark>
              <sld:Size>1.500000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
      </sld:FeatureTypeStyle>
      <sld:FeatureTypeStyle> <!--règle pour visualisation avec icônes, [MIN:zoom16 et + -->
        <sld:Name>name</sld:Name>
        <sld:Rule>
          <sld:Name>Alcool (alcohol)</sld:Name>
          <sld:Title>Alcool (alcohol)
              <sld:Localized lang="de">Alkohol</sld:Localized>
              <sld:Localized lang="fr">Alcool</sld:Localized>
              <sld:Localized lang="it">Alcolici</sld:Localized>
              <sld:Localized lang="rm">Alcohol</sld:Localized>
              <sld:Localized lang="en">Alcohol</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>shop</ogc:PropertyName>
              <ogc:Literal>alcohol</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>5000</MaxScaleDenominator>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/osmic/shop/alcohol-14.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>5.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Animalerie (pet)</sld:Name>
          <sld:Title>Animalerie (pet)
            <sld:Localized lang="de">Tierhandlung</sld:Localized>
            <sld:Localized lang="fr">Animalerie</sld:Localized>
            <sld:Localized lang="it">Negozio di animali</sld:Localized>
            <sld:Localized lang="rm">Butia d'animals</sld:Localized>
            <sld:Localized lang="en">Pet Shop</sld:Localized>
          </sld:Title>          
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>shop</ogc:PropertyName>
              <ogc:Literal>pet</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>5000</MaxScaleDenominator>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/osmic/shop/pet-14.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>5.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Audio (hifi)</sld:Name>
          <sld:Title>Audio (hifi)
              <sld:Localized lang="de">Audio (HiFi)</sld:Localized>
              <sld:Localized lang="fr">Audio (HiFi)</sld:Localized>
              <sld:Localized lang="it">Audio (HiFi)</sld:Localized>
              <sld:Localized lang="rm">Audio (HiFi)</sld:Localized>
              <sld:Localized lang="en">Audio (HiFi)</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>shop</ogc:PropertyName>
              <ogc:Literal>hifi</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>5000</MaxScaleDenominator>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/osmic/shop/hifi-14.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>5.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Beauté (beauty)</sld:Name>
          <sld:Title>Beauté (beauty)
              <sld:Localized lang="de">Schönheit</sld:Localized>
              <sld:Localized lang="fr">Beauté</sld:Localized>
              <sld:Localized lang="it">Bellezza</sld:Localized>
              <sld:Localized lang="rm">Pulchritud</sld:Localized>
              <sld:Localized lang="en">Beauty</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>shop</ogc:PropertyName>
              <ogc:Literal>beauty</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>5000</MaxScaleDenominator>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/osmic/shop/beauty-14.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>5.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Bijoutier/ joaillier (jewelry)</sld:Name>
          <sld:Title>Bijoutier/ joaillier (jewelry)
              <sld:Localized lang="de">Juwelier</sld:Localized>
              <sld:Localized lang="fr">Bijoutier/ joaillier</sld:Localized>
              <sld:Localized lang="it">Gioielliere</sld:Localized>
              <sld:Localized lang="rm">Giuvelier</sld:Localized>
              <sld:Localized lang="en">Jewelry</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>shop</ogc:PropertyName>
              <ogc:Literal>jewelry</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>5000</MaxScaleDenominator>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/osmic/shop/jewellery-14.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>5.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Boissons (beverages)</sld:Name>
          <sld:Title>Boissons (beverages)
              <sld:Localized lang="de">Getränke</sld:Localized>
              <sld:Localized lang="fr">Boissons</sld:Localized>
              <sld:Localized lang="it">Bevande</sld:Localized>
              <sld:Localized lang="rm">Beveras</sld:Localized>
              <sld:Localized lang="en">Beverages</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>shop</ogc:PropertyName>
              <ogc:Literal>beverages</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>5000</MaxScaleDenominator>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/osmic/shop/beverages-14.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>5.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Boucherie (butcher)</sld:Name>
          <sld:Title>Boucherie (butcher)
              <sld:Localized lang="de">Metzgerei</sld:Localized>
              <sld:Localized lang="fr">Boucherie</sld:Localized>
              <sld:Localized lang="it">Macelleria</sld:Localized>
              <sld:Localized lang="rm">Butscheria</sld:Localized>
              <sld:Localized lang="en">Butcher</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>shop</ogc:PropertyName>
              <ogc:Literal>butcher</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>5000</MaxScaleDenominator>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/osmic/shop/butcher-14.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>5.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Boulangerie (bakery)</sld:Name>
          <sld:Title>Boulangerie (bakery)
              <sld:Localized lang="de">Bäckerei</sld:Localized>
              <sld:Localized lang="fr">Boulangerie</sld:Localized>
              <sld:Localized lang="it">Panetteria</sld:Localized>
              <sld:Localized lang="rm">Paschicaria</sld:Localized>
              <sld:Localized lang="en">Bakery</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>shop</ogc:PropertyName>
              <ogc:Literal>bakery</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>5000</MaxScaleDenominator>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/osmic/shop/bakery-14.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>5.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Title>Bricolage (doityourself)
              <sld:Localized lang="de">Heimwerken</sld:Localized>
              <sld:Localized lang="fr">Bricolage</sld:Localized>
              <sld:Localized lang="it">Fai da te</sld:Localized>
              <sld:Localized lang="rm">Lavurs manualas</sld:Localized>
              <sld:Localized lang="en">Do it yourself</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>shop</ogc:PropertyName>
              <ogc:Literal>doityourself</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>5000</MaxScaleDenominator>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/osmic/shop/doityourself-14.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>5.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Cadeau/ souvenir (gift)</sld:Name>
          <sld:Title>Cadeau/ souvenir (gift)
              <sld:Localized lang="de">Geschenk/ Andenken</sld:Localized>
              <sld:Localized lang="fr">Cadeau/ souvenir</sld:Localized>
              <sld:Localized lang="it">Regalo/ souvenir</sld:Localized>
              <sld:Localized lang="rm">Regal/ souvenir</sld:Localized>
              <sld:Localized lang="en">Gift/ Souvenir</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>shop</ogc:PropertyName>
              <ogc:Literal>gift</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>5000</MaxScaleDenominator>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/osmic/shop/gift-14.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>5.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Café (coffee)</sld:Name>
          <sld:Title>Café (coffee)
              <sld:Localized lang="de">Café</sld:Localized>
              <sld:Localized lang="fr">Café</sld:Localized>
              <sld:Localized lang="it">Caffè</sld:Localized>
              <sld:Localized lang="rm">Café</sld:Localized>
              <sld:Localized lang="en">Coffee</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>shop</ogc:PropertyName>
              <ogc:Literal>coffee</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>5000</MaxScaleDenominator>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/osmic/shop/coffee-14.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>5.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Chaussures (shoes)</sld:Name>
          <sld:Title>Chaussures (shoes)
              <sld:Localized lang="de">Schuhe</sld:Localized>
              <sld:Localized lang="fr">Chaussures</sld:Localized>
              <sld:Localized lang="it">Scarpe</sld:Localized>
              <sld:Localized lang="rm">Chauts</sld:Localized>
              <sld:Localized lang="en">Shoes</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>shop</ogc:PropertyName>
              <ogc:Literal>shoes</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>5000</MaxScaleDenominator>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/osmic/shop/shoes-14.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>5.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Coiffeur (hairdresser)</sld:Name>
          <sld:Title>Coiffeur (hairdresser)
              <sld:Localized lang="de">Friseur</sld:Localized>
              <sld:Localized lang="fr">Coiffeur</sld:Localized>
              <sld:Localized lang="it">Parrucchiere</sld:Localized>
              <sld:Localized lang="rm">Coiffeur</sld:Localized>
              <sld:Localized lang="en">Hairdresser</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>shop</ogc:PropertyName>
              <ogc:Literal>hairdresser</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>5000</MaxScaleDenominator>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/osmic/shop/hairdresser-14.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>5.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Confiserie (confectionery)</sld:Name>
          <sld:Title>Confiserie (confectionery)
              <sld:Localized lang="de">Süsswaren</sld:Localized>
              <sld:Localized lang="fr">Confiserie</sld:Localized>
              <sld:Localized lang="it">Confetteria</sld:Localized>
              <sld:Localized lang="rm">Confisaria</sld:Localized>
              <sld:Localized lang="en">Confectionery</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>shop</ogc:PropertyName>
              <ogc:Literal>confectionery</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>5000</MaxScaleDenominator>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/osmic/shop/confectionery-14.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>5.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Divers (shop-other)</sld:Name>
          <sld:Title>Divers (shop-other)
              <sld:Localized lang="de">Verschiedenes</sld:Localized>
              <sld:Localized lang="fr">Divers</sld:Localized>
              <sld:Localized lang="it">Varie</sld:Localized>
              <sld:Localized lang="rm">Divers</sld:Localized>
              <sld:Localized lang="en">Other</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>shop</ogc:PropertyName>
              <ogc:Literal>shop-other</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>5000</MaxScaleDenominator>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/osmic/shop/shop-other-16.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>5.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Droguerie (chemist)</sld:Name>
          <sld:Title>Droguerie (chemist)
              <sld:Localized lang="de">Drogerie</sld:Localized>
              <sld:Localized lang="fr">Droguerie</sld:Localized>
              <sld:Localized lang="it">Drogheria</sld:Localized>
              <sld:Localized lang="rm">Drogheria</sld:Localized>
              <sld:Localized lang="en">Chemist</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>shop</ogc:PropertyName>
              <ogc:Literal>chemist</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>5000</MaxScaleDenominator>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/osmic/shop/chemist-14.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>5.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Electronique (electronics)</sld:Name>
          <sld:Title>Electronique (electronics)
              <sld:Localized lang="de">Elektronik</sld:Localized>
              <sld:Localized lang="fr">Electronique</sld:Localized>
              <sld:Localized lang="it">Elettronica</sld:Localized>
              <sld:Localized lang="rm">Electronica</sld:Localized>
              <sld:Localized lang="en">Electronics</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>shop</ogc:PropertyName>
              <ogc:Literal>electronics</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>5000</MaxScaleDenominator>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/osmic/shop/electronics-14.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>5.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Epicerie (convenience)</sld:Name>
          <sld:Title>Epicerie (convenience)
              <sld:Localized lang="de">Lebensmittelgeschäft</sld:Localized>
              <sld:Localized lang="fr">Epicerie</sld:Localized>
              <sld:Localized lang="it">Drogheria</sld:Localized>
              <sld:Localized lang="rm">Butia da victualias</sld:Localized>
              <sld:Localized lang="en">Convenience Store</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>shop</ogc:PropertyName>
              <ogc:Literal>convenience</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>5000</MaxScaleDenominator>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/osmic/shop/convenience-14.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>5.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Fleuriste (florist)</sld:Name>
          <sld:Title>Fleuriste (florist)
              <sld:Localized lang="de">Blumenladen</sld:Localized>
              <sld:Localized lang="fr">Fleuriste</sld:Localized>
              <sld:Localized lang="it">Fioraio</sld:Localized>
              <sld:Localized lang="rm">Flurist</sld:Localized>
              <sld:Localized lang="en">Florist</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>shop</ogc:PropertyName>
              <ogc:Literal>florist</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>5000</MaxScaleDenominator>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/osmic/shop/florist-14.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>5.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Glace (ice-cream)</sld:Name>
          <sld:Title>Glace (ice-cream)
              <sld:Localized lang="de">Eis</sld:Localized>
              <sld:Localized lang="fr">Glace</sld:Localized>
              <sld:Localized lang="it">Gelato</sld:Localized>
              <sld:Localized lang="rm">Glatsch</sld:Localized>
              <sld:Localized lang="en">Ice Cream</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>shop</ogc:PropertyName>
              <ogc:Literal>ice-cream</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>5000</MaxScaleDenominator>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/osmic/shop/ice-cream-14.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>5.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Impression/ photocopie (copyshop)</sld:Name>
          <sld:Title>Impression/ photocopie (copyshop)
              <sld:Localized lang="de">Druckerei/ Kopierladen</sld:Localized>
              <sld:Localized lang="fr">Impression/ photocopie</sld:Localized>
              <sld:Localized lang="it">Stamperia/ copisteria</sld:Localized>
              <sld:Localized lang="rm">Stampaderia/ copia</sld:Localized>
              <sld:Localized lang="en">Print/ Copyshop</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>shop</ogc:PropertyName>
              <ogc:Literal>copyshop</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>5000</MaxScaleDenominator>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/osmic/shop/copyshop-14.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>5.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Jardinerie (garden-centre)</sld:Name>
          <sld:Title>Jardinerie (garden-centre)
              <sld:Localized lang="de">Gartencenter</sld:Localized>
              <sld:Localized lang="fr">Jardinerie</sld:Localized>
              <sld:Localized lang="it">Giardinaggio</sld:Localized>
              <sld:Localized lang="rm">Jardinaria</sld:Localized>
              <sld:Localized lang="en">Garden Centre</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>shop</ogc:PropertyName>
              <ogc:Literal>garden-centre</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>5000</MaxScaleDenominator>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/osmic/shop/garden-centre-14.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>5.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Jouets (toys)</sld:Name>
          <sld:Title>Jouets (toys)
              <sld:Localized lang="de">Spielzeug</sld:Localized>
              <sld:Localized lang="fr">Jouets</sld:Localized>
              <sld:Localized lang="it">Giocattoli</sld:Localized>
              <sld:Localized lang="rm">Gieus</sld:Localized>
              <sld:Localized lang="en">Toys</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>shop</ogc:PropertyName>
              <ogc:Literal>toys</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>5000</MaxScaleDenominator>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/osmic/shop/toys-14.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>5.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Journaux (news)</sld:Name>
          <sld:Title>Journaux (news)
              <sld:Localized lang="de">Zeitungen</sld:Localized>
              <sld:Localized lang="fr">Journaux</sld:Localized>
              <sld:Localized lang="it">Giornali</sld:Localized>
              <sld:Localized lang="rm">Gieus</sld:Localized>
              <sld:Localized lang="en">Newspapers</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>shop</ogc:PropertyName>
              <ogc:Literal>news</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>5000</MaxScaleDenominator>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/osmic/shop/news-14.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>5.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Kiosque (kiosk)</sld:Name>
          <sld:Title>Kiosque (kiosk)
              <sld:Localized lang="de">Kiosk</sld:Localized>
              <sld:Localized lang="fr">Kiosque</sld:Localized>
              <sld:Localized lang="it">Chiosco</sld:Localized>
              <sld:Localized lang="rm">Chiosc</sld:Localized>
              <sld:Localized lang="en">Kiosk</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>shop</ogc:PropertyName>
              <ogc:Literal>kiosk</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>5000</MaxScaleDenominator>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/osmic/shop/kiosk-14.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>5.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Laverie (laundry)</sld:Name>
          <sld:Title>Laverie (laundry)
              <sld:Localized lang="de">Wäscherei</sld:Localized>
              <sld:Localized lang="fr">Laverie</sld:Localized>
              <sld:Localized lang="it">Lavanderia</sld:Localized>
              <sld:Localized lang="rm">Lavadira</sld:Localized>
              <sld:Localized lang="en">Laundry</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>shop</ogc:PropertyName>
              <ogc:Literal>laundry</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>5000</MaxScaleDenominator>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/osmic/shop/laundry-14.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>5.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Librairie (books)</sld:Name>
          <sld:Title>Librairie (books)
              <sld:Localized lang="de">Buchhandlung</sld:Localized>
              <sld:Localized lang="fr">Librairie</sld:Localized>
              <sld:Localized lang="it">Libreria</sld:Localized>
              <sld:Localized lang="rm">Libraria</sld:Localized>
              <sld:Localized lang="en">Bookstore</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>shop</ogc:PropertyName>
              <ogc:Literal>books</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>5000</MaxScaleDenominator>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/osmic/shop/books-14.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>5.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Meuble (furniture)</sld:Name>
          <sld:Title>Meuble (furniture)
              <sld:Localized lang="de">Möbel</sld:Localized>
              <sld:Localized lang="fr">Meuble</sld:Localized>
              <sld:Localized lang="it">Mobili</sld:Localized>
              <sld:Localized lang="rm">Mobiglias</sld:Localized>
              <sld:Localized lang="en">Furniture</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>shop</ogc:PropertyName>
              <ogc:Literal>furniture</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>5000</MaxScaleDenominator>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/osmic/shop/furniture-14.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>5.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Opticien (optician)</sld:Name>
          <sld:Title>Opticien (optician)
              <sld:Localized lang="de">Optiker</sld:Localized>
              <sld:Localized lang="fr">Opticien</sld:Localized>
              <sld:Localized lang="it">Ottico</sld:Localized>
              <sld:Localized lang="rm">Opticher</sld:Localized>
              <sld:Localized lang="en">Optician</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>shop</ogc:PropertyName>
              <ogc:Literal>optician</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>5000</MaxScaleDenominator>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/osmic/shop/optician-14.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>5.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Ordinateur (computer)</sld:Name>
          <sld:Title>Ordinateur (computer)
              <sld:Localized lang="de">Computer</sld:Localized>
              <sld:Localized lang="fr">Ordinateur</sld:Localized>
              <sld:Localized lang="it">Computer</sld:Localized>
              <sld:Localized lang="rm">Computer</sld:Localized>
              <sld:Localized lang="en">Computer</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>shop</ogc:PropertyName>
              <ogc:Literal>computer</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>5000</MaxScaleDenominator>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/osmic/shop/computer-14.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>5.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Papeterie (stationery)</sld:Name>
          <sld:Title>Papeterie (stationery)
              <sld:Localized lang="de">Schreibwaren</sld:Localized>
              <sld:Localized lang="fr">Papeterie</sld:Localized>
              <sld:Localized lang="it">Cartoleria</sld:Localized>
              <sld:Localized lang="rm">Papetaria</sld:Localized>
              <sld:Localized lang="en">Stationery</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>shop</ogc:PropertyName>
              <ogc:Literal>stationery</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>5000</MaxScaleDenominator>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/osmic/shop/stationery-14.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>5.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Photo</sld:Name>
          <sld:Title>Photo
              <sld:Localized lang="de">Foto</sld:Localized>
              <sld:Localized lang="fr">Photo</sld:Localized>
              <sld:Localized lang="it">Foto</sld:Localized>
              <sld:Localized lang="rm">Fotografia</sld:Localized>
              <sld:Localized lang="en">Photo</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>shop</ogc:PropertyName>
              <ogc:Literal>photo</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>5000</MaxScaleDenominator>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/osmic/shop/photo-14.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>5.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Pièces automobiles (car-parts)</sld:Name>
          <sld:Title>Pièces automobiles (car-parts)
              <sld:Localized lang="de">Autoteile</sld:Localized>
              <sld:Localized lang="fr">Pièces automobiles</sld:Localized>
              <sld:Localized lang="it">Ricambi auto</sld:Localized>
              <sld:Localized lang="rm">Parts d'autos</sld:Localized>
              <sld:Localized lang="en">Car Parts</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>shop</ogc:PropertyName>
              <ogc:Literal>car-parts</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>5000</MaxScaleDenominator>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/osmic/shop/car-parts-14.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>5.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Primeur (greengrocer)</sld:Name>
          <sld:Title>Primeur (greengrocer)
              <sld:Localized lang="de">Gemüsehändler</sld:Localized>
              <sld:Localized lang="fr">Primeur</sld:Localized>
              <sld:Localized lang="it">Fruttivendolo</sld:Localized>
              <sld:Localized lang="rm">Verdurer</sld:Localized>
              <sld:Localized lang="en">Greengrocer</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>shop</ogc:PropertyName>
              <ogc:Literal>greengrocer</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>5000</MaxScaleDenominator>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/osmic/shop/greengrocer-14.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>5.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Réparateur automobile (repair-car)</sld:Name>
          <sld:Title>Réparateur automobile (repair-car)
              <sld:Localized lang="de">Automechaniker</sld:Localized>
              <sld:Localized lang="fr">Réparateur automobile</sld:Localized>
              <sld:Localized lang="it">Meccanico</sld:Localized>
              <sld:Localized lang="rm">Reparatur d'autos</sld:Localized>
              <sld:Localized lang="en">Car Repair</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>shop</ogc:PropertyName>
              <ogc:Literal>repair-car</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>5000</MaxScaleDenominator>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/osmic/shop/repair-car-14.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>5.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Réparateur de vélo (repair-bicycle)</sld:Name>
          <sld:Title>Réparateur de vélo (repair-bicycle)
              <sld:Localized lang="de">Fahrradmechaniker</sld:Localized>
              <sld:Localized lang="fr">Réparateur de vélo</sld:Localized>
              <sld:Localized lang="it">Riparatore di biciclette</sld:Localized>
              <sld:Localized lang="rm">Reparatur da velo</sld:Localized>
              <sld:Localized lang="en">Bicycle Repair</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>shop</ogc:PropertyName>
              <ogc:Literal>repair-bicycle</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>5000</MaxScaleDenominator>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/osmic/shop/repair-bicycle-14.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>5.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Supermarché (supermarket)</sld:Name>
          <sld:Title>Supermarché (supermarket)
              <sld:Localized lang="de">Supermarkt</sld:Localized>
              <sld:Localized lang="fr">Supermarché</sld:Localized>
              <sld:Localized lang="it">Supermercato</sld:Localized>
              <sld:Localized lang="rm">Supermartg</sld:Localized>
              <sld:Localized lang="en">Supermarket</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>shop</ogc:PropertyName>
              <ogc:Literal>supermarket</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>5000</MaxScaleDenominator>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/osmic/shop/supermarket-14.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>5.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Tabac (tobacco)</sld:Name>
          <sld:Title>Tabac (tobacco)
              <sld:Localized lang="de">Tabak</sld:Localized>
              <sld:Localized lang="fr">Tabac</sld:Localized>
              <sld:Localized lang="it">Tabacco</sld:Localized>
              <sld:Localized lang="rm">Tobac</sld:Localized>
              <sld:Localized lang="en">Tobacco</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>shop</ogc:PropertyName>
              <ogc:Literal>tobacco</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>5000</MaxScaleDenominator>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/osmic/shop/tobacco-14.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>5.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Téléphonie mobile (mobile-phone)</sld:Name>
          <sld:Title>Téléphonie mobile (mobile-phone)
              <sld:Localized lang="de">Mobiltelefon</sld:Localized>
              <sld:Localized lang="fr">Téléphonie mobile</sld:Localized>
              <sld:Localized lang="it">Telefonia mobile</sld:Localized>
              <sld:Localized lang="rm">Telefons mobil</sld:Localized>
              <sld:Localized lang="en">Mobile Phone</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>shop</ogc:PropertyName>
              <ogc:Literal>mobile-phone</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>5000</MaxScaleDenominator>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/osmic/shop/mobile-phone-14.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>5.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Vélo (bicycle)</sld:Name>
          <sld:Title>Vélo (bicycle)
              <sld:Localized lang="de">Fahrrad</sld:Localized>
              <sld:Localized lang="fr">Vélo</sld:Localized>
              <sld:Localized lang="it">Bicicletta</sld:Localized>
              <sld:Localized lang="rm">Velo</sld:Localized>
              <sld:Localized lang="en">Bicycle</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>shop</ogc:PropertyName>
              <ogc:Literal>bicycle</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>5000</MaxScaleDenominator>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/osmic/shop/bicycle-14.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>5.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Vêtements (clothes)</sld:Name>
          <sld:Title>Vêtements (clothes)
              <sld:Localized lang="de">Kleidung</sld:Localized>
              <sld:Localized lang="fr">Vêtements</sld:Localized>
              <sld:Localized lang="it">Abbigliamento</sld:Localized>
              <sld:Localized lang="rm">Vestgadira</sld:Localized>
              <sld:Localized lang="en">Clothes</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>shop</ogc:PropertyName>
              <ogc:Literal>clothes</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>5000</MaxScaleDenominator>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/osmic/shop/clothes-14.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>5.000000</sld:Size>
            </sld:Graphic>
          </sld:PointSymbolizer>
        </sld:Rule>
        <sld:Rule>
          <sld:Name>Voiture (car)</sld:Name>
          <sld:Title>Voiture (car)
              <sld:Localized lang="de">Auto</sld:Localized>
              <sld:Localized lang="fr">Voiture</sld:Localized>
              <sld:Localized lang="it">Auto</sld:Localized>
              <sld:Localized lang="rm">Auto</sld:Localized>
              <sld:Localized lang="en">Car</sld:Localized>
          </sld:Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>shop</ogc:PropertyName>
              <ogc:Literal>car</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>5000</MaxScaleDenominator>
          <sld:PointSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <sld:Graphic>
              <sld:ExternalGraphic>
                <sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="images/osmic/shop/car-14.svg"/>
                <sld:Format>image/svg+xml</sld:Format>
              </sld:ExternalGraphic>
              <sld:Size>5.000000</sld:Size>
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
