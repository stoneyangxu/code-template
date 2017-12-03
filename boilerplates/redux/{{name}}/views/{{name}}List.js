import React from 'react';
import { connect } from 'react-redux';
import {{name_camel}}Item from './{{name}}Item';
import { remove{{name_camel}} } from '../actions';
import { bindActionCreators } from 'redux';

const {{name_camel}}List = ({ {{name}}s, onRemove }) => {
  return (
    <ul>
      {
        {{name}}s.map({{name}} => (
          <{{name_camel}}Item
            key={ {{name}}.id }
            text={ {{name}}.text }
            onRemove={() => onRemove({{name}}.id)}
          />
        ))
      }
    </ul>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    {{name}}s: state.{{name}}s
  };
}

const mapDispatchToProps = {
  onRemove: remove{{name_camel}}
};

export default connect(mapStateToProps, mapDispatchToProps)({{name_camel}}List);
