import React from 'react';

export const withRelativeParent = (style) => storyFn => (context) => {
  return (
    <div
      className={'with-relative-parent'}
      style={{
        position: 'relative',
        ...style
      }}
    >
      {storyFn(context)}
    </div>
  );
};
