import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

export interface IAuthRouteProps {
    children: React.ReactNode
} 

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = (props) => {

    const { children } = props;
    const auth = getAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const AuthCheck = onAuthStateChanged(auth, (user) => {
            if(user) {
                setLoading(false);
                navigate
            }
            else {
                console.log('unauthorized');
                navigate('/'); 
            }
        });
        return () => { AuthCheck(); }
    } , [auth]);


    if(loading) return <div className='font-bold text-center text-5xl'>Loading...</div>

    return <>{children}</>;



};

export default AuthRoute;