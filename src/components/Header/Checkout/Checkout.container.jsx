import {connect} from "react-redux"
import Checkout from "./"

const mapStateToProps = state => ({
    productsSelected: state.productItemReducer.result
})

export default connect (mapStateToProps)(Checkout);