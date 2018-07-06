//房贷计算器
import React from 'react'
import './mortgage.less'

class MortgageCal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render () {
    return (
      <div className='box'>
        <div className='head'>
          <a>商业贷款</a>
          <a>公积金贷款</a>
          <a>混合贷款</a>
        </div>
      </div>
    )
  }
}

export default MortgageCal