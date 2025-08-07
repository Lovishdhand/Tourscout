import { useState } from "react";

import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Corousel from "./Components/Corousel";
import Album from "./Components/Album";
import UserCard from "./Components/UserCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      {/* <div style={{ height: '960vh', backgroundColor: '' }}> */}
      <div style={{ height: "200vh", backgroundColor: "orange" }}>
        <Corousel />
        <div
          style={{
            backgroundColor: "brown",
            height: "70vh",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              backgroundColor: "blue",
              height: "30vh",
            }}
          >
            <Album />
            <Album />
            <Album />
            <Album />
          </div>

          <div
            style={{
              backgroundColor: "yellow",
              height: "35vh",
              width: "44vw",
              display: "flex",
             flexDirection: "column"

            }}
          >
            <div
              style={{
                backgroundColor: "purple",
                height: "15vh",
                width: "44vw",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
            </div>
            <div
              style={{
                backgroundColor: "purple",
                height: "15vh",
                width: "44vw",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
