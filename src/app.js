// src/app.js
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { Provider, connect } from 'react-redux';
// purecssをstylesオブジェクトにアサイン（現在は特に必要ない感じ）
import { buttons, grids } from 'pure-css'
// let styles = {}
// Object.assign(styles, grids, buttons)

// Reducer has the interface `(state, action) => state`
const text = (state = { text: "" }, action) => {
  switch (action.type) {
    case 'UPDATE_TEXT':
      return { text: action.text };
    default:
      return state;
  }
};

const mapStateToProps = (state) => {
  return {
    text: state.text
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (e) => dispatch({
      type: 'UPDATE_TEXT',
      text: e.target.value
    })
  };
};

let WordCountBox = ({ text, onChange }) => {
  return (
    <div className="wordCountBox pure-g">
      <div className="pure-u-1">
        <h1>Hello, Redux!</h1>
        <textarea rows="8" cols="80" placeholder="Type something..." autoFocus="true" onChange={onChange}>
          {text}
        </textarea>
        <p>Count: {text.length}</p>
        <button className="pure-button">Sample Button</button>
      </div>
    </div>
  )
};
WordCountBox = connect(mapStateToProps, mapDispatchToProps)(WordCountBox);

ReactDOM.render(
  <Provider store={createStore(text)}>
    <WordCountBox />
  </Provider>,
  document.getElementById("content")
);