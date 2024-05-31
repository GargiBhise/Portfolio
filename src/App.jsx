import "./app.scss";
import Test from "./Test"
import React from "react";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return <div>
    <section>
      <Navbar />
    </section>
    
    <section>Skills</section>
    <section>Experience</section>
    <section>Education</section>
    <section>Projects</section>
    <section>Contact</section>

</div>
}

export default App;
