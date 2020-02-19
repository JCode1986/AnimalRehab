import React from "react";

class AnimalInCare extends React.Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     updating: false,
        //     updateInput: '',
        // };
    }

    // handleUpdateInput = (e) => {
    //     this.setState({updateInput: e.target.value})
    // }

    // handleSubmit = () => {
    //     this.props.updateAnimal(this.state.updateInput);
    //     this.setState({updateInput: '', updating: false});
    // }

    render() {
        let { updating, updateInput } = this.state;
        let { animal, removeAnimal, index } = this.props;
        return (
            <>
                {!updating &&
                    <li className="animals" onClick={() => console.log('hello')}>
                        <p>{animal.name}: {animal.date} {animal.time}</p>
                        {<button id="delete"onClick={() => removeAnimal(index)}>Delete</button>}
                        {<button id="update"onClick={() => this.setState({updating: true})}>Update</button>}
                    </li>
                }
                {updating &&
                    <li className="animalsUpdate">
                        <input value={updateInput} onChange={this.handleUpdateInput}/>
                        {<button id="update"onClick={this.handleSubmit}>Update</button>}
                    </li>
                }
            </>
        )
    }
}

export default AnimalInCare;