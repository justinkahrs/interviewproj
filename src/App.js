import React, { Component } from 'react'
import { Marker, Popup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster'

import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import vehicles from './vehicles'
import MapComponent from './MapComponent'
import './App.css'
import 'react-leaflet-markercluster/dist/styles.min.css'

class App extends Component {
  state = { panelOpen: false, selected: null }

  _markers = vehicles.map(vehicle => (
    <Marker
      key={vehicle.lat + vehicle.lng}
      position={{ lat: vehicle.lat, lng: vehicle.lng }}
      onClick={() => this.toggleDrawer(vehicle)}
    >
      <Popup onClose={this.clearSelected}>
        <span>{`Name: ${vehicle.name}`}</span>
      </Popup>
    </Marker>
  ))

  clearSelected = () => this.setState({ selected: null })

  toggleDrawer = vehicle =>
    this.setState(({ panelOpen }) => ({
      panelOpen: !panelOpen,
      selected: vehicle,
    }))

  render() {
    const center = { lat: 37.78, lng: -122.45 }
    const { selected } = this.state
    return (
      <>
        <Grid container spacing={24}>
          <Grid item xs={2}>
            Menu
          </Grid>
          <Grid item xs={8}>
            <MapComponent
              center={center}
              zoom={13}
              maxZoom={20}
              onClick={this.clearSelected}
            >
              <MarkerClusterGroup>{this._markers}</MarkerClusterGroup>
            </MapComponent>
          </Grid>
          <Grid item xs={2}>
            {this.state.selected && (
              <div>
                <div style={{ padding: '1rem 5rem 1rem 1rem' }}>
                  <strong>Name: </strong>
                  <span>{selected.name}</span>
                </div>
                <Divider />
                <div style={{ padding: '1rem 5rem 1rem 1rem' }}>
                  <strong>Enabled: </strong>
                  <span>{`${selected.enabled}`}</span>
                </div>
              </div>
            )}
          </Grid>
        </Grid>
      </>
    )
  }
}

export default App
