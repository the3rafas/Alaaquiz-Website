import { useState } from "react";
import { useDispatch } from "react-redux";
import { increaseScore } from "../../redux/features/login/loginSlice";
import "./quizForm.css";

const QuizItem = (props) => {
  const [answer, setAnswer] = useState();
  const [submit, setSubmit] = useState(true);

  const dispatch = useDispatch();

  const handelClick = (e) => {
    setAnswer(e.target.value);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    if (props.answer === answer) {
      dispatch(increaseScore);
    }

    setSubmit(false);
  };

  console.log( typeof props.answer4);
  return (
    <div className="quizItem">
      <h2>{props.question}</h2>
      {props.answer1 && (
        <>
          <input
            type="radio"
            name="answer"
            onClick={handelClick}
            value={props.answer1}
          />
          <label htmlFor={props.answer1}> {props.answer1}</label>
          <br />
        </>
      )}
      {props.answer2 && (
        <>
          <input
            type="radio"
            name="answer"
            onClick={handelClick}
            value={props.answer2}
          />
          <label htmlFor={props.answer2}> {props.answer2}</label>
          <br />
        </>
      )}
      {props.answer3 && (
        <>
          <input
            type="radio"
            name="answer"
            onClick={handelClick}
            value={props.answer3}
          />
          <label htmlFor={props.answer3}> {props.answer3}</label>
          <br />
        </>
      )}
      {props.answer4 && (
        <>
          <input
            type="radio"
            name="answer"
            onClick={handelClick}
            value={props.answer4}
          />
          <label htmlFor={props.answer4}> {props.answer4}</label>
          <br />
        </>
      )}
      {submit && (
        <input type="submit" dir="rtl" onClick={handelSubmit} value="add" />
      )}
    </div>
  );
};

export default QuizItem;
