import {connect} from "react-redux"
import {deleteProducts} from "../../../redux/ProductItem/ProductItem.action"
import Cart from "./"

const mapDispatchToProps = {
    deleteProducts: deleteProducts,
}

export default connect(null,mapDispatchToProps)(Cart)