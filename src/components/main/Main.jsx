import "./main.css";
import mainImg from "../../assets/mainImg.png";
import mainImg2 from "../../assets/elipse.png";
import vector from "../../assets/vaector.png";

function Main() {
  return (
    <>
      <main>
        <div className="container">
          <div className="main_box">
            <div className="main_box_left">
              <h2>
                Find & Search Your
                <div className="favor_box">
                  <div className="favor_el">
                    <span className="favor">Favourite</span>
                    <img className="vector" src={vector} alt="" />
                  </div>
                  Doctor
                </div>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem
                velit viverra amet faucibus.
              </p>

              <form action="" className="main_form">
                <option value="">
                  <select name="name" id="">
                    Doctor’s Name
                  </select>
                  <select name="name" id="">
                    Location
                  </select>
                </option>
              </form>
            </div>
            <div className="main_box_right">
              <img className="top" src={mainImg} alt="" />
              <img className="bottom" src={mainImg2} alt="" />
            </div>
          </div>
        </div>
        <div className="blue">
          <div className="container">
            <div className="texts_list">
              <div className="texts">
                <h3>24/7</h3>
                <p>Online Support</p>
              </div>
              <div className="texts">
                <h3>100+</h3>
                <p>Doctors</p>
              </div>
              <div className="texts">
                <h3>1M+</h3>
                <p>Active Patients</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
