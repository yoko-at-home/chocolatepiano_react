import React from 'react'
import './styles.css'

function ChristmasParty() {
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
          style={{ backgoundImage: `url(require("../img/christmas-3"))` }}
        >
          <h3>クリスマス会1</h3>
        </div>
        <div
          className='panel'
          style={{ backgoundImage: `url(require("../img/christmas-2"))` }}
        >
          <h3>クリスマス会2</h3>
        </div>
        <div
          className='panel'
          style={{ backgoundImage: `url(require("../img/christmas-1"))` }}
        >
          <h3>クリスマス会3</h3>
        </div>
      </div>
    </div>
  )
}

export default ChristmasParty
