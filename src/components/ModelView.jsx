import {OrbitControls, PerspectiveCamera, View} from '@react-three/drei' // Importa componentes necesarios de @react-three/drei
import * as THREE from 'three' // Importa todo desde la librería THREE
import Lights from "./Lights" // Importa el componente Lights
import Loader from './Loader' // Importa el componente Loader
import IPhone from './IPhone' // Importa el componente IPhone
import { Suspense } from 'react' // Importa Suspense desde react para manejar la carga diferida

// Define el componente ModelView que recibe varias props
const ModelView = ({index, groupRef, gsapType, controlRef, setRotationState, size, item}) => {
  return (
   <View
   index={index} // Establece el índice del View
   id={gsapType} // Establece el tipo de gsap como id
   className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`} // Establece clases condicionales para CSS
   >
    <ambientLight intensity={0.3}/> 
    <PerspectiveCamera makeDefault position={[0,0,4]}/> 
    <Lights/> 
    <OrbitControls 
        makeDefault // Establece estos controles como predeterminados
        ref={controlRef} // Asocia la referencia a los controles
        enableZoom={false} // Deshabilita el zoom
        enablePan={false} // Deshabilita el paneo
        rotateSpeed={0.4} // Establece la velocidad de rotación
        target={new THREE.Vector3(0, 0 ,0)} // Establece el objetivo de los controles
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())} // Maneja el evento al finalizar la rotación
      /> 

      <group ref={groupRef} name={`${index === 1 ? 'small' : 'large'}`} position={[0, 0 ,0]}>
        <Suspense fallback={<Loader />}> 
          <IPhone 
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]} // Establece la escala del iPhone basada en el índice
            item={item} // Pasa el item al componente IPhone
            size={size} // Pasa el tamaño al componente IPhone
          />
        </Suspense>
      </group>

   </View>
  )
}

export default ModelView // Exporta el componente ModelView
