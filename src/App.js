import { Component, useCallback, useEffect, useMemo, useState } from "react";
import Searchbar from "./Components/Searchbar/Searchbar";
import { fetchPictures } from "./api/api";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import ImageGalleryItem from "./Components/ImageGalleryItem/ImageGalleryItem";
import Modal from "./Components/Modal/Modal";
import { LoadMoreBtn } from "./Components/Button/Button";

import { createPortal } from "react-dom";
import { Spinner } from "./Components/Spinner/Spinner";
import { Wrapper } from "./App.styled";

const App = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pics, setPics] = useState(null);
  const [query, setQuery] = useState("");
  const [img, setImg] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);

  const bringPicData = useCallback(async (A1, A2) => {
    try {
      setIsLoading(true);
      const data = await fetchPictures(A1, A2);

      setPics((prev) => (prev ? [...prev, ...data.hits] : data.hits));
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    query && bringPicData(query, pageNumber);
  }, [bringPicData, query, pageNumber]);

  const addNewQuery = useCallback((newQuery) => {
    setQuery((prev) => {
      setPageNumber(1);
      setPics(0);
      return newQuery;
    });
  }, []);
  const showModal = (bigPicture) => {
    setImg(bigPicture);
  };

  const changePage = () => {
    setPageNumber((prev) => (prev += 1));
  };

  const closeModal = () => {
    setImg(null);
  };

  return (
    <Wrapper>
      <h1>App component</h1>
      <Searchbar addNewQuery={addNewQuery} />
      <ImageGallery>
        {pics &&
          pics.map((el) => (
            <ImageGalleryItem key={el.id} picData={el} showModal={showModal} />
          ))}
      </ImageGallery>
      {isLoading && createPortal(<Spinner />, document.body)}
      {pics && <LoadMoreBtn changePage={changePage} />}
      {img && <Modal bigImg={img} closeModal={closeModal} />}
    </Wrapper>
  );
};

export default App;

// class App extends Component {
//   state = {
//     error: "",
//     isLoading: false,
//     pics: null,
//     query: "",
//     img: null,
//     pageNumber: 0,
//   };

//   addNewQuery = (newQuery) => {
//     this.setState({ query: newQuery });
//   };

//   componentDidUpdate(_, prevState) {
//     if (prevState.query !== this.state.query) {
//       this.setState({ pageNumber: 1, pics: null }, () => {
//         this.bringPicData(this.state.query, this.state.pageNumber);
//       });
//     }
//     // if (prevState.pageNumber !== this.state.pageNumber) {
//     //   this.bringPicData(this.state.query, this.state.pageNumber);
//     // }
//   }

//   bringPicData = async (dataQuery, pageNumber) => {
//     try {
//       this.setState({ isLoading: true });
//       const data = await fetchPictures(dataQuery, pageNumber);

//       if (this.state.pics === null) {
//         this.setState({
//           pics: data.hits,
//         });
//       } else {
//         this.setState((prev) => ({
//           pics: [...prev.pics, ...data.hits],
//         }));
//       }
//     } catch (error) {
//       this.setState({ error });
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   };

//   showModal = (bigPicture) => {
//     this.setState({ img: bigPicture });
//   };

//   closeModal = () => {
//     this.setState({ img: null });
//   };

//   changePage = () => {
//     this.setState(
//       (prev) => ({ pageNumber: prev.pageNumber + 1 }),
//       () => {
//         this.bringPicData(this.state.query, this.state.pageNumber);
//       }
//     );
//   };

//   render() {
//     return (
//       <Wrapper>
//         <h1>App component</h1>
//         <Searchbar addNewQuery={this.addNewQuery} />
//         <ImageGallery>
//           {this.state.pics &&
//             this.state.pics.map((el) => (
//               <ImageGalleryItem
//                 key={el.id}
//                 picData={el}
//                 showModal={this.showModal}
//               />
//             ))}
//         </ImageGallery>
//         {this.state.isLoading && createPortal(<Spinner />, document.body)}
//         {this.state.pics && <LoadMoreBtn changePage={this.changePage} />}
//         {this.state.img && (
//           <Modal bigImg={this.state.img} closeModal={this.closeModal} />
//         )}
//       </Wrapper>
//     );
//   }
// }

// export default App;
