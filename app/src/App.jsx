import "./styles/app.scss";
import React, {useEffect, useState} from "react";
import {Canvas} from "@react-three/fiber";
import ScrollCarousel from "./components/ScrollCarousel";
import Card from "./components/Card";
import Floor from "./components/Floor";


function App() {
  const [state, setState] = useState([]);
  const fetchData = () => {
    return fetch("/db.json")
          .then((response) => response.json())
          .then((data) => setState(data.data));}

  useEffect(() => {
    fetchData();
  }, []);

  console.log(state)
  return (
    <div className="App">
      <div className="max-content">
        <Canvas
        camera={{position: [0,10,0], fov: 100}}
        shadows={true}
        className={"canvas"}
        >
          
          <ambientLight color={"white"} intensity={0.3} />
          <directionalLight intensity={0.5} />
          <Floor scale={0.2}/>
        </Canvas>
        <section className="hero">
          <h1 className="hero-title">BRIAN ZIANI</h1>
        </section>
        <ScrollCarousel>
          {/* {
            state && state.map((item) => {
              <Card ref={item.number} img={item.img} title={item.title} number={item.number}/>
            })
          } */}
          <Card  img={"https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"} describe={"Parce que c'est Cool! Et qu'on apprend beaucoup"} title={"art"} number={"01"}/>
          <Card  img={"https://images.unsplash.com/photo-1576836165612-8bc9b07e7778?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"} describe={"C'est pas pour rien que je veux en faire mon métier"} title={"code"} number={"02"}/>
          <Card  img={"https://images.unsplash.com/photo-1638561186238-3227892dbc18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=694&q=80" } describe={"Tout sauf Fifa (désolé si j'en déçois certains) !"} title={"jeux vidéo"} number={"03"}/>
          <Card  img={"https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"} describe={`Un jour un grand sage a dit "Le Gras c'est la vie"`} title={"nourriture"} number={"04"}/>
          <Card  img={"https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"} describe={"La salle de sport.. Mais les confinements sont passé par là"} title={"sport"} number={"05"}/>
          <Card  img={"https://images.unsplash.com/photo-1623107274042-16962aa28ea8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80"} describe={"Tout à l'exception des Films romantiques"} title={"films"} number={"06"}/>
        </ScrollCarousel>
        <section className="hero">
          <h1 className="hero-title">THANKS</h1>
          <p className="footer">Website made with <a href="https://reactjs.org/" target="_blank">ReactJS</a> and <a href="https://threejs.org/" target="_blank">THREEJS (WebGL 3D)</a></p>
        </section>
      </div>
    </div>
  )
}

export default App
