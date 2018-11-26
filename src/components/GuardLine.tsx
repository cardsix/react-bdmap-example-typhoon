import React from 'react'
import Polyline from 'react-bdmap/overlays/Polyline'
import Label from 'react-bdmap/overlays/Label'

const POINTS_24 = [[127, 34], [127, 22], [110, 15]]
const POINTS_48 = [[132, 34], [132, 22], [125, 15], [110, 15]]
const fontStyle: React.CSSProperties = {
  border: 'none',
  backgroundColor: 'transparent',
  width: '1em',
  whiteSpace: 'pre-line',
}

const fontStyle24 = { ...fontStyle, color: 'yellow' }
const fontStyle48 = { ...fontStyle, color: 'blue' }

export default class GuardLine extends React.Component {
  public state = {
    guardLine24: POINTS_24.map(p => new BMap.Point(p[0], p[1])),
    guardLine48: POINTS_48.map(p => new BMap.Point(p[0], p[1])),
  }
  public render() {
    return (
      <>
        <Polyline path={this.state.guardLine24} strokeColor="yellow" strokeWeight={2} />
        <Label position={this.state.guardLine24[0]} content="24小时警戒线" style={fontStyle24} />
        <Polyline path={this.state.guardLine48} strokeColor="blue" strokeWeight={2} />
        <Label position={this.state.guardLine48[0]} content="48小时警戒线" style={fontStyle48} />
      </>
    )
  }
}
