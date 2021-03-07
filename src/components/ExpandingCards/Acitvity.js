import React, {useEffect} from 'react'
import './styles.css'

function Acitvity() {
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
        <div
          className='panel active ensou1'
        >
          <h3>Picture1</h3>
        </div>
        <div
          className='panel ensou2'
        >
          <h3>Picture2</h3>
        </div>
        <div
          className='panel ensou3'
        >
          <h3>Picture3</h3>
        </div>
        <div
          className='panel ensou4'
        >
          <h3>Picture4</h3>
        </div>
        <div
          className='panel ensou5'
        >
          <h3>Picture5</h3>
        </div>
      </div>
    </div>
  )
}

export default Acitvity
