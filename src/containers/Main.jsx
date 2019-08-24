import * as React from 'react';
import PropTypes from 'prop-types';
import { LocaleProvider, Button, Select, Modal } from 'antd';
import { Component } from 'react';
import moment from 'moment';
import zhCN from 'antd/es/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import styles from './Main.css';
import { nameHHHH } from '../help/common';

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
  };

  handleLinkTo = (url) => {
    const { history } = this.props;
    history.push(url);
  };

  handleModalVisible = () => {
    this.setState(pre => ({
      visible: !pre.visible
    }))
  };

  render() {
    console.log('state', this.state);
    const { visible } = this.state;

    console.log('process.env.NODE_ENV', process.env.NODE_ENV);
    if(process.env.NODE_ENV === 'production') console.log('true');

    return (
      <LocaleProvider locale={zhCN}>
        <div className={styles.content}>
          <h1>
            1111222444555
            {textArr.map((res, index) =>
              <p key={index}>{res}</p>
            )}
          </h1>
          <Button type="primary" onClick={() => this.handleLinkTo('./footer')}>点击加一</Button>
          <Select
            style={{ width: '120px', marginLeft: '8px' }}
            placeholder="请输入..."
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom1</Option>
          </Select>
          <div><Link to="/footer">About</Link></div>
          <Button onClick={this.handleModalVisible}>打开弹窗33111</Button>
          <Button onClick={() => this.handleLinkTo('./test_page')}>进入test页面</Button>
          <Modal
            title="弹窗"
            onCancel={this.handleModalVisible}
            visible={visible}
            footer={[
              <Button onClick={this.handleModalVisible}>取消</Button>,
              <Button onClick={this.handleModalVisible}>确定</Button>
            ]}
          >
            <p>这是一个弹窗</p>
          </Modal>
          <img src='../../images/tags.png' alt="" />
          {nameHHHH.map((item, index) => <p key={index}>{item}</p>)}
        </div>
      </LocaleProvider>
    );
  }
}
export default Main;