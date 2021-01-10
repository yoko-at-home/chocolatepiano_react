import React from 'react'
import './styles.css'

function Happyoukai() {
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
        <div className='panel active'
          style={{ backgroundImage: `url(require("../../img/happyoukai-10.jpg"))` }}
        >
          <h3>Picture1</h3>
        </div>
        <div className='panel'
          style={{ backgroundImage: `url(require("../../img/happyoukai-5.jpg"))` }}
        >
          <h3>Picture2</h3>
        </div>
        <div className='panel'
          style={{ backgroundImage: `url(require("../../img/happyoukai-6.jpg"))` }}
        >
          <h3>Picture3</h3>
        </div>
        <div className='panel'
          style={{ backgroundImage: `url(require("../../img/happyoukai-7.jpg"))` }}
        >
          <h3>Picture4</h3>
        </div>
        <div
          className='panel'
          style={{ backgroundImage: `url(require("../../img/happyoukai-8.jpg"))` }}
        >
          <h3>Picture5</h3>
        </div>
      </div>
    </div>
  )
}

export default Happyoukai
