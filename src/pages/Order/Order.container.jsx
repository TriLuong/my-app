import {connect} from "react-redux";
import {setOrderInfo} from "../../redux/Order/Order.action"
import Order from "./"

const mapStateToProps = state => ({
    load: state.orderReducer.load,
    result: state.orderReducer.result,
    error: state.orderReducer.error
  });
  
  const mapDispatchToProps = {
    setOrderInfo: setOrderInfo
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Order);