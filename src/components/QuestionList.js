import React from "react";
import QuestionItem from "./QuestionItem"


function QuestionList({questions,setQuestions}) {

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((quiz)=>(<QuestionItem key={quiz.id} question={quiz} setQuestions={setQuestions}/>))}
      </ul>
    </section>
  );
}

export default QuestionList;