# :man_shrugging: What is GeoJSON?

> :bulb: GeoJSON is a format for encoding a variety of geographic data structures. _📖 [Read more](https://geojson.org/)._

```json
{
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [125.6, 10.1]
  },
  "properties": {
    "name": "Dinagat Islands"
  }
}
```

GeoJSON supports the following geometry types: **Point**, **LineString**, **Polygon**, **MultiPoint**, **MultiLineString**, and **MultiPolygon**.

```json
{
  "type": "Point",
  "coordinates": [125.6, 10.1]
}
```

Geometric objects with additional properties are **Feature** objects. Sets of features are contained by **FeatureCollection** objects.

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [125.6, 10.1]
      },
      "properties": {
        "name": "Dinagat Islands"
      }
    }
  ]
}
```
