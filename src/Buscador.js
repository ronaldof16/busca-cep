import React from 'react'
import { useState } from 'react';
import './Style.css'

const Buscador = () => {
    const [input, setInput] = useState('');
    const [cep, setCep] = useState({});

    function handleChange(e) {
        setInput(e.target.value);
    }

    async function buscaCep() {
        const resposta = await fetch(`https://viacep.com.br/ws/${input}/json`)
        .then(r => r.json());
        setCep(resposta);
        console.log(cep);
    }


    return (
        <div className='container'>
            <h1 className='titulo'>Busca Cep</h1>
            <div className='container-input'>
                <input className='input-cep' type='text' value={input} onChange={handleChange} placeholder='Digite o CEP'/>
                <button className='btn' onClick={buscaCep}>Buscar</button>
            </div>
            <div className='resultado'>
                <h2>CEP: {cep.cep} </h2>
                <span>Rua: {cep.logradouro}</span>
                <span>Complemento: {cep.complemento}</span>
                <span>Bairro: {cep.bairro}</span>
                <span>Cidade: {cep.localidade}</span>
                <span>Estado: {cep.uf}</span>
            </div>
        </div>
    )
}

export default Buscador