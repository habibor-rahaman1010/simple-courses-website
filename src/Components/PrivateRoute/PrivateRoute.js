import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import UseAuthProvider from '../../Hooks/UserAuthProvider';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = UseAuthProvider();
    return (
        <Route
            {...rest}
            render={({ location }) => {
                return (
                    user.photoURL || user.email ? children : <Redirect
                        to={{
                            pathname: '/login',
                            state: {
                                from: location
                            }
                        }}
                    >

                    </Redirect>
                )
            }}
        >

        </Route>
    );
};

export default PrivateRoute;