import React, {Component} from 'react';
import { Button } from 'antd';
import PropTypes from "prop-types";

export default class Footer extends Component{
  static propTypes = {
    history: PropTypes.shape({}),
  };

  static defaultProps = {
    history: {}
  };

  handleLinkToHome = () => {
    const { history } = this.props;
    history.push('./');
  };

  render() {
    return (
      <div>
        <p style={{ marginBottom: '12px' }}>332223434222</p>
        <Button type={"primary"} onClick={this.handleLinkToHome}>返回首页</Button>
      </div>
    );
  }
}