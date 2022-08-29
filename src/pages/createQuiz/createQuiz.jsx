import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import classes from "./createQuiz.module.css";


const CreateQuiz = () => {
  const [link, setLink] = useState("");
  const [time, setTime] = useState("");
  const [grade, setGrade] = useState("");
  const [massage, setMassage] = useState("");

  const users = useSelector((state) => state.login.login);

  const handelLinkChange = (e) => {
    setLink(e.target.value);
  };
  const handeTimeChange = (e) => {
    setTime(e.target.value);
  };
  const handeSelect = (e) => {
    setGrade(e.target.value);
  };
  const handelMassage = (e) => {
    setMassage(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    setMassage("");
    const data = {
      teacherID: users.userId,
      link,
      time,
      grade,
    };
    console.log(data);
    if (true) {
      setMassage("Quiz added successfully");
      setLink("");
      setTime("");
      setGrade("");
    }
  };

  return (
    <div className={classes.quiz} onSubmit={handelSubmit}>
      {massage && (
        <div className={classes.alert} onClick={handelMassage}>
          {" "}
          {massage}
        </div>
      )}
      <form className={classes.quizForm} method="get">
        <label htmlFor="form link" dir="rtl">
          لينك الإمتحان :{" "}
        </label>
        <input
          type="text"
          value={link}
          name="quiz"
          onChange={handelLinkChange}
        />
        <label htmlFor="form link" dir="rtl">
          الوقت (دقيقة) :{" "}
        </label>
        <input
          type="number"
          name="timer"
          value={time}
          max="40"
          required
          onChange={handeTimeChange}
        />
        <label htmlFor="form link" dir="rtl">
          السنة الدراسية :{" "}
        </label>
        <select value={grade} name="grade" onChange={handeSelect}>
          <option value="1ع">الصف الأول الإعدادي</option>
          <option value="2ع"> الصف الثاني الإعدادي</option>
          <option value="3ع"> الصف الثالث الإعدادي</option>
          <option value="1ث"> الصف الأول الثانوي</option>
          <option value="2ث"> الصف الثاني الثانوي</option>
        </select>
        <input type="submit" name="quiz" />
      </form>

      <div className={classes.quizList}>
      {users.quiz ? (
        users.quiz.map((e) => {
          <div className={classes.quizItem}>{e.grade}</div>;
        })
      ) : 
       " .... empty"
      }
      </div>
      
    </div>
  );
};
export default CreateQuiz;
