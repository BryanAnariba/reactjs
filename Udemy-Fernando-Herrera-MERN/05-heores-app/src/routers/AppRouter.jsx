import React, { useContext } from 'react'
import { 
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';

// Components
import { LoginPage } from '../components/login/LoginPage';
import { DashBoardRoutes } from './DashBoardRoutes';
import { AuthContext } from '../auth/AuthContext';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

//  ESTE ES EL ROUTER PRINCIPAL
export const AppRouter = () => {
    const { user } = useContext(AuthContext);
    console.log(user);

    return (
        <>
            <Router>
                <div>
                    <Switch>
                        <PublicRoutes 
                            exact 
                            path="/login" 
                            isAuthenticated={ user.logged }
                            component={ LoginPage }/>
                        
                        
            
                        <PrivateRoutes 
                            path="/" 
                            isAuthenticated={ user.logged }
                            component={ DashBoardRoutes }
                        />
                    </Switch>
                </div>
            </Router>
        </>
    )
}
