# Changelog 

All notable changes to this project will be documented in this file.

## [1.1.1] - 2024-02-16 


### Added

- Link for downloading data in gpkg format* (pending the integration of a plugin on GeoServer for activation).

- Map background selector including the Classic map background (ch.swisstopo.pixelkarte-farbe) and Orthophoto (ch.swisstopo.swissimage) from Swisstopo.

- Selectable layers outlining the cantonal, communal borders, and the Grand Geneva region.

- Link to the metadata sheets (geocat catalogue), adapted according to the user's language.

- Vineyard (Built and Land Use Category).

- Romansh language in the language selector.

### Changed

- BaseMap background: Replacement of the OSM Standard with a customized JawgMaps tile using OSM data for the base map background.

- Design: New color scheme (red, white, and black) aligned with the logo's graphic charter and updated to Helvetica font.

- Buttons with icons for better understanding.

- Geographic coordinate system: Display of the pointer and downloading of data including Swiss coordinates (EPSG:2056).

- Improved Drag & Drop for compatibility with the CH1903-LV95 format (except for multi-polygons).


### Removed 

- Access to the Railway Lines layer (lack of data).

- Access to the Connection Nodes layer (only 20 data available in Switzerland).

- Access to the Fiber Mutualization Points layer (lack of data).

- Access to the Copper Sub-distributors layer (lack of data).


### Fixed

### Security
