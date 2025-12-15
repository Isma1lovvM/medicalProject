import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./consulting.css";
import rasm1 from "../../assets/Vector.png";
import rasm2 from "../../assets/Vector (1).png";
import rasm3 from "../../assets/Vector (3).png";
import rasm4 from "../../assets/Vector (2).png";

function Consulting() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const data = [
    {
      title: "Covid-19 Test",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.",
      icon: rasm1,
    },
    {
      title: "Heart Lungs",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.",
      icon: rasm2,
    },
    {
      title: "Suppliment",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.",
      icon: rasm3,
    },
    {
      title: "Mental Health",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.",
      icon: rasm4,
    },
  ];

  const animations = [
    "fade-down-right",
    "fade-up-right",
    "fade-up-left",
    "fade-down-left",
  ];

  return (
    <div className="container">
      <h2 className="ws">Our Consulting Specialists</h2>

      <div className="consulting_div">
        <div className="consulting-wrapper">
          {data.map((item, index) => {
            const chosenAnimation = animations[index % animations.length];
            return (
              <div
                key={index}
                data-aos={chosenAnimation}
                className="consulting-card"
              >
                <div className="icon">
                  <img src={item.icon} alt={item.title} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Consulting;
