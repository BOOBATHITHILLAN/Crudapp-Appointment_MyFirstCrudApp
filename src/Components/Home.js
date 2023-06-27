import { Link } from "react-router-dom";

// import { useState } from "react";
export function Home() {

  let ID=1;
  
  return (
    <div className="bg-primary bg-gradient">
      <div className="p-3">
        <Link className=" active btn btn-dark btn-lg" to="/Create-Appointment">
          Create-Appointment
        </Link>
      </div>
      <div className="p-3">
        <Link className="active btn btn-dark btn-lg" to="/Read-Appointment">
          Read-Appointment
        </Link>
      </div>
      <div className="p-3">
        <Link className="active btn btn-dark btn-lg" to={`/Read-Appointment/${ID}`}>
          Read-Appointment-id
        </Link>
      </div>
      <div className="p-3">
        <Link className="active btn btn-dark btn-lg" to="/Update-Appointment">
          Update-Appointment
        </Link>
      </div>
      <div className="p-3">
        <Link className="active btn btn-dark btn-lg" to="/Delete-Appointment">
          Delete-Appointment
        </Link>
      </div>
      <div className="p-3">
        <Link className="active btn btn-dark btn-lg" to="/About">
          About
        </Link>
      </div>
    </div>
  );
}
