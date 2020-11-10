import React, { useContext } from 'react';
import { UserContext } from './UserContext';
export const AboutPage = () => {
    const { user } = useContext(UserContext);
    
    return (
        <div>
            About Page 
            <p className="container">
                {
                    JSON.stringify(user, null, 123)
                }
            </p>
            <hr/>
        </div>
    )
}
