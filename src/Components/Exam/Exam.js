import React, { useState , useEffect } from "react";
import questions from "./questions.json";
import axios from "axios";
import "./Exam.css";

const Exam = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedOptions, setSelectedOptions] = useState(() => {
    const saved = localStorage.getItem("savedOptions");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  const [selectedOptions2, setSelectedOptions2] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [time,setTime] = useState(134);
  const [fibanswer, setFibanswer] = useState("");
  const [submittedAnswers,setSubmittedAnswers] = useState(() => {
    const saved2 = localStorage.getItem("savedAnswer");
    const initialValue = JSON.parse(saved2);
    return initialValue || [];
});

// useEffect(() => {
  
// }, [time])

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
    const nextQues = currentQuestion + 1;
    nextQues < questions.length && setCurrentQuestion(nextQues);
    setFibanswer(submittedAnswers[nextQues].answertext ? submittedAnswers[nextQues].answertext : "");
  };

  const handleSubmitButton = () => {
    setSubmitted(true);
    console.log(selectedOptions);
    console.log(selectedOptions2);
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

  return (
    <div className="z-10 flex px-5 justify-center items-center ExamComp">
      
     {!submitted ?  (
        <div className="flex flex-col" style={{flexShrink:"12", alignItems:"center"}}>
            <div className="master-ques">
                      <div className="timer"> Time left {Math.floor(time / 60)} : {time % 60} </div>
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
              <div className="resources"> 
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
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
          
          <div className="flex flex-col items-start w-full p-10">
            <h4 className="mt-10 text-xl text-white font-bold">
              Question {currentQuestion + 1} of {questions.length}
            </h4>
            <div className="mt-4 text-2xl text-white font-bold">
              {questions[currentQuestion].qtxt}
            </div>
          </div>

          <div className="flex flex-col w-full">
            {questions[currentQuestion].is_blank ? (
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Enter your answer here..."
                  className="px-3 py-3 placeholder-blueGray-300 card text-blueGray-600 relative text-black rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
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
                    checked={
                      selectedOptions[currentQuestion]
                        ? index ===
                          selectedOptions[currentQuestion].answer
                        : false
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

          <div className="flex justify-between w-full mt-4 text-white">
            <button
              onClick={handlePrevious}
              className="w-1/2 m-1 py-3 text-xl button bg-black rounded-lg"
            >
              Previous
            </button>
            <button
              onClick={
                currentQuestion + 1 === questions.length
                  ? handleSubmitButton
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
};

export default Exam;