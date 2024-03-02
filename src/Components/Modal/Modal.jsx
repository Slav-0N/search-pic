import React, { Component } from "react";
import { Overlay, Modalll } from "./Modal.styled";

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.closeByEsc);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.closeByEsc);
  }

  closeByEsc = ({ code }) => {
    code === "Escape" && this.props.closeModal();
    console.log("clicked Esc");
  };

  shutDownModal = ({ target, currentTarget }) => {
    const { closeModal } = this.props;
    target === currentTarget && closeModal();
  };

  render() {
    return (
      <Overlay className="overlay" onClick={this.shutDownModal}>
        <Modalll className="modal">
          <img src={this.props.bigImg} alt="" />
        </Modalll>
      </Overlay>
    );
  }
}
