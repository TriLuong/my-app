import {connect} from "react-redux"
import Header from "./"

const mapStateToProps = state => ({
    productCount: state.productItemReducer.count,
    productSelected: state.productItemReducer.result
})

export default connect (mapStateToProps)(Header);