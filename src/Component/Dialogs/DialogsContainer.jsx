import { connect } from "react-redux";
import {
  addMessage,
  updateNewMessageText
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogPage: state.dialogPage,
  };
};

const DialogsContainer = connect(mapStateToProps, {
  addMessage,
 updateNewMessageText,
})(Dialogs);

export default DialogsContainer;
