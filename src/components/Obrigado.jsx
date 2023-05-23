import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import '../styles/Obrigado.css';
import Footer from './Footer';
import Header from './Header';

export default function Obrigado() {
    return (
      <div><Header/>
         <div className='obrigado'>
               <div className="icons-heart-obrigado"><AiOutlineHeart size="20px" /></div>
               <div className="title-img-container-obrigado">
                  <h1 className="title-obrigado">Obrigada!!!</h1>
               </div>
         </div>
         <Footer/>        
      </div>
    )
   }