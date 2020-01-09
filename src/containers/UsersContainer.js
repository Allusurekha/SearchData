import { connect } from "react-redux";
import Users from "../components/Users";
import * as actions from "../redux/users/actions";

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadUsers: () => dispatch(actions.loadUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
