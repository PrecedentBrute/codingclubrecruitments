import React, { useState , useEffect } from "react";
import questions from "./questions.json";
import "./Exam.css";

const Exam = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedOptions2, setSelectedOptions2] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [fibanswer, setFibanswer] = useState("");
  const [submittedAnswers,setSubmittedAnswers] = useState([]);

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
  }, [selectedOptions])


  return (
    <div className="z-10 flex px-5 justify-center items-center ExamComp">
      
     {!submitted ?  (<div className="question-nav">
                        { questions.map((ques) => (
                          
                          <div className="question-nav-child">
                          <div onClick={() =>  handleNavigation(ques.sno)} className="cursor-pointer"> {ques.qtxt} </div>
                          
                          { (selectedOptions2[ques.sno] == null && submittedAnswers[ques.sno] == null ) ? (<div className="opt1"></div>) : ( <div className="opt2"></div>) }
                          </div> 

                        ))
                        }
                  </div>) : (<div></div>)}
      
      {submitted ? (
        <div> 
        <h1 className="text-3xl font-bold text-center text-white mt-10">
          Thank you for your participation, we will get in touch with you soon.
        </h1>
        </div>
      ) : (
        

        <div className="w-3/4">
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
                  value={fibanswer}
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