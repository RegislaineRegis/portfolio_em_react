import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import habilidadesApi from '../services/apiHabilidades';
import '../styles/Habilidades.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default function Habilidades() {
  return (
    <div className='habilidades'><Header/>
      <div className="icons-heart"><AiOutlineHeart size="20px" /></div>
      <div className="title-img-container">
        <h2 className="title-habilidades">Habilidades</h2>
      </div>
      <div className="habilidades-container">
        {habilidadesApi.map((hab) => (
          <div key={hab.id} className="card-habilidades-container">
            <h2 className="habilidades-title">{hab.title}</h2>
            <div className="text-pic-container">
              <img src={hab.image} alt={hab.title} className="habilidades-picture" />
            </div>
          </div>
        ))}
      </div><Footer />
    </div>
  );
}
