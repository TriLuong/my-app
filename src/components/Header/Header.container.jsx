import {connect} from "react-redux"
import Header from "./"

const mapStateToProps = state => ({
    load: state.headerReducer.load
})

export default connect (mapStateToProps)(Header);