import React, { useState } from "react";
import Exam from "../../Components/Exam/Exam";
import Navbar from "../../Components/Navbar/Navbar";

import './Recruitment.css';

const Recruitment = () => {
  const [show, setShow] = useState(false);

  const showdataArray = () => {
    setShow(!show);
};
    
  return (
    <div>
    <div className="recruitmentDiv">
      {show ? <Exam /> : 
      <div className="flex flex-col items-center">
      <div className=" flex justify-center items-center">
        <div className=" h-64 w-56 mt-24 flex flex-col justify-around items-center recruitment-card">
          <div className="bg-red-600 h-24 w-24 rounded-full flex items-center justify-center recruitment-card-image" >
            
          </div>
          <h3 className="text-white">Please Log In Satvik</h3>
        </div>
      </div>
      <button
        className="p-10 mt-10 py-2 rounded-full bg-red-500 text-gray-100  focus:outline-none"
        onClick={showdataArray}
      >
        Start test
      </button>
      
    </div>
        }
    </div>
    </div>
  );
};

export default Recruitment;
