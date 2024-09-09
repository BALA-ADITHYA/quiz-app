import React, { useReducer, useState } from 'react'
import './Quiz.css'
import {data} from '../../assets/data';

const Quiz = () => {

    let [index, setIndex] =useState(0);
    let [question,setQuestion] =useState(data[index])
    let [lock,setLock] = useState(false);
    let [score,setScore] = useState(0)
    let option1 = useReducer(null);
    let option2 = useReducer(null);
    let option3 = useReducer(null);
    let option4 = useReducer(null);
    let [result,setResult] = useState(false)
    let option_array =[option1,option2,option3,option4];
    const checkAns = (e,ans) =>{
        if(lock===false){
            if(question.ans===ans) {
             e.target.classList.add("correct");
             setLock(true)
             setScore(prevalue => prevalue+1)
        }else{
            e.target.classList.add("wrong");
            setLock(true)
            option_array[question.ans-1].current.classList.add("correct")
        }
    }

    }

      const next = ()=> {
        if(lock===true){
          if(index === data.length -1){
            setResult(true)
            return 0;
          }else {
          setIndex(++index)
          setQuestion(data[index])
          setLock(false)
          option_array.map((option)=> {option.current.classList.remove("wrong");
            option.current.classList.remove("correct");

          })
        }
        }

      }
            const reset =()=> {
              setIndex(0)
              setQuestion(data[index])
              setScore(0)
              setResult(false)
              setLock(false)
            }
  return (
    <div className='container'>
      <h1>Quiz-App</h1>
      <hr />
      {result?<></>:<>
      <h2>{index+1}.{question.question}</h2>
      <ul>
        <li ref={option1} onClick={(e)=>checkAns(e,1)}>{question.option1}</li>
        <li ref={option2} onClick={(e)=>checkAns(e,2)}>{question.option2}</li>
        <li ref={option3} onClick={(e)=>{checkAns(e,3)}}>{question.option3}</li>
        <li ref={option4} onClick={(e)=>{checkAns(e,4)}}>{question.option4}</li>
      </ul>
      <button onClick={next}>Next</button>
      <div className="index">{index+1} of {data.length} Questions</div>
      </>}
     
      {result? <> <h2>You Scored {score} out of {data.length}</h2>
      <button onClick={reset}>Reset</button></>:<></>}
     
    </div>
  
  )
}

export default Quiz
