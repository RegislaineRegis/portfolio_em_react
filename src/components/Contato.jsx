import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import '../styles/Contato.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default function Contato() {
    return (
      <div className='contato'><Header />
         <div className="icons-heart"><AiOutlineHeart size="20px" /></div>
            <div className="title-img-container">
               <h2 className="title-contatos">Contato</h2>
            </div>
         <h1> Formulário de Contato</h1>
         <form action="https://formsubmit.co/nanafidelis@gmail.com"
         method="Post" >
            <input type="text" name="name" placeholder="Digite seu nome" required />
            <input type="email" name="email" placeholder="Digite seu email" required />
            <textarea name="message" placeholder="Escreva aqui"></textarea>
            <input type="hidden" name="_captcha" value="false"/>
            <input type="hidden" name="_next" value="http://localhost:3000/obrigado"/>
            <button type="submit">Enviar</button>
         </form>
         <Footer />
      </div>        
       );
   }
   