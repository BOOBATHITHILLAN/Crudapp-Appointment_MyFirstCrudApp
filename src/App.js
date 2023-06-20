import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
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
import AppointmentId from "./Components/AppointmentId";


function App() {
  const [create, setCreate] = useState([
    {
      Id: 1,
      ToMeet: "Boobathi",
      Date: "2023-07-09",
      Time: "10:00",
      Purpose: "Medical Checkup",
    },
    {
      Id: 2,
      ToMeet: "Thillan",
      Date: "2023-07-20",
      Time: "11:00",
      Purpose: "Friends meeting",
    },
  ]);

  return (
    <div className="App container">
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
          <Route path="/" element={<Home />} />
          <Route
            path="/Create-Appointment/:id"
            element={<AppointmentId create={create} />}
          />
          <Route
            path="/Create-Appointment/"
            element={
              <CreateAppointment create={create} setCreate={setCreate} />
            }
          />
          <Route
            path="/Read-Appointment/:id"
            element={<AppointmentId create={create} />}
          />
          <Route
            path="/Read-Appointment"
            element={<ReadAppointment create={create} />}
          />

          <Route
            path="/Update-Appointment"
            element={
              <UpdateAppointment create={create} setCreate={setCreate} />
            }
          />
          <Route
            path="/Update-Appointment/:id"
            element={<AppointmentId create={create} setCreate={setCreate} />}
          />
          <Route
            path="/Delete-Appointment"
            element={
              <DeleteAppointment create={create} setCreate={setCreate} />
            }
          />
          <Route
            path="/Delete-Appointment/:id"
            element={<AppointmentId create={create} setCreate={setCreate} />}
          />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
