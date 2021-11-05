import { connect } from "react-redux";
import {
  setTotalCountAC,
  setCurrentPageAC,
  followAC,
  setUsersAC,
  unfollowAC,
} from "../../redux/usersReducer";
import Users from "./Users";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalCount: (totalCount) => {
      dispatch(setTotalCountAC(totalCount));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);
