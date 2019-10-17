import React from 'react';
import './DoingQuiz.scss';
import QuestionShow from '../DoingQuiz/QuestionShow/QuestionShow';

class DoingQuiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            QuizList: [
                {
                    questionId: 1,
                    questionTime: 3,
                    questionContent: "Laugh What ?",
                    questionChoices: [
                        {choice:"Haha", isTrue: 1},  {choice:"Hehe", isTrue:0},  {choice:"Hoh0", isTrue: 0},  {choice:"Hihi", isTrue: 0}
                    ]
                },
                {
                    questionId: 2,
                    questionTime: 1,
                    questionContent: "Laugh Who ?",
                    questionChoices: [
                        {choice:"Haha", isTrue: 1},  {choice:"Hehe", isTrue:0},  {choice:"Hoh0", isTrue: 0},  {choice:"Hihi", isTrue: 0}
                    ]
                },
                {
                    questionId: 3,
                    questionTime: 2,
                    questionContent: "Laugh Who ?",
                    questionChoices: [
                        {choice:"Haha", isTrue: 1},  {choice:"Hehe", isTrue:0},  {choice:"Hoh0", isTrue: 0},  {choice:"Hihi", isTrue: 0}
                    ]
                },
                {
                    questionId: 4,
                    questionTime: 2,
                    questionContent: "Laugh Who ?",
                    questionChoices: [
                        {choice:"Haha", isTrue: 1},  {choice:"Hehe", isTrue:0},  {choice:"Hoh0", isTrue: 0},  {choice:"Hihi", isTrue: 0}
                    ]
                },
            ],
            count: 0,
            isDone: false,
        }
    }

    createQuestion() {
        for (let i = 0; i < this.state.QuizList.length; i++) {
            setTimeout(() => {
                if (this.state.count < this.state.QuizList.length - 1 && this.state.isDone === false) {
                    this.setState({
                        count: this.state.count + 1,
                    })
                }
                else{
                    this.setState({
                        isDone: true,
                    })
                }
            }, this.state.QuizList[this.state.count].questionTime * 1000 + 300);

            if(this.state.isDone === true)
                return <div>Done</div>
            return <QuestionShow key={this.state.count} question={this.state.QuizList[this.state.count]} />
        }
    }

    render() {

        let questions = this.createQuestion();
        return (
            <div className="doing-quiz-container">
                {questions}
            </div>
        );
    }
}

export default DoingQuiz;