import React from 'react'

function AcitvitySection() {
  return (
    <section className="section-activity" id="activity" >
        <div className="u-center-text">
            <h1 className="heading-secondary" style={{ fontSize: '4rem' }}>
              講師演奏活動<br/>&nbsp;</h1>
              <div className="picture__wrapper u-margin-bottom-medium">
                <div className="panel__container">
                      <div className="panel active" style={{backgroundImage:url('img/ensou-1.jpg')}}>
                        <h3>Picture1</h3>
                      </div>
                      <div className="panel" style={{backgroundImage:url('img/ensou-2.jpg')}}>
                        <h3>Picture2</h3>
                      </div>
                      <div className="panel" style={{ backgroundImage:url('img/ensou-3.jpg')}}>
                        <h3>Picture3</h3>
                      </div>
                      <div className="panel" style={{backgroundImage:url('img/ensou-4.jpg')}}>
                        <h3>Picture4</h3>
                      </div>
                    <div className="panel" style={{backgroundImage:url('img/ensou-5.jpg')}}>
                        <h3>Picture5</h3>
                    </div>
              </div>
           </div>
        </div>
      </section>
    )
}

export default AcitvitySection
