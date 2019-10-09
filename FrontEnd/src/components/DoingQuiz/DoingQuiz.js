import React from 'react';
import './DoingQuiz.scss';
import QuestionShow from '../DoingQuiz/QuestionShow/QuestionShow';
var count = 0;
class DoingQuiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            QuizList: [
                {
                    questionId: 1,
                    questionTime: 2,
                    questionContent: "Laugh What ?",
                    questionChoices: [
                        "Haha", "Hehe", "HoHo", "Hihi"
                    ]
                },
                {
                    questionId: 2,
                    questionTime: 1,
                    questionContent: "Laugh Who ?",
                    questionChoices: [
                        "Haha", "Hehe", "HoHo", "Hihi"
                    ]
                },
                {
                    questionId: 3,
                    questionTime: 2,
                    questionContent: "Laugh Who ?",
                    questionChoices: [
                        "Haha", "Hehe", "HoHo", "Hihi"
                    ]
                },
                {
                    questionId: 4,
                    questionTime: 2,
                    questionContent: "Laugh Who ?",
                    questionChoices: [
                        "Haha", "Hehe", "HoHo", "Hihi"
                    ]
                },
            ],
            count: 0,
            isDone: false,
        }
    }
    // componentDidMount() {
    //     this.timer = setInterval(() => {

    //         if (count < this.state.QuizList.length - 1 && this.state.isDone === false) {
    //             count = count + 1;
    //         }

    //     }, this.state.QuizList[count].questionTime * 1000);

    //     if (count === this.state.QuizList.length - 1) {
    //         this.setState({
    //             isDone: true,
    //         })
    //     }
    //     console.log(this.state.isDone)
    // }

    componentDidMount() {
        this.timer = setTimeout(() => {

            if (this.state.count < this.state.QuizList.length - 1 && this.state.isDone === false) {

                count = count + 1
                this.setState({
                    count: count,
                })
            }
        },
            this.state.QuizList[this.state.count].questionTime * 1000
        )
    }

    
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div className="doing-quiz-container">
                <QuestionShow key={this.state.count} question={this.state.QuizList[this.state.count]} />
            </div>
        );
    }
}

export default DoingQuiz;