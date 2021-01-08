import React from 'react'
import './styles.css'

function Acitvity() {
        const panels = document.querySelectorAll('.panel')

        panels.forEach((panel) => {

          panel.addEventListener('click', () => {
            removeActiveClasses()
            panel.classList.add('active')
          })
        })

        function removeActiveClasses() {
          panels.forEach((panel) => {
            panel.classList.remove('active')
          })
        }
  return (
    <div className='picture__wrapper'>
      <div className='panel__container'>
        <div
          className='panel active'
          style={{ backgroundImage: `url(require("../../img/ensou-1.jpg"))` }}
        >
          <h3>Picture1</h3>
        </div>
        <div
          className='panel'
          style={{ backgroundImage: `url(require("../../img/ensou-2.jpg"))` }}
        >
          <h3>Picture2</h3>
        </div>
        <div
          className='panel'
          style={{ backgroundImage: `url(require("../../img/ensou-3.jpg"))` }}
        >
          <h3>Picture3</h3>
        </div>
        <div
          className='panel'
          style={{ backgroundImage: `url(require("../../img/ensou-4.jpg"))` }}
        >
          <h3>Picture4</h3>
        </div>
        <div
          className='panel'
          style={{ backgroundImage: `url(require("../../img/ensou-5.jpg"))` }}
        >
          <h3>Picture5</h3>
        </div>
      </div>
    </div>
  )
}

export default Acitvity
