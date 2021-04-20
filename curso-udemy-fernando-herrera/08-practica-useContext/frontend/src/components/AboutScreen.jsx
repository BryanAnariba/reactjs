import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

export const AboutScreen = () => {
    const { user } = useContext(UserContext);
    return (
        <div>
            
            <h2>
                About Screen
            </h2>

            <p>
                <strong>Enginner: { user.name }</strong>
                <br/>
                <strong>Email: { user.emailUser }</strong>
            </p>
        </div>
    )
}
