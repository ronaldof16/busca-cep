import React from 'react'
import { useState } from 'react';
import './Style.css'

const Buscador = () => {
    const [input, setInput] = useState('');

    function handleChange(e) {
        setInput(e.target.value);
    }

    async function buscaCep() {
        const resposta = await fetch(`https://viacep.com.br/ws/55814080/json/`);
        console.log(resposta)
        
    }


    return (
        <div className='container'>
            <h1 className='titulo'>Busca Cep</h1>
            <div className='container-input'>
                <input className='input-cep' type='text' value={input} onChange={handleChange} placeholder='Digite o CEP'/>
                <button className='btn' onClick={buscaCep}>Buscar</button>
            </div>
            <div className='resultado'>
                <h2>CEP: </h2>
                <span>Rua:</span>
                <span>Complemento:</span>
                <span>Bairro:</span>
                <span>Cidade:</span>
            </div>
        </div>
    )
}

export default Buscador