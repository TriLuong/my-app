import { connect } from "react-redux";
import { searchProducts } from "../../../redux/ProductList/ProductList.action";
import Search from "./";

const mapDispatchToProps = {
  searchProducts: searchProducts
};

export default connect(
  null,
  mapDispatchToProps
)(Search);
