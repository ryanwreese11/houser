import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Dashboard from './components/Dashboard/Dashboard'
import Wizard from './components/Wizard/Wizard'
import WizardStep2 from './components/Wizard/WizardStep2'
import WizardStepThree from './components/Wizard/WizardStepThree'

export default (
  <Switch>
    <Route path='/' exact component={Dashboard}/>
    <Route path='/wizard' component={Wizard}/>
    <Route path='/wizard2' component={WizardStep2}/>
    <Route path='/wizard3' component={WizardStepThree}/>

  </Switch>

)