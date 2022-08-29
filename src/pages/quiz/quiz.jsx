import React, { useState } from "react";
import "./quiz.css";
import MyTimer from "../../component/timer/timer";
import Button from "@mui/material/Button";
import { buttonFormStyle } from "../../styles";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import QuizForm from "../../component/quiz-form/quizForm";

const Quiz = () => {
  const navigate = useNavigate();
  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);
  const score = useSelector((state) => state.login.score);

  const time = new Date();
  time.setSeconds(time.getSeconds() + 900); // 10 minutes timer
  return (
    <div>
      {start ? (
        <>
          {end ? (
            <div className="d-flex">
              <p classNmae="quizMassage">
                شكرا تم الانتهاء من الامتحان درجات هي{" "}
              </p>
              <p classNmae="quizMassage">{score} </p>

              <Button
                variant="contained"
                size="large"
                sx={{ ...buttonFormStyle, height: "50px", width: "200px" }}
                onClick={() => navigate("/home")}
              >
                العودة للقائمة الرئيسية
              </Button>
            </div>
          ) : (
            <>
              <MyTimer expiryTimestamp={time} />
              {start && <QuizForm />}
              <div className="center">
                <Button
                  variant="contained"
                  size="large"
                  sx={{ ...buttonFormStyle, height: "50px", width: "200px" }}
                  onClick={() => setEnd(true)}
                >
                  انهاء الامتحان
                </Button>
              </div>
            </>
          )}
        </>
      ) : (
        <div className="d-flex">
          <Button
            variant="contained"
            size="large"
            sx={{ ...buttonFormStyle, height: "50px", width: "200px" }}
            onClick={() => setStart(true)}
          >
            بدأ الامتحان
          </Button>
        </div>
      )}
    </div>
  );
};
export default Quiz;
