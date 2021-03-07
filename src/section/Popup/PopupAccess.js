import React from 'react'
import {Link} from 'react-router-dom'
import './Popup.styles.css';

function PopupAccess() {
  return (
    <div className="popup" id="popup-access">
      <div className="popup__content">
            <div className="popup__center" style={{display:'flex', justifyContent: 'center', flexDirection: 'column'}}>
            <Link to="/#contact" className="popup__close">×</Link>
                <table>
                  <tbody>
                    <tr>
                        <td></td>
                        <td style='width:320px'>
                          <div className="mapouter"><div className="gmap_canvas"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.098798798265!2d139.41397137988488!3d35.55126208032163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018fc2587e32961%3A0xb3fb60b631b553c3!2z44CSMjUyLTAzMzEg56We5aWI5bed55yM55u45qih5Y6f5biC5Y2X5Yy65aSn6YeO5Y-w77yW5LiB55uu77yR77yX4oiS77yR77yU!5e0!3m2!1sja!2sjp!4v1609624585648!5m2!1sja!2sjp" ></iframe><a href="https://www.embedgooglemap.net">embed google map</a></div></div>
                      </td>
                      <td></td>
                   </tr>
                    <tr>
                     <td></td>
                      <td style="text-align: center;">
                          <ul style="list-style: none;">
                              <li>JR横浜線 古淵駅より徒歩10分</li>
                              <li>トーヨーカドー・AEONのすぐ近く</li>
                              <li>相模原市南区大野台6丁目</li>
                              <li><b>駐車場ございます</b></li>
                          </ul>
                      </td>
                     <td></td>
                  </tr>
                  </tbody>
              </table>
               <div className="popup__navigation">
                        <ul className="popup__list">
                            <li className="popup__item"><a href="https://www.facebook.com/chocolatpianoa" className="popup__link" target="_blank" rel="noopener" ><img src='img/facebook-circled.png'style="width: 35px;"/></a></li>
                            <li className="popup__item" style='font-size: large;'><a href="https://profile.ameba.jp/ameba/chocolatpianoa/" className="popup__link" target="_blank" rel="noopener" ><sup>B l o g</sup></a></li>
                            <li className="popup__item"><a href="https://www.instagram.com/chocolatpianoa2019/" className="popup__link" target="_blank" rel="noopener"><img src='img/instagram-new.png' style="width: 35px;"/></a></li>
                        </ul>
                    </div>
              </div>
            </div>
        </div>
  )
}

export default PopupAccess
