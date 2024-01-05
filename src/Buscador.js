import React from 'react';
import { useState } from 'react';
import './Style.css';

const Buscador = () => {
    const [input, setInput] = useState('');
    const [cep, setCep] = useState({});

    function handleChange(e) {
        setInput(e.target.value);
    }

    async function buscaCep() {
        if(input === '') {
            alert('Digite um CEP!');
            setInput('');
            return;
        }

        try {
            await fetch(`https://viacep.com.br/ws/${input}/json`)
            .then(r => r.json())
            .then(r => setCep(r));
            setInput('');
        } catch {
            alert('Ocorreu um erro, digite o CEP novamente!');
            setInput('');
        }
        
    }


    return (
        <div className='container'>
            <h1 className='titulo'>Busca Cep</h1>
            <div className='container-input'>
                <input className='input-cep' type='text' value={input} onChange={handleChange} placeholder='Digite o CEP'/>
                <button className='btn' onClick={buscaCep}>Buscar</button>
            </div>

            {Object.keys(cep).length > 0 && 
                <div className='resultado'>
                    <h2>CEP: {cep.cep} </h2>
                    <span>{cep.logradouro}</span>
                    {cep.complemento &&
                    <span>Complemento: {cep.complemento}</span>
                    }
                    <span>Bairro: {cep.bairro}</span>
                    <span>Cidade: {cep.localidade}</span>
                    <span>Estado: {cep.uf}</span>
                </div>
            }
        </div>
    )
}

export default Buscador