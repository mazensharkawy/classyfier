import axios from "axios";

axios.defaults.withCredentials = true

export const getServerSideToken = req =>{
   
    const {signedCookies={}}=req
    if (!signedCookies){
        return {}
    }
    else if (!signedCookies.token){
        return {}
    }
    return {user: signedCookies.token}
}