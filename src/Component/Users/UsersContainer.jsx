import React from "react";
import { connect } from "react-redux";
import { getUsers } from "../../api/api";
import {
  follow,
  setCurrentPage,
  setTotalCount,
  setUsers,
  toggleIsFeatching,
  unfollow,
} from "../../redux/usersReducer";
import Preloader from "../common/preloader/Preloader";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFeatching(true);
    getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
      this.props.toggleIsFeatching(false);
      this.props.setUsers(data.items);
      this.props.setTotalCount(data.totalCount);
    });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFeatching(true);
    getUsers(pageNumber, this.props.pageSize).then((data) => {
      this.props.toggleIsFeatching(false);
      this.props.setUsers(data.items);
    });
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalCount={this.props.totalCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  toggleIsFeatching,
})(UsersContainer);
