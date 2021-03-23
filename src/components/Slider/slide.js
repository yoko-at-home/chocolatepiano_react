import React from 'react';

export const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
  };
  return <div className='slide' style={styles} />;
};

export const LeftArrow = (props) => {
  return (
    <div className='left-arrow arrow' onClick={props.PrevSlide}>
      <i className='fas fa-angle-left fa-2x' aria-hidden='true' />
    </div>
  );
};

export const RightArrow = (props) => {
  return (
    <div className='right-arrow arrow' onClick={props.NextSlide}>
      <i className='fas fa-angle-right fa-2x' aria-hidden='true' />
    </div>
  );
};
