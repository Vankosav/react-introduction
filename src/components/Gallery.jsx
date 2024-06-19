// 1. Create and import the components `ImageOne` and `ImageTwo`
import ImageOne from "./ImageOne";
import ImageTwo from "./ImageTwo";

// 2. Create a function that returns HTML or JSX content
function Gallery() {
  return (
    <div id="gallery">
      <h2>REACT PROJECTS</h2>

      <ImageOne />
      <ImageTwo />
    </div>
  );
}

// 3. Export the function:
export default Gallery;
