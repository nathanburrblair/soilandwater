import React, { Component } from "react";
import "./Home.css";
import styled from "styled-components";
import plantsbg from "../../images/plantsbg.jpg";
import containerbg from "../../images/containerbgdr.jpg";
import designbg from "../../images/designbg1.jpg";
import { Link } from "react-router-dom";

const Title = styled.h1`
  font-size: 48px;
  font-family: "Krona One", sans-serif;
  color: #353535;
  margin-top: 80px;
  z-index: 3;

  @media (max-width: 500px) {
    font-size: 34px;
  }

  @media (min-width: 1000px) {
    margin: 60% 0 50% 0;
    color: #f2f2f2;
  }
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

const SectionTwoContainer = styled.section`
  display: flex;
  justify-content: space-between;
`;

const SectionTwoEmpty = styled.section`
  background-color: #282828;
  height: 50vh;
  padding: 60px 0 60px 0;

  @media (min-width: 768px) {
    width: 50%;
  }
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

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const SectionThreeContainer = styled.section`
  display: flex;
  justify-content: space-between;
`;

const SectionThreeEmpty = styled.section`
  background-color: #161616;
  height: 50vh;
  padding: 60px 0 60px 0;

  @media (min-width: 768px) {
    width: 50%;
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

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const SectionFourContainer = styled.section`
  display: flex;
  justify-content: space-between;
`;

const SectionFourEmpty = styled.section`
  background-color: #bcb7bc;
  height: 50vh;
  padding: 60px 0 60px 0;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const SectionFour = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${designbg});
  background-position: center;
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

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const Button = styled.button`
  width: auto;
  height: 50px;
  font-family: "Krona One", sans-serif;
  font-size: 18px;
  text-transform: uppercase;
  background-color: #f2f2f2;
  color: #353535;
  border: none;
  padding: 0 16px 0 16px;

  :hover {
    background-color: #979696;
    cursor: pointer;
  }

  :active {
    transform: scale(1.1);
    outline: 0;
  }

  :focus {
    outline: 0;
  }
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
      <div id="master_container">
        <main>
          <article>
            <div id="soilWater">
              <div id="layer" />
              <div />
              <Title>
                SOIL + WATER <br />
                Plant Co.
              </Title>
            </div>
            <SectionTwoContainer>
              <SectionTwo>
                <PlantsSubtitle>Plants</PlantsSubtitle>
                <p>
                  We’ve scoured the globe to find the best of the best. Come to
                  our shop and you’ll find the best plants the earth has to
                  offer.
                </p>
                <Link to="/plants">
                  <Button>Shop plants</Button>
                </Link>
              </SectionTwo>
              <SectionTwoEmpty />
            </SectionTwoContainer>

            <SectionFourContainer>
              <SectionFourEmpty />
              <SectionFour>
                <DesignSubtitle>Design</DesignSubtitle>
                <p>
                  When you come to the shop and purchase a plant and pot, we’ll
                  pot it for you. We’ll also come to your home to design your
                  space.
                </p>
                <Link to="/design">
                  <Button>Learn Design</Button>
                </Link>
              </SectionFour>
            </SectionFourContainer>
            <SectionThreeContainer>
              <SectionThree>
                <ContainersSubtitle>Containers</ContainersSubtitle>
                <p>
                  Your plants are only as good as their containers. We have
                  containers unlike any you’ll find elsewhere. Come in and see.
                </p>
                <Link to="/containers">
                  <Button>Shop Containers</Button>
                </Link>
              </SectionThree>
              <SectionThreeEmpty />
            </SectionThreeContainer>
          </article>
        </main>
      </div>
    );
  }
}
export default Home;
