import React from 'react';
import {Route} from 'react-router-dom'

import Game from './Game';
import GameNew from './GameNew';
import GameHome from './GameHome';
import {Switch} from 'react-router-dom'

export default function GameRouter({match}) {
    return (
        <>
            <Switch>
                <Route exact path={`${match.url}`} component={GameHome}/>
                <Route exact path={`${match.url}/new`} component={GameNew}/>
                <Route path={`${match.path}/:id`} component={Game}/>
            </Switch>
        </>
    );
}
