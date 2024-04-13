import React, { useEffect, useState } from 'react';
import IconHeart from "./IconHeart";
import { useFotosFavoritas } from "../context/FotosFavoritas";
import { createClient } from 'pexels';

const Gallery = () => {
  const [fotos, setFotos] = useState([]);
  const { fotosFavoritas, agregarFotoFavorita, eliminarFotoFavorita } = useFotosFavoritas();

  useEffect(() => {
    const client = createClient('zB656W1AZJIkFofHx7WTkldnvTBSIeCkpzsDDSbms5wcQCQQf7hoLipC');
    const query = 'Nature';
    
    client.photos.search({ query }).then(photos => setFotos(photos.photos));
  }, []);

  const toggleFavorito = (fotoId) => {
    const esFavorito = fotosFavoritas.some(foto => foto.id === fotoId);
    if (esFavorito) {
      eliminarFotoFavorita(fotoId);
    } else {
      const foto = fotos.find(foto => foto.id === fotoId);
      if (foto) {
        agregarFotoFavorita(foto);
      }
    }
  };

  return (
    <div className="gallery grid-columns-5 gap-3 p-3">
      {fotos.length ? (
        fotos.map(foto => (
          <div key={foto.id} className="relative">
            <img src={foto.src.medium} alt="Nature" className='w-full h-auto' />
            <div className="containerText absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50 text-white">
              <p className="text-sm font-bold text-white ">{foto.photographer}</p>
              <p className="text-xs text-white">{foto.alt}</p>
            </div>
            <div className="absolute top-0 right-0 p-2">
              <IconHeart filled={fotosFavoritas.some(f => f.id === foto.id)} onClick={() => toggleFavorito(foto.id)} />
            </div>
          </div>
        ))
      ) : (
        <h2 className="col-span-5 text-center">No Hay Fotos</h2>
      )}
    </div>
  );
};

export default Gallery;