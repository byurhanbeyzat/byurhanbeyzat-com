import React from 'react';

const components = require('@/assets/icons');

const icons = {};
Object.entries(components).map((file) => {
  const key = file[0];
  const value = file[1];
  return (icons[key] = value);
});

function Icon({ icon, ...props }) {
  if (icons[icon]) {
    const Comp = icons[icon];
    return <Comp {...props} />;
  }

  return <></>;
}

export default Icon;
