import "./styles.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particlesOptions } from "./particlesConfig";

function App() {
  const particlesInit = (engine) => {
    loadFull(engine);
  };

  return (
    <div className="App">
      <Particles init={particlesInit} options={particlesOptions} />

      <h1>tsParticles in ACTION </h1>

      <h2>
        {" "}
        This is the latest library of tsParticles that display at the background
        of your application{" "}
      </h2>
    </div>
  );
}
export default App;
