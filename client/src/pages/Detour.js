import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      I'm the detour
      <Link to="/">This way</Link>
    </div>
  );
};
