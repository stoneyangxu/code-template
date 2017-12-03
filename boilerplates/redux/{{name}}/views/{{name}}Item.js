import React from 'react';
import { connect } from 'react-redux';

const {{name_camel}}Item = ({ text, completed, onRemove }) => (
  <li className="list-group-item">
    <input type="checkbox" checked={completed ? 'checked' : ''} />
    <span>{text}</span>
    <button onClick={onRemove}>x</button>
  </li>
)

export default {{name_camel}}Item
