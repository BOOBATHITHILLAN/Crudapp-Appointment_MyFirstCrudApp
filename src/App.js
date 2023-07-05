import { Link, Route, BrowserRouter as Router, Routes, useParams } from "react-router-dom";
import "./App.css";
import { Home } from "./Components/Home";
import { useState } from "react";
import { About } from "./Components/About";
import { CreateAppointment } from "./Components/CreateAppointment";
import { ReadAppointment } from "./Components/ReadAppointment";
import { DeleteAppointment } from "./Components/DeleteAppointment";
import { UpdateAppointment } from "./Components/UpdateAppointment";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Error from "./Components/Error";
import Createid from "./Components/Createidsearch";

function App({Data}) {

  const{ID}=useParams();
  
  const [create, setCreate] = useState(Data);

  return (
    <div className="App container ">
      <Header text="CRUD APPLICATION" />

      <Router>
        <Navbar
          Link={Link}
          text1="Home"
          text2="Create-Appointment"
          text3="Read-Appointment"
          text4="Update-Appointment"
          text5="Delete-Appointment"
          text6="About"
        />

        <Routes>
          <Route path="/" element={<Home ID={ID} />} />

          <Route
            path="/Create-Appointment/"
            element={
              <CreateAppointment create={create} setCreate={setCreate} />
            }
          />         
          <Route
            path="/Read-Appointment/"
            element={<ReadAppointment create={create} />}
          />
          <Route
            path="/Read-Appointment/:ID"
            element={<Createid create={create} />}
          />

          <Route
            path="/Update-Appointment/"
            element={
              <UpdateAppointment create={create} setCreate={setCreate} />
            }
          />

          <Route
            path="/Delete-Appointment/"
            element={
              <DeleteAppointment create={create} setCreate={setCreate} />
            }
          />

          <Route path="/About" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
