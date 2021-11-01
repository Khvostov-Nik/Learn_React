import { connect } from "react-redux";
import {
  addMessageAction,
  updateNewMessageTextAction
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


let mapStateToProps =(state)=>{
  return{
    dialogPage: state.dialogPage,
    newMessageText:state.dialogPage.newMessageText
  }
};
let mapDispatchToProps =(dispatch)=>{
  return{
    addMessage: () => {
      dispatch(addMessageAction())
    },
    onMessageChang: (text)=>{
      dispatch(updateNewMessageTextAction(text))
    }
  }
};

const DialogsContainer= connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
