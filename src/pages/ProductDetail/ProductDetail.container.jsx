import {connect} from "react-redux"
import {getData, getProduct} from "../../redux/ProductDetail/ProductDetail.action"
import ProductDetail from "./"

const mapStateToProps = state => ({
    load: state.productDetailReducer.load,
    result: state.productDetailReducer.result,
    productsSeleted: state.productItemReducer.result,
})

const mapDispatchToProps = {
    getData: getData,
    getProduct: getProduct
}

export default connect(mapStateToProps, mapDispatchToProps )(ProductDetail)