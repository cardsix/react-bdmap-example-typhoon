import React from 'react'
import BDMap from 'react-bdmap/BDMap'
import MapTypeControl from 'react-bdmap/controls/MapTypeControl'
import NavigationControl from 'react-bdmap/controls/NavigationControl'
import Polyline from 'react-bdmap/overlays/Polyline'
import GuardLine from '~/components/GuardLine'
import Dot from '~/components/Dot'
import data from './mockData'
import CustomOverlay from 'react-bdmap/overlays/CustomOverlay'
import icon from './typhoon.png'

const colors = ['red', 'yellow', 'orange', 'green', 'cyan']

interface State {
  center: BMap.Point
  current: BMap.Point
  realPath: BMap.Point[]
}

export default class Home extends React.Component<{}, State> {
  public constructor(props: {}) {
    super(props)
    const last = data.points[data.points.length - 1]
    this.state = {
      center: new BMap.Point(114.139389, 22.436661),
      current: new BMap.Point(parseFloat(last.lng), parseFloat(last.lat)),
      realPath: data.points.map(m => new BMap.Point(parseFloat(m.lng), parseFloat(m.lat))),
    }
  }

  public render() {
    const { forecast } = data.points[data.points.length - 1]
    return (
      <BDMap center={this.state.center} zoom={6} style={{ width: '100vw', height: '100vh' }} enableScrollWheelZoom>
        <MapTypeControl />
        <NavigationControl />
        <GuardLine />
        <Polyline path={this.state.realPath} strokeWeight={2} />
        {forecast &&
          forecast.map((item, index) => (
            <Polyline
              key={item.tm}
              path={item.forecastpoints.map(i => new BMap.Point(parseFloat(i.lng), parseFloat(i.lat)))}
              strokeColor={colors[index]}
              strokeStyle="dashed"
              strokeWeight={2}
            />
          ))}
        {data.points.map(p => (
          <Dot key={p.time} data={p} />
        ))}
        <CustomOverlay position={this.state.current}>
          <img src={icon} className="typhoon-icon" />
        </CustomOverlay>
      </BDMap>
    )
  }
}
