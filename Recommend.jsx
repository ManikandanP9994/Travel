import React, { useState } from "react";
import styled from "styled-components";
import Destination1 from "../images/t-greece.jpg";
import Destination2 from "../images/t-maldives.jpg";
import Destination3 from "../images/t-mexico.jpg";
import Destination4 from "../images/t-newyork.jpg";
import Destination5 from "../images/t-paris.jpg";
import Destination6 from "../images/t-thailand.jpg";
import info1 from "../images/info1.jpg";
import info2 from "../images/info2.jpg";
import info3 from "../images/info3.jpg";

export default function Recommend() {
  const data = [
    {
      image: Destination1,
      title: "Greece",
      subTitle: "Greece is hands down one of the best countries to visit in Octtober in Europe.",
      cost: "2,00,000",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination2,
      title: "Maldives",
      subTitle: "Maldives is the jewel of Indian Ocean",
      cost: "1,75,000",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination3,
      title: "Mexico",
      subTitle: "The perfect blend of modern with ancient",
      cost: "2,00,000",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination4,
      title: "Newyork",
      subTitle: "Newyork is well-known for magnificent skyscrapers, Broadway shown and beautiful landmarks, making it the perfect destination.",
      cost: "2,80,000",
      duration: "Approx 1 night trip",
    },
    {
      image: Destination5,
      title: "Paris",
      subTitle: "Paris, France is one of the most loved cities to visit in the world",
      cost: "1,75,000",
      duration: "Approx 2 night 2 day trip",
    },
    {
      image: Destination6,
      title: "Thailand",
      subTitle: "Thailand is one of the top beach holiday destinations in the world",
      cost: "55,000",
      duration: "Approx 3 night 2 day trip",
    },
  ];

  const packages = [
    "The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];

  const [active, setActive] = useState(1);
  return (
    <Section id="recommend">
      <div className="title">
        <h2>Recommended Destinations</h2>
      </div>
      <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination">
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="info">
                <div className="services">
                  <img src={info1} alt="" />
                  <img src={info2} alt="" />
                  <img src={info3} alt="" />
                </div>
                <h4>{destination.cost}</h4>
              </div>
              <div className="distance">
                <span>1000 Kms</span>
                <span>{destination.duration}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;                                                                                                                                                