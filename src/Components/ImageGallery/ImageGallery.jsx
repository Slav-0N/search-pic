import React, { Component } from "react";

export default class ImageGallery extends Component {
  render() {
    const { children } = this.props;
    return <ol className="gallery">{children}</ol>;
  }
}
