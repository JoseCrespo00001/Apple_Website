// 1. Importar las librerías necesarias para la animación y manejo de estado.
// 2. Definir el componente Hero que maneja el video y animaciones de la sección principal.
// 3. Inicializar el estado para la fuente del video, seleccionando entre dos opciones basadas en el ancho de la ventana.
// 4. Crear una función para actualizar la fuente del video cuando cambie el tamaño de la ventana.
// 5. Añadir un efecto para escuchar el cambio de tamaño de la ventana y actualizar la fuente del video.
// 6. Utilizar GSAP para animar la opacidad y posición de los elementos del hero y el CTA después de un retraso.
// 7. Renderizar el componente, mostrando un video y un botón de compra con información de precios.

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";


const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
      } else {
        setVideoSrc(heroVideo);
        }
  }
  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
      };
  },[])


  useGSAP(() => {
    gsap.to("#hero",{
      opacity:1,
      delay:3
    }),
    gsap.to("#cta",{
      opacity:1,
      delay:3,
      y: -50
    })
  },[])
  return (
    <section className="w-full nav-height bg-black">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">Iphone 15 Pro</p>
        <div className="md:w-10/12 w-9/12 ">
          <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
        <a href="#highlights" className="btn">Buy</a>
        <p className="font-normal text-xl">From $199/month or $999</p>

      </div>
    </section>
  )
}

export default Hero
