import {connect} from "react-redux"
import {selectProducts ,deleteProducts} from "../../redux/ProductItem/ProductItem.action"
import ProductItem from "./"

const mapStateToProps = state =>({
    load: state.productItemReducer.load,
    productsSelected: state.productItemReducer.result,
    count: state.productItemReducer.count,
})

const mapDispatchToProps = {
    selectProducts: selectProducts,
    deleteProducts: deleteProducts
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductItem)