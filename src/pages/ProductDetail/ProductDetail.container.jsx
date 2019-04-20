import {connect} from "react-redux"
import {getProductDetail} from "../../redux/ProductDetail/ProductDetail.action"
import ProductDetail from "./"

const mapStateToProps = state => ({
    load: state.productDetailReducer.load,
    result: state.productDetailReducer.result,
    productsList: state.productListReducer.result,
})

const mapDispatchToProps = {
    getProductDetail: getProductDetail,
}

export default connect(mapStateToProps, mapDispatchToProps )(ProductDetail)