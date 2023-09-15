'use client'
import { createContext } from 'react'
import { useState, useEffect } from 'react';
import "./Form.css"
import ListaService from '../../service/testeJson.json';
// import {crescente, descresente, sugestao } from '../../service/func'
import { useMyContext } from '../../app/MyContext'; // Importe useMyContext

export const Form = ({ updateList }) => {

    
    const { handleUpdateList } = useMyContext(); // Use a função correta do contexto

   const Context = createContext()
    const handleClickCrescente = () => {
        const sortedList = [...ListaService];
        sortedList.sort((a, b) => a.dataEnvio - b.dataEnvio);
        handleUpdateList(sortedList);
        console.log("certo");
      };
    
      const handleClickDecrescente = () => {
        const sortedList = [...ListaService];
        sortedList.sort((a, b) => b.dataEnvio - a.dataEnvio);
        handleUpdateList(sortedList);
        console.log("errado");

      };

    return (
        <div className='cont-principal'>
            <div className='cont-secundario'>
                <div className='inputs'>
                <label for="cpf" className='label-input'>Pesquisa por CPF</label>
                <input type="text" className='inmput-text' name="cpf" /> 

                </div>

            </div>
            <div className='cont-secundario'>
                <ul className='btn-ul'>
                    <li className='li-btn'>
                        <button className=''onClick={handleClickCrescente}>Crescente</button>
                    </li>
                    <li className='li-btn' >
                        <button className='' onClick={handleClickDecrescente}>Decrescente</button>
                    </li>
                    <li className='li-btn'>
                        <button className=''>Novo produto</button>
                    </li>
                    <li className='li-btn'>
                        <button className=''>Melhoria</button>
                    </li>

                </ul>
            </div>
        </div>
    )
}
