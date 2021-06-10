import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Carousel } from 'antd';
// import { blue } from '@ant-design/colors';
// import { CodepenOutlined } from '@ant-design/icons';
//redux
import store from './redux/store/store'
import { Provider } from 'react-redux'
// import { Pagination } from 'antd';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  {/* <div className="icons-list">
    <CodepenOutlined /> */}
  {/* <Pagination defaultCurrent={1} total={50} /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
