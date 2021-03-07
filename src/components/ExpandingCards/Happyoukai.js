import React, {useEffect} from 'react'
import './styles.css'

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
})

  return (
    <div className='picture__wrapper'>
      <div className='panel__container'>
        <div className='panel happyoukai10 active'>
          <h3>Picture1</h3>
        </div>
        <div className='panel happyoukai5'>
          <h3>Picture2</h3>
        </div>
        <div className='panel happyoukai6'>
          <h3>Picture3</h3>
        </div>
        <div className='panel happyoukai7'>
          <h3>Picture4</h3>
        </div>
        <div
          className='panel happyoukai8'>
          <h3>Picture5</h3>
        </div>
      </div>
    </div>
  );
}

export default Happyoukai
