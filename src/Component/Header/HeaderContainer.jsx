import React, { Component } from "react";
import { connect } from "react-redux";
import { userAPI } from "../../api/api";
import { setAuthUserData } from "./../../redux/authReducer";
import Header from "./Header";

class HeaderContainer extends Component {
  componentDidMount() {
    userAPI.getAuthUser().then((data) => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        this.props.setAuthUserData(id, email, login);
      }
    });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  userId: state.auth.userId,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
