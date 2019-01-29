import React, { Component } from "react";
import "./Home.css";
import styled from "styled-components";
import plantsbg from "../../images/plantsbg.jpg";
import containerbg from "../../images/containerbgdr.jpg";
import designbg from "../../images/designbg1.jpg";
import fb from "../../images/facebook-logo.svg";
import insta from "../../images/instagram.svg";
import twitter from "../../images/twitter.svg";
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

const HomeFooter = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  height: 300px;
  width: 100%;
  background-color: #171717;
  color: #f2f2f2;
  position: absolute;
  bottom: 0;
  padding-top: 60px;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    padding-bottom: 60px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0 0 0 10%;

  @media (max-width: 500px) {
    padding: 0;
    text-align: center;
  }
`;

const Social = styled.div`
  display: flex;
  padding: 0 10% 0 0;

  img {
    height: 30px;
    width: 30px;
    padding: 24px 10px 10px 10px;
  }

  @media (max-width: 500px) {
    padding: 0;
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

        <HomeFooter>
          <ContactInfo>
            <h3>SOIL & WATER</h3>
            <p>
              123 Main St.
              <br />
              Anytown, USA
              <br />
              87654
            </p>
            <p>(987) 654-3210</p>
          </ContactInfo>
          <Social>
            <img src={fb} alt="" />
            <img src={insta} alt="" />
            <img src={twitter} alt="" />
          </Social>
        </HomeFooter>
      </div>
    );
  }
}
export default Home;
