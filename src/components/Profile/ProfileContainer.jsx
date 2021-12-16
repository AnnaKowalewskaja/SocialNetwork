import React from "react";
import Profile from "./Profile";

import {setUserProfile} from './../../redux/profile-reducer';
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {profileAPI} from "./../../api/api"

class ProfileContainer extends React.Component{
//компонента уже вмонтирована -component DidMount

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId){
      userId = 3;
    }
    profileAPI.profileUser(userId)
      
      .then((data) => {
        this.props.setUserProfile(data);
      });
    
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
export default connect(mapStateToProps, {setUserProfile})(WithURLDataContainerComponent);
