import React from 'react'
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom'
import Landing from './section/Popup/Landing'
import Popup from './section/Popup/Popup'
import PopupAccess from './section/Popup/PopupAccess'


const Router = () => {
  return (
    <BrowserRouter>
    {/* <HashRouter> */}
      <Switch>
        <Route path='/'>
          <Landing/>
        </Route>
        <Route path='/popup'>
          <Popup/>
        </Route>
        <Route path='/access'>
          <PopupAccess/>
        </Route>
      </Switch>
    {/* </HashRouter> */}
    </BrowserRouter>
  )
}

export default Router;
