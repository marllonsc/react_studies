import { redirect } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import { SpinnerLoading } from "../layouts/Utils/SpinnerLoading";
import OktaSignInWidget from "./OktaSignInWidget";

const LoginWidget = ({config}) => {
    const { oktaAuth, authState} = useOktaAuth();
    const onSuccess = (tokens) => {
        oktaAuth.handleLoginRedirect(tokens);
    };

    const onError = (err) => {
        console.log('Sign in error: ', err);
    }

    if(!authState){
        return(<SpinnerLoading></SpinnerLoading>);
    }

    return authState.isAuthenticated ?
    <Redirect to={{pathname: '/'}}></Redirect>
    :
    <OktaSignInWidget config={config} onSuccess={onSuccess} onError={onError}></OktaSignInWidget>

};

export default LoginWidget;