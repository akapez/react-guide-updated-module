import React, {useState, useEffect, useCallback} from 'react';

let logoutTimer;

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {},
})

const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpTime = new Date(expirationTime).getTime();

    const remainingDur = adjExpTime - currentTime

    return remainingDur
}

const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('token');
    const storedExpirationDate =  localStorage.getItem('expirationTime');

    const remainingTime = calculateRemainingTime(storedExpirationDate);

    if(remainingTime <= 60000){
        localStorage.removeItem('token')
        localStorage.removeItem('expirationTime')
        return null
    }

    return {
        token: storedToken,
        duration: remainingTime
    
    }
}


export const AuthContextProvide = props => {
    const tokenData = retrieveStoredToken()

    let initialToken

    if(tokenData){
        initialToken = tokenData.token;
    }

    const [token, setIsToken] = useState(initialToken)

    const userIsLoggedIn = !!token
  
    const logoutHandler = useCallback(() => {
        setIsToken(null)
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime')

        if(logoutTimer){
          clearTimeout(logoutTimer)
        }
    },[])

    const loginHandler = (token, expirationTime) => {
        setIsToken(token)
        localStorage.setItem('token', token);
        localStorage.setItem('expirationTime', expirationTime);

        const remainingTime = calculateRemainingTime(expirationTime)

        logoutTimer = setTimeout(logoutHandler, remainingTime)
    }

    useEffect(() => {
        if(tokenData){
            console.log(tokenData.duration)
            logoutTimer = setTimeout(logoutHandler, tokenData.duration)
        }
    }, [tokenData, logoutHandler])

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext;