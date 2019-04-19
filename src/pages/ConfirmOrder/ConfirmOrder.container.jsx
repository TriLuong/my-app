import {connect} from "react-redux"
import ConfirmOrder from "./"

const mapStateToProps = state => ({
    productsSelected: state.productItemReducer.result,
    orderInfo: state.orderReducer.result
})

export default connect (mapStateToProps)(ConfirmOrder);