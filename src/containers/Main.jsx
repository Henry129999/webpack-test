import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LocaleProvider, Button, Select, Modal } from 'antd';
import moment from 'moment';
import zhCN from 'antd/es/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import styles from './Main.css';
import { nameHHHH } from '../help/common';
import Body from "./Body";
import ImgLazyLoad from './ImgLazyLoad';

import MainSub from './MainSub';

const { Option } = Select;

const textArr = [
  // '其实没什么技术含量，只想记在博客里，方便自己找到代码',
  // '其实没什么技术含量，只想记在博客里，方便自己找到代码',
  // '其实没什么技术含量，只想记在博客里，方便自己找到代码',
  // '其实没什么技术含量，只想记在博客里，方便自己找到代码',
];

moment.locale('zh-cn');

class Main extends Component {
  static propTypes = {
    history: PropTypes.shape({}),
  };

  static defaultProps = {
    history: {}
  };

  state = {
    visible: false,
    count: 1,
  };

  componentDidMount = () => {
    this.handlePopPromiseError();
    window.onerror = (msg, url, lineNum, colNum, err) => {
      console.log(`错误发生的异常信息（字符串）:${msg}`);
      console.log(`错误发生的脚本URL（字符串）:${url}`);
      console.log(`错误发生的行号（数字）:${lineNum}`);
      console.log(`错误发生的列号（数字）:${colNum}`);
      console.log(`错误发生的Error对象（错误对象）:${err}`);
      return true;
    };
    window.addEventListener('unhandledrejection', (e) => {
      console.log('unhandledrejection', e.reason);
      console.log('promise error', e.promise);
      return true;
    }, true);
    window.addEventListener('error', (errorEvent) => { // 捕获静态资源error
      console.log('error', errorEvent);
      console.log('error', errorEvent.message);
    }, true);
  };

  handlePopPromiseError = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('这儿有一个错误');
      }, 1000);
    });
  };

  handleLinkTo = (url) => {
    const { history } = this.props;
    history.push(url);
  };

  handleModalVisible = () => {
    this.setState(pre => ({
      visible: !pre.visible
    }));


  };

  handlePlus = () => {
    this.setState((pre) => (
      {
        count: pre.count + 1,
      }
    ));
    throw '222';
  };

  handleAsyncComponent = (url) => {
    const { history } = this.props;
    history.push(url);
  };

  render() {
    console.log('state', this.state);
    const { visible, count } = this.state;

    console.log('visible', visible);

    console.log('process.env.NODE_ENV', process.env.NODE_ENV);
    if(process.env.NODE_ENV === 'production') console.log('true');

    return (
      <LocaleProvider locale={zhCN}>
        <div className={styles.content}>
          <div className={styles.test}>
            <div className={styles.test_left}>动画</div>
            <div className={styles.test_right}>hkausdhfuh</div>
          </div>
          <h1>
            1111222444555
            {textArr.map((res, index) =>
              <p key={index}>{res}</p>
            )}
          </h1>
          <Button type="primary" onClick={() => this.handleLinkTo('./footer')}>点击加一</Button>
          <em>em 斜体</em>
          <i>i标签</i>
          <Select
            style={{ width: '120px', marginLeft: '8px' }}
            placeholder="请输入..."
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom1</Option>
          </Select>
          <div><Link to="/footer">About</Link></div>
          <Button onClick={this.handleModalVisible}>打开弹窗</Button>
          <Button onClick={() => this.handleLinkTo('./test_page')}>进入test页面</Button>
          <div>count = { count }</div>
          <Button onClick={this.handlePlus}>PLUS</Button>
          <Modal
            title="弹窗"
            onCancel={this.handleModalVisible}
            visible={visible}
            footer={[
              <Button key="cancel" onClick={this.handleModalVisible}>取消q1</Button>,
              <Button key="certain" onClick={this.handleModalVisible}>确定</Button>
            ]}
          >
            <p>这是一个弹窗</p>
          </Modal>
          <img src='../../images/tags.png' alt="" />
          {nameHHHH.map((item, index) => <p key={index}>{item}</p>)}
          <MainSub />

          <Body />

          <Button onClick={() => this.handleAsyncComponent('./about')}>异步加载组件About</Button>
          <Button onClick={() => this.handleAsyncComponent('./check')}>异步加载组件Check</Button>

          <ImgLazyLoad />

          <div style={{ height: '50px', verticalAlign: 'middle' }}>
            <p style={{ lineHeight: '50px', verticalAlign: 'middle' }}>行高</p>
          </div>
        </div>
      </LocaleProvider>
    );
  }
}
export default Main;
