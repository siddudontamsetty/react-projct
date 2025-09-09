import {auth, provider}from'../config/firebase';
import {signInWithPopup} from 'firebase/auth';
import {useNavigate}from 'react-router-dom';

export const Login=()=>{
    const navigate = useNavigate();
    const sign =async()=>{
        const res = await signInWithPopup(auth, provider)
        console.log (res)
        navigate("/")
        
    };

    return <div>
        <p>sign in google</p>
        <button onClick={sign}>google</button>
    </div>

}