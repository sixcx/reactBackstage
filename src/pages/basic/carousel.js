//走马灯组件

import React from 'react'
import { Row, Col} from 'antd';
import BannerAnim from 'rc-banner-anim';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import './carousel.less'
import './slider.less'

const { Element } = BannerAnim;
const BgElement = Element.BgElement;

class Carousels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <div>
        <Row>
          <div style={{marginBottom: 10}}>基本轮播图</div>
          <Col span={24}>
            <BannerAnim prefixCls="banner-user">
              <Element key="aaa"
                prefixCls="banner-user-elem"
              >
                <BgElement
                  key="bg"
                  className="bg"
                  style={{
                    backgroundImage: 'url(https://os.alipayobjects.com/rmsportal/IhCNTqPpLeTNnwr.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <QueueAnim name="QueueAnim">
                  <h1 key="h1">Ant Motion Demo</h1>
                  <p key="p">Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo</p>
                </QueueAnim>
                <TweenOne animation={{ y: 50, opacity: 0, type: 'from', delay: 200 }} name="TweenOne1">
                  Ant Motion Demo.Ant Motion Demo
                </TweenOne>
              </Element>
              <Element key="bbb"
                prefixCls="banner-user-elem"
              >
                <BgElement
                  key="bg"
                  className="bg"
                  style={{
                    backgroundImage: 'url(https://os.alipayobjects.com/rmsportal/uaQVvDrCwryVlbb.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <QueueAnim name="QueueAnim">
                  <h1 key="h1">Ant Motion Demo</h1>
                  <p key="p">Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo</p>
                </QueueAnim>
                <TweenOne animation={{ y: 50, opacity: 0, type: 'from', delay: 200 }} name="TweenOne2">
                  Ant Motion Demo.Ant Motion Demo
                </TweenOne>
              </Element>
            </BannerAnim>
          </Col>
        </Row>
        {/* 自动播放 */}
        <Row style={{marginTop: 20}}>
          <div style={{marginBottom: 10}}>自动轮播图</div>
          <Col span={24}>
            <BannerAnim autoPlay>
              <Element key="aaa"
                prefixCls="banner-user-elem"
              >
                <BgElement
                  key="bg"
                  className="bg"
                  style={{
                    backgroundImage: 'url(https://os.alipayobjects.com/rmsportal/IhCNTqPpLeTNnwr.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <QueueAnim name="QueueAnim">
                  <h1 key="h1">Ant Motion Demo</h1>
                  <p key="p">Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo</p>
                </QueueAnim>
                <TweenOne animation={{ y: 50, opacity: 0, type: 'from', delay: 200 }} name="TweenOne">
                  Ant Motion Demo.Ant Motion Demo
                </TweenOne>
              </Element>
              <Element key="bbb"
                prefixCls="banner-user-elem"
              >
                <BgElement
                  key="bg"
                  className="bg"
                  style={{
                    backgroundImage: 'url(https://os.alipayobjects.com/rmsportal/uaQVvDrCwryVlbb.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <QueueAnim name="QueueAnim">
                  <h1 key="h1">Ant Motion Demo</h1>
                  <p key="p">Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo</p>
                </QueueAnim>
                <TweenOne animation={{ y: 50, opacity: 0, type: 'from', delay: 200 }} name="TweenOne">
                  Ant Motion Demo.Ant Motion Demo
                </TweenOne>
              </Element>
            </BannerAnim>    
          </Col>
        </Row>
      </div>
    )
  }
}

export default Carousels