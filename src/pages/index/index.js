//首页
import React from 'react'
import { Row, Col } from 'antd'
import './index.less'
import Circle from './circle'

class Index extends React.Component {

  componentDidMount () {
    
  }

  render () {
    return (
      <div className="gutter-example button-demo">
        <Row gutter={24}>
          <Col span={6} className="gutter-row">
            <div className='col-box'>
              <div>得分</div>
              <Circle option={{color: '#108ee9', rate: 98, name: '得分'}} />
            </div>
          </Col>
          <Col span={6} className="gutter-row">
            <div className='col-box'>
              <div>篮板</div>
              <Circle option={{color: '#F09B22', rate: 95, name: '篮板'}} />
            </div>
          </Col>
          <Col span={6} className="gutter-row">
            <div className='col-box'>
              <div>助攻</div>
              <Circle option={{color: '#690', rate: 96, name: '助攻'}} />
            </div>
          </Col>
          <Col span={6} className="gutter-row">
            <div className='col-box'>
              <div>抢断</div>
              <Circle option={{color: '#f5222d', rate: 90, name: '抢断'}} />
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Index