import React, { useState } from 'react'
import './quiz.css'
import { connect } from 'react-redux'


function Quiz({ questions }) {
    const [selected, setSelected] = useState('')
    const [num, setNum] = useState(0)
    const [total, setTotal] = useState(0)
    const [result, setResult] = useState(true)


    const NextBtn = (correct) => {
        if (selected !== '') {
            if (correct === selected) {
                setTotal(total + 1)
            }
            setNum(num + 1)
            setSelected('')
        }
        else {
            alert('select option')
        }

    }

    const CheckResult = (correct) => {
        if (selected !== '') {
            if (correct === selected) {
                setTotal(total + 1)
            }
            setResult(false)
        }
        else {
            alert('select option')
        }

    }
    const Restart = ( ) =>{
        setNum(0)
        setTotal(0)
        setResult(true)
        setSelected('')
    }

    return (
        <div className={'quiz'}>
            <h1>Quiz App</h1>
            <div style={{ display: `${result ? 'block' : 'none'}` }}>
                <h2>Question {num + 1} :</h2>
                <p style={{ marginTop: '-10px' }}>{questions[num].question} </p>
                <hr />
                <div className='options'>
                    <div onClick={() => setSelected('a')} className={selected === 'a' ? 'selected' : null}>a) {questions[num].options.a}</div>
                    <div onClick={() => setSelected('b')} className={selected === 'b' ? 'selected' : null}>b) {questions[num].options.b}</div>
                    <div onClick={() => setSelected('c')} className={selected === 'c' ? 'selected' : null}>c) {questions[num].options.c}</div>
                </div>
                <hr />
                <button className='next' onClick={() => NextBtn(questions[num].correct)} style={{ display: `${num === questions.length - 1 ? 'none' : 'block'} ` }}>Next</button>
                <button className='next' onClick={() => CheckResult(questions[num].correct)} style={{ display: `${num === questions.length - 1 ? 'block' : 'none'} ` }}>Check Result</button>
            </div>
            <div style={{color:'white',display:`${result?'none':'block'}`}}>
                <h1>Result</h1>
                <h3>Total Questions : {questions.length}</h3>
                <h3>Correct Answers : {total}</h3>
                <h3>Percentage : {total * 100 / questions.length}%</h3>
                <h3>Status : {`${total * 100 / questions.length < 50 ? 'fail' : 'pass'}`}</h3>
                <hr/>
                <button className='next' onClick={() => Restart()} style={{ display: `${num === questions.length - 1 ? 'block' : 'none'} ` }}>Restart</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        questions: state.questions
    }
}



export default connect(mapStateToProps, null)(Quiz);
