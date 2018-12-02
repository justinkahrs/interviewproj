import React, { Component } from 'react'
import { Map, TileLayer } from 'react-leaflet'

class MapComponent extends Component {
  render() {
    const position = [this.props.center.lat, this.props.center.lng]

    return (
      <Map center={position} zoom={this.props.zoom} {...this.props}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {this.props.children}
      </Map>
    )
  }
}

export default MapComponent
