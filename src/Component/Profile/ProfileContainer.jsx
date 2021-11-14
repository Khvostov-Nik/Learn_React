import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { setUserProfile } from "../../redux/profileReducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 18734;
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let UrlDataContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(UrlDataContainer);
