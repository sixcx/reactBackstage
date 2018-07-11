//房贷计算器
import React from 'react'
import { Input, Select, Radio, Button } from 'antd'
import './mortgage.less'

class MortgageCal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      years: [1,2,3,4,5,6,7,8,9,10,15,20,25,30],
      num: 120,
      val: 1,
      per: 5.750,
      cent: 5.750,
      gjj: 3.50,
      type: 1,
      dkType: 1,
      rial: [
        {key: '最新基准利率', value: 7},
        {key: '最新基准利率', value: 8},
        {key: '最新基准利率', value: 8.5},
        {key: '最新基准利率', value: 9},
        {key: '最新基准利率', value: 10},
        {key: '最新基准利率', value: 11},
        {key: '最新基准利率', value: 12},
        {key: '最新基准利率', value: 13}
      ]
    }
  }

  handleSelectChange (value) {
    value = 12 * value;
    this.setState({num: value})
  }

  onRadioChange (e) {
    this.setState({val: e.target.value})
    if (e.target.value == 1) {
      this.setState({cent: 5.750, gjj: 3.50})
    } else if (e.target.value == 2) {
      this.setState({cent: 6.325, gjj: 3.85})
    }
  }

  onTypeChange (e) {
    this.setState({type: e.target.value})
  }

  handleRialChange (value) {
    let per = this.state.cent * value/10;
    this.setState({per: per.toFixed(3)})
  }

  handleClick () {

  }

  handleChangeType (value) {
    this.setState({dkType: value})
  }

  render () {
    return (
      <div className='box'>
        <div className='head'>
          <a style={{color: this.state.dkType == 1 ? 'red' : ''}} onClick={this.handleChangeType.bind(this, 1)}>商业贷款</a>
          <a style={{color: this.state.dkType == 2 ? 'red' : ''}} onClick={this.handleChangeType.bind(this, 2)}>公积金贷款</a>
          <a style={{color: this.state.dkType == 3 ? 'red' : ''}} onClick={this.handleChangeType.bind(this, 3)}>混合贷款</a>
        </div>
        <div className='main'>
          {
            this.state.dkType == 1 ?
            <div className='item'>
              <div className='name'>
                <span>商业贷款：</span>
              </div>
              <div className='input'>
                <Input addonBefore="¥" addonAfter="万元"/>
              </div>
            </div> :
            this.state.dkType == 2 ?
            <div className='item'>
              <div className='name'>
                <span>公积金贷款：</span>
              </div>
              <div className='input'>
                <Input addonBefore="¥" addonAfter="万元"/>
              </div>
            </div> :
            <div>
              <div className='item'>
                <div className='name'>
                  <span>商业贷款：</span>
                </div>
                <div className='input'>
                  <Input addonBefore="¥" addonAfter="万元"/>
                </div>
              </div>
              <div className='item'>
                <div className='name'>
                  <span>公积金贷款：</span>
                </div>
                <div className='input'>
                  <Input addonBefore="¥" addonAfter="万元"/>
                </div>
              </div>
            </div>
          }
          <div className='item'>
            <div className='name'>
              <span>贷款期限：</span>
            </div>
            <div className='input' style={{textAlign: 'left'}}>
              <Select defaultValue={10} onChange={this.handleSelectChange.bind(this)}>
                {
                  this.state.years.map((item, i) => {
                    return (
                      <Select.Option value={item} key={i}>
                        {item}
                      </Select.Option>
                    )
                  })
                }
              </Select> 年
              <span style={{marginLeft: '30px'}}>{this.state.num}期</span>
            </div>
          </div>
          <div className='item'>
            <div className='name'>
              <span>购房性质：</span>
            </div>
            <div className='input' style={{textAlign: 'left'}}>
              <Radio.Group onChange={this.onRadioChange.bind(this)} value={this.state.val}>
                <Radio value={1}>一套</Radio>
                <Radio value={2}>二套</Radio>
              </Radio.Group>
            </div>
          </div>
          {
            this.state.dkType == 1 ?
              <div className='item'>
                <div className='name'>
                  <span>商业贷款年利率：</span>
                </div>
                <div className='input' style={{textAlign: 'left'}}>
                  <Select defaultValue='最新基准利率' onChange={this.handleRialChange.bind(this)}>
                    {
                      this.state.rial.map((item, i) => {
                        return (
                          <Select.Option value={item.value} key={i}>
                            {
                              item.value == 10 ?
                              item.key :
                              item.value < 10 ? item.key + item.value+'折': item.key + item.value/10+'倍'
                            }
                          </Select.Option>
                        )
                      })
                    }
                  </Select>
                  <span style={{marginLeft: '30px'}}>{this.state.per}%</span>
                </div>
              </div> : this.state.dkType == 2 ?
            <div className='item'>
              <div className='name'>
                <span>公积金贷款年利率：</span>
              </div>
              <div className='input' style={{textAlign: 'left'}}>
                {this.state.gjj}%
              </div>
            </div> :
            <div>
              <div className='item'>
                <div className='name'>
                  <span>商业贷款年利率：</span>
                </div>
                <div className='input' style={{textAlign: 'left'}}>
                  <Select defaultValue='最新基准利率' onChange={this.handleRialChange.bind(this)}>
                    {
                      this.state.rial.map((item, i) => {
                        return (
                          <Select.Option value={item.value} key={i}>
                            {
                              item.value == 10 ?
                              item.key :
                              item.value < 10 ? item.key + item.value+'折': item.key + item.value/10+'倍'
                            }
                          </Select.Option>
                        )
                      })
                    }
                  </Select>
                  <span style={{marginLeft: '30px'}}>{this.state.per}%</span>
                </div>
              </div>
              <div className='item'>
                <div className='name'>
                  <span>公积金贷款年利率：</span>
                </div>
                <div className='input' style={{textAlign: 'left'}}>
                  {this.state.gjj}%
                </div>
              </div>
            </div>
          }
          
          
          <div className='item'>
            <div className='name'>
              <span>还款方式：</span>
            </div>
            <div className='input' style={{textAlign: 'left'}}>
              <Radio.Group onChange={this.onTypeChange.bind(this)} value={this.state.type}>
                <Radio value={1}>等额本息</Radio>
                <Radio value={2}>等额本金</Radio>
              </Radio.Group>
            </div>
          </div>
          <div className='item'>
            <Button type="primary" onClick={this.handleClick.bind(this)}>计算</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default MortgageCal