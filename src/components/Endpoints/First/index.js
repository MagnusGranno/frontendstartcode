import React from 'react';

// Styles
import { MyBody } from './First.styles';

function First({ title }) {
  return (
    <MyBody>
      <div>This is the {title} endpoint 😻 </div>
    </MyBody>
  );
}

export default First;
