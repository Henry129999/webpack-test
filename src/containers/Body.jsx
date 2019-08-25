import * as React from 'react';
import { Component } from 'react';
import { Modal, Button } from 'antd';

export default class Body extends Component {
  state = {
    visible: true,
  }

  handleModalVisible = () => {
    this.setState(pre => ({
      visible: !pre.visible,
    }))
  }

  render() {
    const { visible } = this.state;
    return (
      <div>
        <Modal
          visible={visible}
          footer={[
            <Button key="cancel" onClick={this.handleModalVisible}>取消</Button>,
            <Button key="ok" onClick={this.handleModalVisible}>确定</Button>
          ]}
        >
          这是一个弹窗111133222
        </Modal>
      </div>
    )
  }
}