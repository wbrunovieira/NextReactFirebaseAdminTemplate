import {  createContext, useState} from "react";
import firebase from '../../firebase/config'
import Usuario from "../../model/Usuario";

import route from 'next/router'

interface AuthContextProps {
    usuario?: Usuario
    loginGoogle?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

async function usuarioNormalizado(usuarioFirebase: firebase.User) {
    const token =  await usuarioFirebase.getIdToken()
    return {  
        uid: usuarioFirebase.uid,
        nome: usuarioFirebase.displayName,
        email: usuarioFirebase.email,
        token,
        provedor: usuarioFirebase.providerData[0].providerId,
        imagemUrl: usuarioFirebase.photoURL

    }
}

export function AuthProvider(props) {
    
    const [usuario, setUsuario] = useState<Usuario>(null)

    async function loginGoogle(){
        console.log('clicou login google')
        route.push('/')
    }

    return(
        <AuthContext.Provider value={{
            loginGoogle,
            usuario
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext
