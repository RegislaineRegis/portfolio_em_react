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
               <h2 className="title-contatos">Formulário de Contato</h2>
            </div>
         <div className='formulario'>
            <form action="https://formsubmit.co/nanafidelis@gmail.com"
            method="Post" class="form" >
               <label for="name">Nome</label>
               <input type="text" name="name" placeholder="Digite seu nome" required />
               <label for="email">E-mail</label>
               <input type="email" name="email" placeholder="Digite seu email" required />
               <label for="message">Mensagem</label>
               <textarea name="message" placeholder="Escreva aqui" required></textarea>
               <input type="hidden" name="_captcha" value="false"/>
               <input type="hidden" name="_next" value="http://localhost:3000/obrigado"/>
               <button type="submit">Enviar</button>
            </form>
         </div>
         <Footer />
      </div>        
       );
   }
   