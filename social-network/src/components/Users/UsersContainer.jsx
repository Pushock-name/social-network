import { connect } from 'react-redux';
import { follow, setCurrentPage, unfollow, toggleFollowingProgress, getUsers} from '../../redux/users-reducer';
import Users from './Users';
import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getAllUsers, getCurrentPage, getFollowingProgress, getIsFetching, getPageSize, getTotalUsersCount } from '../../redux/users-selectors';



class UsersContainer extends React.Component {
  
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }; 

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
    this.props.setCurrentPage(pageNumber)
    }
    
    render() {
      return <>
      {this.props.isFetching ? <Preloader /> : null}   
      <Users totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    toggleFollowingProgress={this.props.toggleFollowingProgress}
                    followingProgress={this.props.followingProgress}
        />
      </>  
    }
  };

let mapStateToProps = (state) => {
  return {
  users: getAllUsers(state),
  pageSize: getPageSize(state),
  totalUsersCount: getTotalUsersCount(state),
  currentPage: getCurrentPage(state),
  isFetching: getIsFetching(state),
  followingProgress: getFollowingProgress(state)
  }
};


export default compose (
  connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers}),
  withAuthRedirect
) (UsersContainer);