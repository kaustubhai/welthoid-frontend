import React, { useEffect, useState } from 'react'
import cookie from 'js-cookie'
import { useRouter } from 'next/router'
import Home from '../pages/index'

const withAuth = Component => {
    const Auth = (props) => {
        const [login, isLogin] = useState(false)
        const [loading, isLoading] = useState(true)
        const router = useRouter()
        useEffect(() => {
            const token = cookie.get('welthoid-token')
            if (token){
                isLogin(true)
                isLoading(false)
            }
            else {
                isLoading(false)
            }
        }, [])

        if (Component.getInitialProps) {
            Auth.getInitialProps = Component.getInitialProps;
        }
        
        if (login && !loading) {
            return (
                <Component {...props} />
            )
        }
        else if(!login && !loading) {
            if(process.browser)
                router.push('/')
            return <Home />
        }
        else return ""
    }
    return Auth
}

export default withAuth
