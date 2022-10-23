import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import '../styles/Obrigado.css';

export default function Obrigado() {
    return (
       <div className='obrigado'>
            <div className="icons-heart-obrigado"><AiOutlineHeart size="20px" /></div>
            <div className="title-img-container-obrigado">
               <h1 className="title-obrigado">Obrigada!!!</h1>
            </div>
       </div>        
       );
   }