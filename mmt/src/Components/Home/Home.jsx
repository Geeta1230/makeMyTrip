import React, { useEffect, useContext } from "react";
// import { SimpleSlider } from "../../Components/SimpleSlider";
// import { CarousalUI } from "../../Components/CarousalUI";
// import { FlightsCard } from "../../Components/FlightsCard";
// import FlightHome from "../../Components/FlightHome";
import Qna from "../Mmt";
// import Details from "../../Hotels/Details"
import Footer from "../Qna";
// import styles from "./home.module.css";
// import { ListenerContext } from "../../Contexts/ListenerProvider";
import Mmt from "../Footer";

export const Home = () => {
  // const { setWidth } = useContext(ListenerContext)

  // useEffect(() => {
  //   window.addEventListener('resize', reportWindowSize)
  //   return () => {
  //     window.removeEventListener('resize', reportWindowSize)
  //   }
  // }, [])

  // const reportWindowSize = () => {
  //   setWidth(window.innerWidth)
  // }
  return (
    <>
      {/* <FlightHome /> */}
      {/* <div className={styles.container} style={{ boxSizing: 'border-box' }}>
       
       <SimpleSlider />
       <div style={{ marginTop: 50 }}>
       <CarousalUI />
       </div>
       <div className={styles.poster}>
       <img
            src="https://mmt.servedbyadbutler.com/getad.img/;libID=3405582"
            style={{ width: "100%", height: "80%" }}
          />
        </div>
        <div style={{ marginTop: 50 }}>
        <FlightsCard />
        </div>
        <div style={{ marginTop: 50 }}>
          <Details />
          </div>
        </div> */}
      <Qna />
      {/* <br /> */}
      <Footer />
      <Mmt />
    </>
  );
};
