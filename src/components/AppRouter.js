import React from 'react'
import { Switch, Route } from 'react-router-dom'

import CharacterList from './CharacterList'
// import WelcomePage from './WelcomePage'
// import LocationList from './LocationsList'
// import EpisodeList from './EpisodeList'

export default function AppRouter() {
    return <div >
        <Switch>
            <Route path = "/characters" component = {CharacterList} />
            <Route component = {CharacterList} />
        </Switch>
    </div>
}