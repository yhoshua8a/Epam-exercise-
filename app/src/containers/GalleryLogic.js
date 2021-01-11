import React from "react";
import Gallery from "../components/Gallery";
import axios from "axios";

/**
 * Component for handle logic of Gallery component
 *
 */
class GalleryLogic extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
    };

    this._getRandomImages = this._getRandomImages.bind(this);
    this._handleIntersect = this._handleIntersect.bind(this);
  }

  /**
   * Lifecycle method
   *
   * @public
   */
  componentDidMount() {
    this._getRandomImages(10);

    let options = {
      root: null,
      rootMargins: "0px",
      threshould: 0.5,
    };

    this._defineIntersectionObserver(
      document.querySelector("footer"),
      this._handleIntersect,
      options
    );
  }

  /**
   * Define a IntersectionObserver for an element.
   *
   * @param {htmlElement} element
   * @param {function} callback
   * @param {object} callback
   * @private
   */
  _defineIntersectionObserver(element, callback, options) {
    const observer = new IntersectionObserver(callback, options);
    observer.observe(element);
  }

  /**
   * Handle intersection of element.
   *
   * @param {array} entries
   * @private
   */
  _handleIntersect(entries) {
    if (entries[0].isIntersecting) {
      this._getRandomImages(5);
    }
  }

  /**
   * Gets random Images from superheroapi.
   *
   * @param {number} number
   * @private
   */
  _getRandomImages(number) {
    for (let i = 0; i < number - 1; i++) {
      const id = Math.floor(Math.random() * 100 - 1);

      axios
        .get(`https://superheroapi.com/api.php/2113315678698733/${id}/image`)
        .then((res) => {
          const heroe = res.data;
          const images = this.state.images;
          images.push(heroe.url);
          this.setState({ images });
        });
    }
  }

  /**
   * React method for render UI
   *
   * @public
   */
  render() {
    return <Gallery images={this.state.images} />;
  }
}

export default GalleryLogic;
