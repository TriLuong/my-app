import { connect } from "react-redux";
import { getProducts } from "../../../redux/Search/Search.action";
import Search from "./";

const mapStateToProps = state => ({
  products: state.searchReducer.result,
  error: state.searchReducer.error,
  load: state.searchReducer.load
});

const mapDispatchToProps = {
  getProducts: getProducts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
