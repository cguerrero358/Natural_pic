import React, { useContext } from 'react';
import {FotosFavoritasContext } from '../context/FotosFavoritas';


const Favorites = () => {
  const { fotosFavoritas } = useContext(FotosFavoritasContext);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {fotosFavoritas.length ? (
          fotosFavoritas.map((foto) => (
            <div key={foto.id} className="relative">
              <img src={foto.src.medium} alt="Nature" className="w-full h-auto" />
              <div className="containerText absolute bottom-0 left-0 right-0 p-2 bg-white text-white">
              <p className="text-sm font-bold text-white ">{foto.photographer}</p>
              <p className="text-xs text-white">{foto.alt}</p>
            </div>
            </div>
          ))
        ) : (
          <h2>No tienes fotos en favoritos</h2>
        )}
      </div>
    </div>
  );
};

export default Favorites;