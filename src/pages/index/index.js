//首页
import React from 'react'
import { Row, Col, Card } from 'antd'
import './index.less'
import Circle from './circle'
import Line from './line'
import Bar from './bar'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: ['得分','篮板','助攻','抢断'],
      years: ['2013', '2014', '2015', '2016', '2017', '2018'],
      score: ['2036', '2089', '1743', '1920', '1954', '2251'],
      offs: ['596', '548', '601', '552', '591', '600'],
      reb: ['610', '533', '416', '565', '639', '709'],
      assit: ['551', '488', '511', '514', '646', '747'],
      steal: ['129', '121', '109', '104', '92', '116']
    }
  }

  componentDidMount () {
    
  }

  render () {
    return (
      <div className="gutter-example button-demo">
        {/* 数据能力 */}
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
        {/* 数据统计 */}
        <Row gutter={24} className="static">
          <Col span={6} className="gutter-row">
            <div className='col-box'>
              <div>得分数</div>
              <div className='number'>30,000</div>
            </div>
          </Col>
          <Col span={6} className="gutter-row">
            <div className='col-box'>
              <div>篮板数</div>
              <div className='number'>8,000</div>
            </div>
          </Col>
          <Col span={6} className="gutter-row">
            <div className='col-box'>
              <div>助攻数</div>
              <div className='number'>8,000</div>
            </div>
          </Col>
          <Col span={6} className="gutter-row">
            <div className='col-box'>
              <div>抢断数</div>
              <div className='number'>2,000</div>
            </div>
          </Col>
        </Row>
        {/* 折线图 */}
        <Row gutter={24} className="static">
          <Col span={12} className="gutter-line">
            <div className='col-box'>
              <Card title="数据走势图" bordered={false}>
                <Line 
                  option={{
                    type: this.state.type,
                    years: this.state.years, 
                    score: this.state.score, 
                    reb: this.state.reb, 
                    assit: this.state.assit, 
                    steal: this.state.steal
                  }} 
                />
              </Card>
            </div>
          </Col>
          <Col span={12} className="gutter-line">
            <div className='col-box'>
              <Card title="得分对比图" bordered={false}>
                <Bar
                  option={{
                    years: this.state.years, 
                    scoreCommon: this.state.score,
                    offs: this.state.offs
                  }} 
                />
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Index