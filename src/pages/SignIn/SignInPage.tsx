import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { SignIn } from '../../components';
import { LineSpacer } from '../../components/LineSpacer';
import { routerUri } from '../../config';
import { RootState } from '../../redux';
import { signIn } from '../../redux/actions';

export const SignInPage = () => {
    console.debug('SignInPage');
    const dispatch = useDispatch();
    const history = useHistory();
    const currentUser = useSelector((state: RootState) => state.currentUser);

    useEffect(() => {
        const isDemo =
            new URLSearchParams(history.location.search).get('demo') === 'true';
        if (isDemo) {
            dispatch(signIn({ username: 'demo', password: 'demo' }, true));
        }
    }, [dispatch, history.location.search]);
    return (
        <div className='SignInPage'>
            <LineSpacer />
            <SignIn
                onCreateAccountClick={() => history.push(routerUri.signUp)}
                error={currentUser.error}
                loading={currentUser.isFetching}
                onSubmit={input => dispatch(signIn(input))}
            />
        </div>
    );
};
