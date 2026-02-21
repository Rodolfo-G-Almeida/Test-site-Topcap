// utils/useWindowSize.js
import { useState, useEffect } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Adiciona o ouvinte de redimensionamento ao carregar o componente
    window.addEventListener('resize', handleResize);

    // Chama a função de redimensionamento inicial para obter as dimensões iniciais
    handleResize();

    // Remove o ouvinte de redimensionamento ao desmontar o componente
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Apenas executa o efeito uma vez durante a montagem do componente

  return windowSize;
}

export default useWindowSize;
