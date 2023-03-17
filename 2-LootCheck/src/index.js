import ReactDOM from "react-dom/client";
// import { render } from 'react-dom';

import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import rootReducer from "./reducers";
import { Provider } from "react-redux";

import App from "./components/App";
import './index.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

// render(<App />, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
