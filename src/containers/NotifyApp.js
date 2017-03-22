import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import NotifyPage from "../component/NotifyPage"
import * as NotifyActions from '../actions/notify'

function mapDispatchToProps(dispatch) {
  return bindActionCreators(NotifyActions,dispatch);
}

function mapStateToProps(state) {
  return {
    notify: state.notify
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NotifyPage);