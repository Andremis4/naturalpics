import { createContext, useEffect, useState } from "react";

//  Necesitamos el contexto , exportamos el contexto y el provider.
export const Fotos = createContext();

export default function FotoProvider({ children }) {
  const [photos, setPhotos] = useState([]);

  // Busca las fotos y las carga
  const llamarPhotos = async () => {
    const respuesta = await fetch("/photos.json");
    const {photos:photosdb} = await respuesta.json();
    setPhotos(photosdb);
  };

  // Fetching de datos para usar el api
  useEffect(() => {
    llamarPhotos();
  }, []);

  return (
    <Fotos.Provider value={{ photos, setPhotos }}>
      {children}
    </Fotos.Provider>
  );
}

/* 
 import { createContext, useEffect, useState } from "react";

//  Necesitamos el contexto , exportamos el contexto y el provider.
export const Fotos = createContext();

export default function FotoProvider({ children }) {
  const [photos, setPhotos] = useState([]);

  //busca las fotos y las carga

  const llamarPhotos = async () => {
    const respuesta = await fetch("/photos.json");
    const { imagenes } = await respuesta.json();
    setPhotos(imagenes);
  };

  //fetching de datos para usar el api
  useEffect(() => {
    llamarPhotos();
  }, []);

  return (
    <>
      <Fotos.Provider value={{ photos, setPhotos }}>{children}</Fotos.Provider>
    </>
  );
}
  */