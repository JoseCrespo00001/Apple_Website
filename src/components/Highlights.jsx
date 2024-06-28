import { useGSAP } from "@gsap/react" // Importa el hook useGSAP de la librería GSAP para React
import { gsap } from "gsap" // Importa gsap de la librería GSAP
import { rightImg, watchImg } from "../utils" // Importa imágenes desde utilidades
import VideoCarousel from "./VideoCarousel" // Importa el componente VideoCarousel

// Define el componente Highlights
const Highlights = () => {
  // Utiliza el hook useGSAP para animaciones
  useGSAP(() =>{
    // Anima el título para que sea visible y se mueva a su posición original
    gsap.to('#title' , {
      opacity:1,
      y:0
    }),
    // Anima los enlaces para que sean visibles, se muevan a su posición original y se animen con un retraso escalonado
    gsap.to('.link' , {
      opacity:1,
      y:0,
      duration:1,
      stagger:0.25
    })

  },[])

  // Renderiza el componente
  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">Get the Highlights.</h1>
        
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">Watch the film<img src={watchImg} alt="watch" className="ml-2"/></p>
            <p className="link">Watch the event<img src={rightImg} alt="right" className="ml-2"/></p>
          </div>
        </div>
        <VideoCarousel/>
      </div>
    </section>
  )
}

export default Highlights
