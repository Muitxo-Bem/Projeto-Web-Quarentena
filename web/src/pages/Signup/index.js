import React from 'react';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';

import './styles.css'

const logo = '../../assets/img/default-background.jpg'

function Signup(){
    const {register, handleSubmit} = useForm();
    let error = '';

    const onSubmit = data => console.log(data);
  
        return(
            <div className='main'>
                <div id='signup-div'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <img src={logo} alt='MtxBem Logo'/>
                        {error && <p>{error}</p>}
                        <input
                            ref={register}
                            name='Nome de Usuário'
                            type='text'
                            placeholder='Nome de Usuário'   
                        />
                        <input
                            ref={register}
                            name='Email'
                            type='text'
                            placeholder='Endereço de Email'   
                        />
                        <input
                            id='senha'
                            ref={register}
                            name='Senha'
                            type='password'
                            placeholder='Senha'
                        />
                        <button type="submit">Cadastrar</button>
                        <hr/>
                        <Link to="/">Fazer Login</Link>
                    </form>
                </div>
            </div>
        );
    }

export default Signup;