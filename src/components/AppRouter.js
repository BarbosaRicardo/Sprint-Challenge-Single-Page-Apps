import React from 'react'
import { Switch, Route } from 'react-router-dom'

import CharacterList from './CharacterList'
import WelcomePage from './WelcomePage'
import LocationsList from './LocationsList'
import EpisodesList from './EpisodesList'
import SearchForm from './SearchForm'

export default function AppRouter() {
    return <div >
        <Switch>
            <Route exact path='/' component ={WelcomePage} />
            <Route path = "/characters" component = {CharacterList} />
            <Route path ="/episodes" component = {EpisodesList} />
            <Route path ="/locations" component ={LocationsList}/>
            <Route path="search" component={SearchForm} />
            
            <Route component={SearchForm}/>
            <Route component={LocationsList}/>
            <Route component = {WelcomePage} />
            <Route component = {CharacterList} />
            <Route component = {EpisodesList} />
        </Switch>
    </div>
}