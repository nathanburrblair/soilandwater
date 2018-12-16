import React, { Component } from "react";
import "./Home.css";
import styled from "styled-components";
import plantsbg from "../../images/plantsbg.jpg";
import containerbg from "../../images/containerbgdr.jpg";
import designbg from "../../images/designbg1.jpg";
import { Link } from 'react-router-dom';

const Title = styled.h1`
  font-size: 34px;
  font-family: "Krona One", sans-serif;
  color: #353535;
  margin-top: 80px;
`;

const PlantsSubtitle = styled.h2`
  font-size: 34px;
  font-family: "Krona One", sans-serif;
  color: #f2f2f2;
  text-transform: uppercase;
  margin-top: 0px;
`;

const ContainersSubtitle = styled.h2`
  font-size: 34px;
  font-family: "Krona One", sans-serif;
  color: #f2f2f2;
  text-transform: uppercase;
  margin-top: 0px;
`;

const DesignSubtitle = styled.h2`
  font-size: 34px;
  font-family: "Krona One", sans-serif;
  color: #353535;
  text-transform: uppercase;
  margin-top: 0px;
`;

const SectionTwo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${plantsbg});
  background-size: cover;
  /* background-attachment: fixed; */
  height: 50vh;
  padding: 60px 0 60px 0;

  p {
    width: 70%;
    color: #f2f2f2;
    font-family: "Lato", sans-serif;
    font-size: 18px;
    padding: 0 0 40px 0;
  }

  button {
    width: auto;
    height: 50px;
    font-family: "Krona One", sans-serif;
    font-size: 18px;
    text-transform: uppercase;
    background-color: #f2f2f2;
    color: #353535;
    border: none;
    padding: 0 16px 0 16px;
  }
`;

const SectionThree = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${containerbg});
  background-size: cover;
  background-position: center;
  /* background-position-y: 10px; */
  height: 50vh;
  padding: 60px 0 60px 0;

  p {
    width: 70%;
    color: #f2f2f2;
    font-family: "Lato", sans-serif;
    font-size: 18px;
    padding: 0 0 40px 0;
  }

  button {
    width: auto;
    height: 50px;
    font-family: "Krona One", sans-serif;
    font-size: 18px;
    text-transform: uppercase;
    color: #353535;
    background-color: #f2f2f2;
    border: none;
    padding: 0 16px 0 16px;
  }
`;

const SectionFour = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${designbg});
  background-size: cover;
  height: 50vh;
  padding: 60px 0 60px 0;

  p {
    width: 70%;
    color: #353535;
    font-family: "Lato", sans-serif;
    font-size: 18px;
    padding: 0 0 40px 0;
  }

  button {
    width: auto;
    height: 50px;
    font-family: "Krona One", sans-serif;
    font-size: 18px;
    text-transform: uppercase;
    background-color: #f2f2f2;
    color: #353535;
    border: none;
    padding: 0 16px 0 16px;
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 25vh;
  background-color: #171717;
  color: #f2f2f2;
`;

class Home extends Component {

  componentDidMount() {
    const parallax = document.getElementById("soilWater");
    window.addEventListener("scroll", function() {
      let offset = window.pageYOffset;
      parallax.style.backgroundPositionY = offset * 0.7 + "px";
    });

  }
  render() {

    return (
      <div>
        <main>
          <article>
            <div id="soilWater">
              <div />
              <Title>
                SOIL + WATER <br /> Plant Co.
              </Title>
            </div>
            <SectionTwo>
              <PlantsSubtitle>Plants</PlantsSubtitle>
              <p>
                We’ve scoured the globe to find the best of the best. Come to
                our shop and you’ll find the best plants the earth has to offer.
              </p>
              <Link to ='/plants'><button>Shop plants</button></Link>
            </SectionTwo>
            <SectionFour>
              <DesignSubtitle>Design</DesignSubtitle>
              <p>
                When you come to the shop and purchase a plant and pot, we’ll
                pot it for you. We’ll also come to your home to design your
                space.
              </p>
              <Link to='/design'><button>Learn Design</button></Link>
            </SectionFour>
            <SectionThree>
              <ContainersSubtitle>Containers</ContainersSubtitle>
              <p>
                Your plants are only as good as their containers. We have
                containers unlike any you’ll find elsewhere. Come in and see.
              </p>
              <Link to='/containers'><button>Shop Containers</button></Link>
            </SectionThree>
          </article>
        </main>

        <Footer>
          <h3>Come Visit Us</h3>
        </Footer>
      </div>
    );
  }
}
export default Home;
