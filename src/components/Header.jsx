import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

export default function Header() { 
  return (
    <div className="header">
        <div className="social-media">
          <a href="https://github.com/RegislaineRegis" target="_blank" rel="noreferrer">
            <AiFillGithub className="icons-header" size="44px" /> </a>
          <a href="https://www.linkedin.com/in/regislaine-regis/" 
            target="_blank" rel="noreferrer">
          <AiFillLinkedin className="icons-header" size="44px" /> </a>
        </div>
        <nav className="nav-header">
          <ul className="nav-ul">
              <Link className= "link" to="/"><li>Home</li></Link>
              <Link className= "link" to="/habilidades"><li >Habilidades</li> </Link>             
              <Link className= "link" to="/projetos"><li >Projetos</li> </Link> 
              <Link className= "link" to="/contato"><li >Contato</li> </Link> 
          </ul>            
        </nav>
    </div>
  );
}
