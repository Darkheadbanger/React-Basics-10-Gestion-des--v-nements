import React from 'react';

// 1. add onClick to delete button, it needs to execute onPressDelete function

const onPressDelete = () => {
  // 2. define an alert() here with a random text
};

const Contact = (props) => {
  return (
    <div>
      <div>
        <h3>{props.name}</h3>
        <h4>{props.email}</h4>
        <h4>{props.phone}</h4>
      </div>
      {props.isDeletable ? <button>Delete</button> : null}
    </div>
  );
};

export default Contact;
