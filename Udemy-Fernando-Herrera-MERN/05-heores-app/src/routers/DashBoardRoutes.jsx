import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import { Navbar } from '../components/ui/Nabvar';
import { MarvelHeroesPage } from '../components/marvel/MarvelHeroesPage';
import { HeroesPage } from '../components/heroes/HeroesPage';
import { DcHeroesPage } from '../components/dc/DcHeroesPage';
import { SearchHeroe } from '../components/search/SearchHeroe';

// Rutas que sirven informacion una vez el usuario esta logueado
export const DashBoardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-5">
                <Switch>
                    <Route exact path="/marvel" component={ MarvelHeroesPage } />
                    <Route exact path="/dc" component={ DcHeroesPage }/>
                    <Route exact path="/search" component={ SearchHeroe }/>
                    <Route exact path="/heroe/:heroeId/" component={ HeroesPage } />
                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    )
}
