import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Experience from "./Components/Experience";
import Configurator from "./Components/Configurator";
import { Button, Group } from "@mantine/core";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { useCustomization } from "./Context/Customization";

function ModelViewer() {
  const { carColor, setCarColor } = useCustomization();
  console.log(carColor);

  //array of srcs
  const srcs = [
    "./Models/yellow.glb",
    "./Models/red.glb",
    "./Models/blue.glb",
    "./Models/black.glb",
    "./Models/white.glb",
  ];

  //create a src const with an if statement
  const src =
    carColor === "Black"
      ? srcs[3]
      : carColor === "Blue"
      ? srcs[2]
      : carColor === "Red"  
      ? srcs[1]
      : carColor === "White"
      ? srcs[4]
      : carColor === "Yellow"
      ? srcs[0]
      : srcs[3];



  return (
    <model-viewer
    style={{width: "100vw", height: "80vh"}}
      src={src}
      ar
      ar-modes="webxr scene-viewer quick-look"
      camera-controls
      poster="poster.webp"
      shadow-intensity="1"
    >
      {" "}
    </model-viewer>
  );
}

function CarShow() {
  return (
    <div className="App">
      <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
        <color attach="background" args={["#101010"]} />
        <fog attach="fog" args={["#101010", 10, 20]} />
        <Environment preset="sunset" />
        <Experience />
      </Canvas>
      <Configurator />

      <Group position="center">
        <Link to="/modelviewer">
          <Button
            style={{
              position: "fixed",
              top: "95%",
              left: "10%",
              transform: "translate(-50%, -50%)",
            }}
          >
            AR
          </Button>
        </Link>
      </Group>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<CarShow />} />
          <Route path="/modelviewer" element={<ModelViewer />} />
        </Routes>
      </Router>
    </div>
  );
}
