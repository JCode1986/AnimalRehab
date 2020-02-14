import React from "react";

class AnimalProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logDetail: '',
    }

    this.logChangeHandler = this.logChangeHandler.bind(this);
    this.stateDefault=this.stateDefault.bind(this);
  }

  logChangeHandler(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  stateDefault(event){
    event.preventDefault()
    this.setState({
      logDetail: '',
    })
  }

  render() {
    return (
      <>
        <form onSubmit={(event) => {
          this.stateDefault(event)
          this.props.logCreateHandler(event, this.state.logDetail, this.props.animal.id)
          
        }}>
          <fieldset>
            <textarea name="logDetail" type="text" placeholder="daily logs" value={this.state.logDetail} onChange={this.logChangeHandler} />
            <input type="submit" placeholder="submit" />
          </fieldset>
        </form>

      </>
    )
  }
}
export default AnimalProfileForm