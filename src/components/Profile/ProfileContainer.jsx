import React from "react";
import Profile from "./Profile";

import {setUserProfile,getProfileUser} from './../../redux/profile-reducer';
import { connect } from "react-redux";
import { withRouter } from "react-router";


class ProfileContainer extends React.Component{
//компонента уже вмонтирована -component DidMount

  componentDidMount() {
    this.props.getProfileUser(this.props.match.params.userId);
  }
  

  render(){
  return (
    
    <Profile  {...this.props} profile={this.props.profile} />
    
  );}
};

let mapStateToProps = (state) => ({
profile: state.profilePage.profile
})

let WithURLDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {setUserProfile,getProfileUser})(WithURLDataContainerComponent);
