import React from "react";

const ImageGalleryItem = ({
  showModal,
  picData: { previewURL, tags, largeImageURL },
}) => {
  return (
    <li className="gallery-item">
      <img
        src={previewURL}
        alt={tags}
        onClick={() => showModal(largeImageURL)}
      />
    </li>
  );
};

export default ImageGalleryItem;

// export default class ImageGalleryItem extends Component {
//   render() {
//     const {
//       picData: { previewURL, tags, largeImageURL },
//     } = this.props;

//     return (
//       <li className="gallery-item">
//         <img
//           src={previewURL}
//           alt={tags}
//           onClick={() => this.props.showModal(largeImageURL)}
//         />
//       </li>
//     );
//   }
// }
