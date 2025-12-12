import React from "react";
import "./member.css";

function Member() {
  return (
    <>
      <section className="abubakr">
        <div className="container">
          <div className="left">
            <h2>
              What <span>Our Member’s</span> Saying About Us
            </h2>

            <p className="des">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit
              viverra amet faucibus.
            </p>

            <div className="odamlar">
              <div className="avatar">
                <img src="/odam.png" alt="" />
                <img src="/odam.png" alt="" />
                <img src="/odam.png" alt="" />
                <img src="/odam.png" alt="" />
                <img src="/odam.png" alt="" />
              </div>
              <span>100+ Reviews</span>
            </div>
          </div>
          <div className="bread">
            <div className="milk">
              <div className="user">
                <img src="/odam.png" alt="" />
                <div>
                  <h4>Jane Cooper</h4>
                  <p>12/4/17</p>
                </div>
              </div>

              <div className="stars">⭐⭐⭐⭐⭐</div>
            </div>

            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit
              viverra amet faucibus. Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Member;
