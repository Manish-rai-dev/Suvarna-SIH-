import React from "react";
import "./Home.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import Sidebar from "./Sidebar";
import ecg from "./images/ecg.svg";
import report from "./images/report.svg";
import stomach from "./images/stomach.svg";
const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
    
   

<div className="cardcontainer">
<div className=" text-center">
        Hello Welcome <br />
        {user && user.email}
      </div>


    <div className="card1">
    <h3>Prescription</h3>
    <img src={stomach} alt="stomach"className="imghome"  />
    </div>

<div className="card2">
<h3>Reports</h3>
<img src={ecg} alt="ecg " className="imghome" />
</div>
<div className="card3">
<h3>Medical History</h3>
<img src={report} alt="rport" className="imghome" />
</div>
</div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Home;