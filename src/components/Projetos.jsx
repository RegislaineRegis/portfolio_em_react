import React from 'react';
import { AiOutlineHeart, AiFillGithub  } from 'react-icons/ai';
import projetosApi from '../services/apiProjetos';
import '../styles/Projetos.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default function Projetos() {
  return (
    <div className='projetos'><Header/>
      <div className="icons-heart-projetos"><AiOutlineHeart size="20px" /></div>
      <div className="title-img-container">
        <h2 className="title-projetos">Projetos</h2>
      </div>
      <div className="projetos-container">
        {projetosApi.map((proj) => (
          <div key={proj.id} className="card-projetos-container">
            <h2 className="projetos-title">{proj.title}</h2>
            <div className="text-pic-container">
              <p>{proj.descrição}</p>
            </div>
            <div><img src={proj.git} alt={proj.title} className="projetos-picture" /></div>
            <div className='github'>
              <a href={proj.href} target="_blank" rel="noreferrer">
              <AiFillGithub className="icons-header-projetos" size="50px" /></a>
            </div>
          </div>
        ))}
      </div><Footer />
    </div>
  );
}
