import classes from "./ProfileInfo.module.css";
import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  diactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
    //setState- асинхронный! метод из React.Component, который склеивает локальный стейт с тем объектом, который передается
  };

  //чтобы не потерять контекст activateEditMode делается стрелочной функциией
  //можно сделать методом, но тогда в верстке bind

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  }

  render() {
    return (
      <>
        <div>
          {!this.state.editMode && (
            <div>
              <p onClick={this.activateEditMode}>
                {this.state.status || "--------"}
              </p>
            </div>
          )}
          {this.state.editMode && (
            <div>
              <input
                onChange={this.onStatusChange}
                autoFocus={true}
                onBlur={this.diactivateEditMode}
                value={this.state.status}
              ></input>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default ProfileStatus;
