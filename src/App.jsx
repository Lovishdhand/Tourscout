import { useState, createContext, useContext, useEffect } from "react";

import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Corousel from "./Components/Corousel";
import Album from "./Components/Album";
import UserCard from "./Components/UserCard";
import Modal from "./Components/Modal";

export const UserContext = createContext();

function App() {
  // alert(useContext);
  const [openModal, setOpenModal] = useState(false);
  // console.log(openModal);
  const [userdetails, setUserDetails] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    async function fetchuserdetails() {
      try {
        let response = await fetch(
          `https://jsonplaceholder.typicode.com/users`
        );
        // console.log(response);

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        let data = await response.json();
        // console.log(data);

        setUserDetails(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchuserdetails();

    async function fetchalbums() {
      try {
        let response = await fetch(
          `https://jsonplaceholder.typicode.com/albums`
        );
        // console.log(response);

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        let data = await response.json();
        // console.log(data);

        setAlbums(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchalbums();
  }, []);
  useEffect(() => {
    console.log(albums.slice(0, 100));
  });
    const filteredAlbums = selectedUser
    ? albums.filter(album => album.userId === selectedUser.id).slice(0, 4)
    : [];
  return (
    <>
      <UserContext.Provider
        value={{ setOpenModal, selectedUser, setSelectedUser }}
      >
        <Header />
        {openModal && <Modal />}
        {/* <div style={{ height: '960vh', backgroundColor: '' }}> */}
        <div
          style={{
            height: "200vh",
            filter: openModal && "blur(10px)",
            backgroundColor: "orange",
          }}
        >
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
             {(selectedUser 
  ? albums.filter(album => album.userId === selectedUser.id) 
  : albums.slice(0, 4) 
).slice(0,4).map((albumdetails) => (
    <Album key={albumdetails.id} album={albumdetails} />
))}
              {/* <Album />
              <Album />
              <Album />
              <Album /> */}
            </div>

            <div
              style={{
                backgroundColor: "yellow",
                height: "35vh",
                width: "44vw",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {userdetails.map((_, index) => {
                if (index % 5 !== 0) {
                  return null;
                }
                return (
                  <div
                    key={index}
                    style={{
                      backgroundColor: "purple",
                      height: "20vh",
                      width: "50vw",
                      display: "flex",
                      justifyContent: "space-evenly",
                    }}
                  >
                    {userdetails.slice(index, index + 5).map((user) => (
                      <UserCard key={user.id} user={user} />
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;
