import React from 'react'
import { Switch, Route } from 'react-router-dom'

import CharacterList from './CharacterList'
import WelcomePage from './WelcomePage'
import LocationsList from './LocationsList'
import EpisodesList from './EpisodesList'

export default function AppRouter() {
    return <div >
        <Switch>
            <Route exact path='/' component ={WelcomePage} />
            <Route path = "/characters" component = {CharacterList} />
            <Route path ="/episodes" component = {EpisodesList} />
            <Route path ="/locations" component ={LocationsList}/>
            
            <Route component={LocationsList}/>
            <Route component = {WelcomePage} />
            <Route component = {CharacterList} />
            <Route component = {EpisodesList} />
        </Switch>
    </div>
}