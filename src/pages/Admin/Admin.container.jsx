import { connect } from "react-redux";
import { getData } from "../../redux/Admin/Admin.action";
import Admin from "./";

const mapStateToProps = (state) => ({
  load: state.adminReducer.load,
  dataOrder: state.adminReducer.result
});

const mapDispatchToProps = {
  getData: getData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
