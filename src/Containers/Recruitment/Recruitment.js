import React, { useState } from "react";
import Exam from "../../Components/Exam/Exam";
import Fade from 'react-reveal/Fade';
import './Recruitment.css';

const Recruitment = (props) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };
  
  let buttonClass = "p-10 mt-10 py-2 rounded-full bg-red-500 text-gray-100 focus:outline-none hover:bg-red-600";
  if (!props.loggedIn) {
    buttonClass += " cursor-not-allowed opacity-50 disabledButton";
  }
      
  return (
    <div>
    <div className="recruitmentDiv rounded-lg">
        {show ? <Exam person={props.person}/> : ( 
      <div className="flex flex-col items-center">
      <Fade top>
      <div className=" flex justify-center items-center">
        <div className=" h-64 w-56 mt-24 flex flex-col justify-around items-center recruitment-card">
          <div className="bg-red-600 h-24 w-24 rounded-full flex items-center justify-center recruitment-card-image" >
            
          </div>
                  <h3 className="text-white text-center p-2">{"Test will start on Sunday, 30th Jan 2022 at 8:30 PM"}</h3>
        </div>
      </div>
      
              {/*<button
        className={buttonClass}
              onClick={toggleShow}
              disabled={!props.loggedIn}
      >
        {(props.person && props.person.time<3600) ? "Resume Test" : "Start Test"}
      </button>*/}
              
                
              <button className={`${buttonClass} + disabledButton`} disabled={true}>
                Start Test
              </button>
      </Fade>
      
    </div>) 
        }
    </div>
    </div>
  );
};

export default Recruitment;
