import ReactDOM from "react-dom";
import * as React from "react";
import Routers from './routers.jsx';

const fundebug = require("fundebug-javascript");
fundebug.apikey = "0936472792ef6e2abb0a027f54d5d6b2ef82495797a39b161670404bfbfbf80d";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    // 将component中的报错发送到Fundebug &&
    fundebug.notifyError(error, {
      metaData: {
        info: info
      }
    });
  }
  render() {
    if (this.state.hasError) {
      return null;
      // Note: 也可以在出错的component处展示出错信息，返回自定义的结果。
    }
    return this.props.children;
  }
}

const App = () => (
  <div>
    <Routers />
  </div>
);


ReactDOM.render(<ErrorBoundary><App /></ErrorBoundary>, document.getElementById('app'));

if (module.hot) {
  console.log('module.hot', module.hot);
  module.hot.accept();
}

// if (module.hot) { module.hot.accept('./routers', () => {
//   Routers = require('./routers'); // do it by yourself.
//   render(Routers);
// }); }