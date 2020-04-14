import React,{useState} from 'react';
import {Link, Redirect} from 'react-router-dom';

import './styles.css'
import api from '../../services/api';

const logo = '../../assets/img/default-background.jpg'

function Signup(){
    const [nome,setNome] = useState('');
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const [erro,setErro] = useState('');
    const [sucesso,setSucesso] = useState('');
    let response;

    async function handleRegister(e){
        e.preventDefault();
        const data ={
            nome,
            email,
            senha,
        };
        try{
            setErro('')
            response = await api.post('/usuarios',data);
            setSucesso('Cadastro Realizado com Sucesso');
            setEmail('');
            setNome('');
            setSenha('');

        }catch(err){
            if(err.response.status === 409){
                setErro('Email já cadastrado !');
            }
        }
    }
        return(
            <div className='main'>
                <div id='signup-div'>
                    <form onSubmit={handleRegister}>
                        <img src={logo} alt='MtxBem Logo'/>
                        {erro && <p>{erro}</p>}
                        {sucesso && <p id='sucesso'>{sucesso}</p>}
                        <input
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                            name='Nome Completo'
                            type='text'
                            placeholder='Nome Completo'   
                        />
                        <input
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            name='Email'
                            type='email'
                            placeholder='Endereço de Email'   
                        />
                        <input
                            id='senha'
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                            name='Senha'
                            type='password'
                            placeholder='Senha'
                        />
                        <button type="submit">Cadastrar</button>
                        <hr/>
                        <Link to="/login">Fazer Login</Link>
                    </form>
                </div>
            </div>
        );
    }

export default Signup;