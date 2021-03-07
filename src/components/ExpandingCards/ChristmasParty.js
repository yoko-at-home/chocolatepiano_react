import React, { useEffect } from 'react';
import './styles.css';

function Happyoukai() {
  useEffect(() => {
    const panels = document.querySelectorAll('.panel');

    panels.forEach((panel) => {
      panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
      });
    });

    function removeActiveClasses() {
      panels.forEach((panel) => {
        panel.classList.remove('active');
      });
    }
  });

  return (
    <div className='picture__wrapper'>
      <div className='panel__container'>
        <div className='panel christmas1 active'>
          <h3>Picture1</h3>
        </div>
        <div className='panel christmas2'>
          <h3>Picture2</h3>
        </div>
        <div className='panel christmas3'>
          <h3>Picture3</h3>
        </div>
      </div>
    </div>
  );
}

export default Happyoukai;
