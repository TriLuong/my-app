import { connect } from "react-redux";
import { getProducts, sortProducts } from "../../redux/ProductList/ProductList.action";
import ProductList from "./";

const mapStateToProps = state => ({
  products: state.productListReducer.result,
  error: state.productListReducer.error,
  load: state.productListReducer.load
});

const mapDispatchToProps = {
  getProducts: getProducts,
  sortProducts: sortProducts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
