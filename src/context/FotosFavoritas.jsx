
import { createContext, useState, useContext } from "react";

export const FotosFavoritasContext = createContext();

export const useFotosFavoritas = () => {
  return useContext(FotosFavoritasContext);
};

export const FotosFavoritasProvider = ({ children }) => {
  const [fotosFavoritas, setFotosFavoritas] = useState([]);


  const agregarFotoFavorita = (foto) => {
    setFotosFavoritas([...fotosFavoritas, foto]);
  };

    const eliminarFotoFavorita = (id) => {
    const nuevasFotos = fotosFavoritas.filter((foto) => foto.id !== id);
    setFotosFavoritas(nuevasFotos);
  };

  return (
    <FotosFavoritasContext.Provider
      value={{
        fotosFavoritas,
        agregarFotoFavorita,
        eliminarFotoFavorita,
      }}
    >
      {children}
    </FotosFavoritasContext.Provider>
  );
};