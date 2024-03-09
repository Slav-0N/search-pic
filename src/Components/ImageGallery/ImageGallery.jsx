import React from "react";

const ImageGallery = ({ children }) => {
  return <ol className="gallery">{children}</ol>;
};

export default ImageGallery;

// export default class ImageGallery extends Component {
//   render() {
//     const { children } = this.props;
//     return <ol className="gallery">{children}</ol>;
//   }
// }
