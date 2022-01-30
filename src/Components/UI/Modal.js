import { Fragment } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onRemove} className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  const modalRemoveHandler = () => {
    props.onRemove(false);
  };

  return (
    <Fragment>
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
      {createPortal(
        <Backdrop onRemove={modalRemoveHandler}>{props.children}</Backdrop>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
