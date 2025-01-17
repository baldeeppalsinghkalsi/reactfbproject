import { auth, googleProvider} from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
export const Auth = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log(auth?.currentUser?.email)

    const signIn = async() => {
        try{
            await createUserWithEmailAndPassword(auth, email, password);
        } catch(err) {
            console.error(err)
        }
    };
    const signInwithGoogle = async() => {
        try{
            await signInWithPopup(auth, googleProvider);
        } catch(err) {
            console.error(err)
        }
    };
    const logout = async() => {
        try{
            await signOut(auth);
        } catch(err) {
            console.error(err)
        }
    };
    return (
        <div class="login-wrap">
            <h2>Login</h2>
            <div class="form">
            <input 
                placeholder="Email..."
                type="email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                placeholder="password..."
                type="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={signIn}>Sign In</button>
            <button onClick={signInwithGoogle}>Sign In with Google</button>
            <button onClick={logout}>Log Out</button>
            <a href="#"><p>Create Account</p></a>
            </div>
           
        </div>
    );
};