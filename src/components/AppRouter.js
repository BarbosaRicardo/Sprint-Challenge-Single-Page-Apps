import React from 'react'
import { Switch, Route } from 'react-router-dom'

import CharacterList from './CharacterList'
// import WelcomePage from './WelcomePage'
// import LocationList from './LocationsList'
import EpisodesList from './EpisodesList'

export default function AppRouter() {
    return <div >
        <Switch>
            <Route path = "/characters" component = {CharacterList} />
            <Route path ="/episodes" component = {EpisodesList} />
            <Route component = {CharacterList} />
            <Route component = {EpisodesList} />
        </Switch>
    </div>
}