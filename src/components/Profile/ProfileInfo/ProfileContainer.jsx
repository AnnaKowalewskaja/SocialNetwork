import React from "react";
import Profile from "../Profile";

import { setUserProfile, getProfileUser } from "../../../redux/profile-reducer";
import {getStatus, updateStatus} from "../../../redux/profile-reducer";

import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  //компонента уже вмонтирована -component DidMount

  componentDidMount() {
    let userId=this.props.match.params.userId;
    this.props.getProfileUser(userId);
    
      this.props.getStatus(userId);
   
    
  
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

export default compose(
  connect(mapStateToProps, { setUserProfile, getProfileUser,getStatus,updateStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
