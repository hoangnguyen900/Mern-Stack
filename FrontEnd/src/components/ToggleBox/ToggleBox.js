import React from 'react';
import './ToggleBox.scss';

class ToggleBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleState: false,
            isCheck: false
        }
    }
    

    handleCheckBox = (event) => {
        this.setState({
            isChecked: !this.state.isChecked
        })
        console.log(this.state);
    }
    toggle = () => {
        this.setState({
            toggleState: !this.state.toggleState,
        })
    }
    render() {
        // const [isChecked, setIsChecked] = useState(true);
        return (
            <div>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
            </div >
        );
    }
}

export default ToggleBox;
