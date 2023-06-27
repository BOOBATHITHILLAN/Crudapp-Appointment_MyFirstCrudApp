import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";


let Data=[
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
      {
        Id: 3,
        ToMeet: "Saravanan",
        Date: "2023-07-21",
        Time: "11:00",
        Purpose: "Friends meeting",
      },
]




ReactDOM.createRoot(document.getElementById("root")).render(<App Data={Data}/>);
