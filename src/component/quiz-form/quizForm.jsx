import QuizItem from "./quizItem";
import './quizForm.css'

const dummyData = [
  { lable: "question 1", q1: "a", q2: "b", q3: "c", q4: "", answer: "a" },
  { lable: "question 2", q1: "a", q2: "b", q3: "c", q4: "d", answer: "b" },
  { lable: "question 2", q1: "a", q2: "b", q3: "c", q4: "d", answer: "b" },
  { lable: "question 2", q1: "a", q2: "b", q3: "c", q4: "d", answer: "b" },
  { lable: "question 2", q1: "a", q2: "b", q3: "c", q4: "d", answer: "b" },
  { lable: "question 2", q1: "a", q2: "b", q3: "c", q4: "d", answer: "b" },
  { lable: "question 2", q1: "a", q2: "b", q3: "c", q4: "d", answer: "b" },
  { lable: "question 2", q1: "a", q2: "b", q3: "c", q4: "d", answer: "b" },


];
const QuizForm = () => {
  return (
    <form>
      {dummyData.map((e) => {
        return(
        <QuizItem
          key={e.lable}
          answer={e.answer}
          question={e.lable}
          answer1={e.q1}
          answer2={e.q2}
          answer3={e.q3}
          answer4={e.q4}
        />
        )
      })}
    </form>
  );
};

export default QuizForm;
