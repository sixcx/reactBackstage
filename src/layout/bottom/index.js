//底部显示
import React from 'react'
import { Layout } from 'antd'
import './index.less'

const { Footer } = Layout

class Bottom extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<Footer className="bottom animated bounceInLeft">
				<div className="text">
					<div>
						<span>©2018 pbh</span>
					</div>
				</div>
			</Footer>
		)
	}
}

export default Bottom