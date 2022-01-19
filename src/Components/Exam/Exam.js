import React, { useState , useEffect } from "react";
import axios from "axios";
import "./Exam.css";
import ReactHtmlParser from "react-html-parser";

const Exam = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [questions, setQuestions] = useState(null);

  const [selectedOptions, setSelectedOptions] = useState(() => {
    const saved = localStorage.getItem("savedOptions");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  const [divSelect, setdivSelect] = useState([false,false,false,false]);
  const [selectedOptions2, setSelectedOptions2] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [time,setTime] = useState(3600);
  const [fibanswer, setFibanswer] = useState("");
  const [submittedAnswers,setSubmittedAnswers] = useState(() => {
    const saved2 = localStorage.getItem("savedAnswer");
    const initialValue = JSON.parse(saved2);
    return initialValue || [];
  });
  
  const startTimer = () => {
    setInterval(() => {
      setTime(time => time - 1);
    }, 1000);
  }

  

  // useEffect(() => {
  //   if (time < 0) {
  //     handleSubmitButton();
  //   }
  //  }, [time]);

   useEffect(() => {
      const config = {
        url: "https://api.cc-recruitments.tech/exam-api/GetTime",
        method: "get",
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: true
    }

    axios(config)
    .then(function (response) {
      setTime(parseInt(response.data.time, 10));
      startTimer();
    })
    .catch(function (error) {
      console.log(error)
    });
   }, [])

  //  const handledivSelect = (index) => {
  //    setdivSelect();
  //  }

  const handleAnswerOption = (answer,id) => {
    // setSelectedOptions([
    //   (selectedOptions[currentQuestion] = { answertext: answer, qid:id }),
    // ]);
    // setSelectedOptions([...selectedOptions]);
    // let temp = fibanswer;
    // temp.push({answertext: answer, qid:id});
    // setFibanswer(temp);
    setSubmittedAnswers([
      (submittedAnswers[currentQuestion] = { answertext: answer, qid:id }),
    ]);
    setSubmittedAnswers([...submittedAnswers]);
  };

  const handleMCQAnswerOption = (answer,id) => {
    setSelectedOptions([
      (selectedOptions[currentQuestion] = { answer: answer, qid:id }),
    ]);
    setSelectedOptions([...selectedOptions]);
  };

  const handlePrevious = () => {
    const prevQues = currentQuestion - 1;
    prevQues >= 0 && setCurrentQuestion(prevQues);
    setFibanswer(submittedAnswers[prevQues].answertext ? submittedAnswers[prevQues].answertext : "");
  };

  const handleNext = () => {
    setFibanswer("");
    const nextQues = currentQuestion + 1;
    nextQues < questions.length && setCurrentQuestion(nextQues);
    setFibanswer(submittedAnswers[nextQues].answertext ? submittedAnswers[nextQues].answertext : "");
  };

  const handleSubmitConfirmation = () => {
    if (window.confirm('Do you want to submit?')) {
           handleSubmitButton();
       } else {
            // Do nothing!
       }
  }

  const handleSubmitButton = () => {
    setSubmitted(true);
    let answers = [...selectedOptions, ...submittedAnswers];
    answers = answers.filter(function( element ) {
    return element !== undefined;
    });
    
    var config = {
        method: 'post',
        url: 'https://api.cc-recruitments.tech/exam-api/PostAnswers',
        headers: { 
          'content-type': 'application/json',
          'X-CSRFToken': props.person.csrf
        },
        data: answers,
        withCredentials: true
        };
        
      axios(config)
      .then(function (response) {
        
      }).catch(function (error) {
        window.alert("Something went wrong, please try again");
        console.log(error);
      });
    
  };

  const handleNavigation = (e) => {
    setCurrentQuestion(e);
  }

  useEffect(() => {
    setSelectedOptions2(selectedOptions)
    localStorage.setItem("savedOptions", JSON.stringify(selectedOptions));
  }, [selectedOptions])

  useEffect(() => {
    localStorage.setItem("savedAnswer", JSON.stringify(submittedAnswers));
  }, [submittedAnswers])

  useEffect(() => {
      const config = {
        url: "https://api.cc-recruitments.tech/exam-api/GetQuestions",
        method: "get",
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: true
    }

    axios(config).then(res => {
      if (!Array.isArray(res.data)) {
        console.log("error in fetching questions, please try again");
      } else {
          setQuestions(res.data);
      }
    }).catch(err => {
      console.log(err)
    });
  }, [])

  let toRender = <div className="text-center text-2xl mt-4 text-white">Loading Questions...</div>;

  if (questions !== null) {
    toRender = (
      <div className="z-10 flex px-2 md:px-5 justify-center items-center ExamComp text-white">
      
     {!submitted ?  (
        <div className="flex flex-col" style={{flexShrink:"12", alignItems:"center" , width: "100%"}}>
            <div className="master-ques">
                      <div className="timer"> Time left - {Math.floor(time / 60)} : {(time %60)/10 === 0 ? `0 ${time % 60}` : time % 60 } </div>
                          <div className="question-nav">
                            { questions.map((ques) => (  
                              <div className="question-nav-child">
                                { (selectedOptions2[ques.sno] == null && submittedAnswers[ques.sno] == null ) ? (<div className="opt1"><div onClick={() =>  handleNavigation(ques.sno)} className="cursor-pointer ques-num"> Q{ques.sno+1}</div></div>) : ( <div className="opt2"><div onClick={() =>  handleNavigation(ques.sno)} className="cursor-pointer ques-num"> Q{ques.sno+1}</div></div>) }
                            </div> ))}
                          </div>
                      <div > 
                        <div className="flex items-center mb-2 mt-2"><div className="opt11"></div> <p>Unanswered</p></div>
                        <div className="flex items-center mb-2 mt-2"><div className="opt12"></div> <p>Answered</p></div>  
                      </div>  
              </div>
          <div className={questions[currentQuestion].hint_text.length===0 ? "resources hidehint" : "resources"}>
                  <p>{questions[currentQuestion].hint_text}</p>
                  <br></br>
              {<p><a href={questions[currentQuestion].hint_link} target="_blank" className="text-blue-500">{questions[currentQuestion].hint_link==="" ? null : "Resource Link"}</a></p>}
                            </div>
        </div>      
                  ) : (<div></div>)}
      
      {submitted ? (
        <div> 
        <h1 className="text-3xl font-bold text-center text-white mt-10">
          Thank you for your participation, we will get in touch with you soon.
        </h1>
        </div>
      ) : (
        

        <div className="w-3/4 ques-panel" >
          
          <div className="flex flex-col items-start w-full p-4 md:p-10">
            <h4 className="mt-10 text-xl text-white font-bold">
              Question {currentQuestion + 1} of {questions.length}
            </h4>
           <div className="mt-4 text-xl md:text-2xl text-white font-bold">
                  <div className="unselectable">{ReactHtmlParser(questions[currentQuestion].qtxt)}</div>
                  { questions[currentQuestion]["question_file.url"] !== 'null'  ? (
                    <div className="optionDiv flex justify-around items-center m-2 p-4">
                      <img src={questions[currentQuestion]["question_file.url"]} />
                    </div>
                  ) : null}
            </div>
          </div>

          <div className="flex flex-col w-full">
            {questions[currentQuestion].is_blank ? (
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Enter your answer here..."
                  className="px-3 py-3 placeholder-blueGray-300 card text-blueGray-600 relative rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full text-white"
                  value={ submittedAnswers[currentQuestion] != null ? (submittedAnswers[currentQuestion].answertext) : (fibanswer)}
                  onChange={(e) => {
                    setFibanswer(e.target.value);
                    handleAnswerOption(e.target.value,questions[currentQuestion].id)
                  }}
                />
              </div>
            ) : (
              questions[currentQuestion].options.map((answer, index) => (
                <div
                  key={index}
                  className="flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer bg-white/5 border-white/10 rounded-xl"
                  >
                  <input
                    type="radio"
                    name={answer.text}
                    value={answer.text}
                    onChange={(e) => handleMCQAnswerOption(index,questions[currentQuestion].id)}
                    checked={(
                      selectedOptions[currentQuestion]
                        ? index ===
                          selectedOptions[currentQuestion].answer
                        : false)
                    }
                    className="w-6 h-6 card bg-black"
                  />
                  <p className="ml-6 text-white">{answer.text}</p>
                  {answer.file !== "null" ? (
                    <div className="optionDiv flex justify-around items-center m-2 p-4">
                      <img src={answer.file} alt="optionImage" />
                    </div>
                  ) : null}
                </div>
              ))
            )}
          </div>

          <div className="flex justify-between w-full mt-4 text-white mb-4">
            <button
              onClick={handlePrevious}
              className="w-1/2 m-1 py-3 text-xl button bg-black rounded-lg"
            >
              Previous
            </button>
            <button
              onClick={
                currentQuestion + 1 === questions.length
                  ? handleSubmitConfirmation
                  : handleNext
              }
              className="w-1/2 m-1 ml-10 text-xl py-3 button bg-black rounded-lg"
            >
              {currentQuestion + 1 === questions.length ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      )}
    </div>

    );
  }

  

  return toRender;
};

export default Exam;