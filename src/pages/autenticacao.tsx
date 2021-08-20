import React, { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { IconeAtencao } from "../icons";


export default function Autenticacao(){
    
    const [erro, setErro] = useState(null)
    const [modo, setModo] = useState<'login' | 'cadastro'>('login')
    const [ email, setEmail] =useState('')
    const [ senha, setSenha] =useState('')

    function exibirErro(msg, tempoEmSegundos = 5) {
        setErro(msg)
        setTimeout(() => setErro(null), tempoEmSegundos * 1000)
    }

    function submeter() {
        if(modo === 'login'){
            console.log('login')
            exibirErro('ocorreu um erro no login')
        } else {
            console.log('cadastro')
            exibirErro('ocorreu um erro no cadastro')
        }
    }
    return(
        <div className="flex h-screen items-center justify-center">
            <div className="hidden md:block md:w-1/2 lg:w-2/3">
                <img 
                    src="https://source.unsplash.com/random"
                    alt="Imagem da Tela de Autenticação"
                    className="h-screen w-full object-cover" />
            </div>
            <div className="m-10 w-full md:w-1/2 lg:w-1/3">
            <h1 className="text-3xl font-bold mb-5">
                {modo === 'login' ? 'Entre com a Sua Conta' : 'Cadastre-se na Plataforma'}
            </h1>

            {erro ? (
                    <div className={`
                        flex items-center
                        bg-red-400 text-white py-3 px-5 my-2
                        border border-red-700 rounded-lg
                    `}>
                        {IconeAtencao()}
                        <span className="ml-3">{erro}</span>
                    </div>
                ) : false}

            <AuthInput
                label="Email"
                tipo="email"
                valor={email}
                valorMudou={setEmail}
                obrigatorio
            />
            <AuthInput
                label="Senha"
                tipo="password"
                valor={senha}
                valorMudou={setSenha}
                obrigatorio
            />

            <button onClick={submeter} className={`
                w-full bg-indigo-500 hover:bg-indigo-400
                text-white rounded-lg px-4 py-3 mt-6 
            `}>
                {modo === 'login' ? 'logar' : 'Cadastrar'}
            </button>

            <button onClick={submeter} className={`
                w-full bg-red-500 hover:bg-red-400
                text-white rounded-lg px-4 py-3 mt-6 
            `}>
               entrar com o Google
            </button>

            {modo === 'login' ? (
                    <p className="mt-8">
                        Novo por aqui?
                        <a onClick={() => setModo('cadastro')} className={`
                            text-blue-500 hover:text-blue-700 font-semibold
                            cursor-pointer
                        `}> Crie um Conta Gratuitamente</a>
                    </p>
                ) : (
                    <p className="mt-8">
                        Já faz parte da nossa comunidade?
                        <a onClick={() => setModo('login')} className={`
                            text-blue-500 hover:text-blue-700 font-semibold
                            cursor-pointer
                        `}> Entre com as suas Credenciais</a>
                    </p>
                )}
            </div>
            </div>
        
    )
}