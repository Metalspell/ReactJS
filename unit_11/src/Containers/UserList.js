import { connect } from "react-redux";
import List from '../Components/List';

function mapStateToProps(state) {
  const { user } = state;
  return { user: user };
}

export default connect(
  mapStateToProps,
  null
)(List);