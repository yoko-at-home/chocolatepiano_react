import React from 'react'
import LessonKids from './Kids';
import LessonAdult from './Adult';
import LessonOnline from './Online';
import HorizontalScrollButtons from '../../components/HorizpntalScrollButtons';

const Lesson = () => {
  return (
    <>
      <LessonKids />
      <HorizontalScrollButtons />

      <LessonAdult />
      <HorizontalScrollButtons />

      <LessonOnline />
      <HorizontalScrollButtons />
    </>
  );
}

export default Lesson
