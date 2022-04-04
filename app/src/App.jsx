import "./styles/app.scss";
import "./styles/_index.scss";
import "./styles/_canvas.scss";
import React, {Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";


import Floor from "./components/Floor";
import Model from "./components/Scene";


function App() {

  return (
    <div className="App">
      <Canvas
       camera={{position: [0,0,120], fov: 70}}
       shadows={true}
       className={"canvas"}
       >
         
        <ambientLight color={"white"} intensity={0.3} />
        <directionalLight intensity={0.5} />
        <Model scale={0.1}  position={[0,1,0]}/>
        <Floor/>
        <OrbitControls enableZoom={true} enablePan={false} /> 
      </Canvas>
    </div>
  )
}

export default App