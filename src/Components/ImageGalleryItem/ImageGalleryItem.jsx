import React, { Component } from "react";

export default class ImageGalleryItem extends Component {
  render() {
    const {
      picData: { previewURL, tags, largeImageURL },
    } = this.props;

    return (
      <li className="gallery-item">
        <img
          src={previewURL}
          alt={tags}
          onClick={() => this.props.showModal(largeImageURL)}
        />
      </li>
    );
  }
}
