import {connect} from "react-redux"
import {setProductSelect ,deleteProducts} from "../../redux/ProductItem/ProductItem.action"
import ProductItem from "./"
import Header from "../Header"
import Cart from "../Cart"

const mapStateToProps = state =>({
    load: state.productItemReducer.load,
    productSelected: state.productItemReducer.result,
    count: state.productItemReducer.count,
})

const mapDispatchToProps = {
    setProductSelect: setProductSelect,
    deleteProducts: deleteProducts
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductItem,Header,Cart)