import React from 'react'
import BDMap from 'react-bdmap/BDMap'
import MapTypeControl from 'react-bdmap/controls/MapTypeControl'
import NavigationControl from 'react-bdmap/controls/NavigationControl'
import GuardLine from '~/components/GuardLine'

export default class Home extends React.Component {
  public state = {
    center: new BMap.Point(114.139389, 22.436661),
  }
  public render() {
    return (
      <BDMap center={this.state.center} zoom={6} style={{ width: '100vw', height: '100vh' }} enableScrollWheelZoom>
        <MapTypeControl />
        <NavigationControl />
        <GuardLine />
      </BDMap>
    )
  }
}
