import React from 'react'
import CustomOverlay from 'react-bdmap/overlays/CustomOverlay'

export default class Dot extends React.PureComponent<{
  data: {
    lat: string
    lng: string
    power: string
  }
}> {
  public render() {
    const { lng, lat, power } = this.props.data
    const point = new BMap.Point(parseFloat(lng), parseFloat(lat))
    return (
      <CustomOverlay position={point}>
        <div
          style={{
            width: `${power}px`,
            height: `${power}px`,
            backgroundColor: 'yellow',
            borderRadius: `${power}px`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      </CustomOverlay>
    )
  }
}
