import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, { PureComponent, createElement } from 'react';

import Main from './containers/Main.jsx';
import Footer from './containers/Footer.jsx';
import Test_page from './containers/Test_page.jsx';
import Float from './containers/Float.jsx';

export default function Routers() {

  function getAsyncComponent(load) {
    return class AsyncComponent extends PureComponent {

      componentDidMount() {
        // 在高阶组件 DidMount 时才去执行网络加载步骤
        load().then(({default: component}) => {
          // 代码加载成功，获取到了代码导出的值，调用 setState 通知高阶组件重新渲染子组件
          this.setState({
            component,
          });
        });
      }

      render() {
        const {component} = this.state || {};
        // some fix
        // component 是 React.Component 类型，需要通过 React.createElement 生产一个组件实例
        return component ? createElement(component) : null;
      }
    };
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/footer" component={Footer}/>
        /* 使用按需加载组件 */
        <Route path='/about' component={getAsyncComponent(
          // 异步加载函数，异步地加载 About 组件
          () => import(/* webpackChunkName: 'asyncComponent-about' */'./asyncComponent/About')
        )}
        />
        <Route path='/check' component={getAsyncComponent(
          // 异步加载函数，异步地加载 Check 组件
          () => import(/* webpackChunkName: 'asyncComponent-check' */'./asyncComponent/Check')
        )}
        />
        <Route path="/test_page" component={Test_page}/>
        <Route path="/float" component={Float}/>
      </Switch>
    </Router>
  );
}
