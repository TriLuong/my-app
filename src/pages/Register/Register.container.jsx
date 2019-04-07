import { connect } from "react-redux";
import { checkRegister } from "../../redux/Register/Register.action";
import Register from "./";

const mapStateToProps = state => ({
  load: state.registerReducer.load,
  result: state.registerReducer.result,
  error: state.registerReducer.error
});

const mapDispatchToProps = {
  checkRegister: checkRegister
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
