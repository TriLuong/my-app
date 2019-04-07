import { connect } from "react-redux";
import { checkLogin } from "../../redux/Login/Login.action";
import Login from "./";

const mapStateToProps = state => ({
  result: state.loginReducer.result,
  load: state.loginReducer.load,
  error: state.loginReducer.error
});

const mapDispatchToPtops = {
  checkLogin: checkLogin
};

export default connect(
  mapStateToProps,
  mapDispatchToPtops
)(Login);
