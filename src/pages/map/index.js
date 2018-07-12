//地图
import React from 'react'

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount () {
    let map = new window.AMap.Map('container', {
      resizeEnable: true,
      zoom:11,
      center: [104.07, 30.67] //成都
    });
  }

  render () {
    let width = document.body.clientWidth;
    return (
      <div>
        <div id='container' style={{width: width, height: '400px'}}>

        </div>
      </div>
    )
  }
}

export default Map