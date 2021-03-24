import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import React from "react";

import { Gallery, Item } from "react-photoswipe-gallery";

export const smallItemStyles = {
  cursor: "pointer",
  objectFit: "cover",
  width: "100%",
  maxHeight: "100%",
  borderRadius: 20,
};

const SlideShow = ({ Items, gridStyle }) => (
  <Gallery>
    <div
      className="slideshow"
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "grid",
        ...gridStyle,
      }}
    >
      {Items.map((item) => (
        <Item
          original={item.img}
          thumbnail={item.img}
          width={item.width}
          height={item.height}
          title={item.title}
          alt={item.title}
        >
          {({ ref, open }) => (
            <img
              style={smallItemStyles}
              src={item.img}
              ref={ref}
              onClick={open}
              alt={item.title}
            />
          )}
        </Item>
      ))}
    </div>
  </Gallery>
);

export default SlideShow;

// const SlideShow = () => (
//   <Gallery>
//     <div
//       className="slideshow"
//       style={{
//         justifyContent: "center",
//         alignItems: "center",
//         display: "grid",
//         gridTemplateColumns: "300px 300px",
//         gridGap: 10,
//       }}
//     >
//       <Item
//         original={require("../assets/images/me_sunset.jpeg")}
//         thumbnail={require("../assets/images/me_sunset.jpeg")}
//         width="1600"
//         height="1600"
//         title="Author: Folkert Gorter"
//         id="so-first"
//       >
//         {({ ref, open }) => (
//           <img
//             style={smallItemStyles}
//             src={require("../assets/images/me_sunset.jpeg")}
//             ref={ref}
//             onClick={open}
//           />
//         )}
//       </Item>
//       <Item
//         original="https://placekitten.com/1024/768?image=1"
//         thumbnail="https://placekitten.com/80/60?image=1"
//         width="1024"
//         height="768"
//       >
//         {({ ref, open }) => (
//           <img
//             style={{ cursor: "pointer" }}
//             ref={ref}
//             onClick={open}
//             src="https://placekitten.com/80/60?image=1"
//           />
//         )}
//       </Item>
//       <Item
//         original="https://placekitten.com/1024/768?image=2"
//         thumbnail="https://placekitten.com/80/60?image=2"
//         width="1024"
//         height="768"
//       >
//         {({ ref, open }) => (
//           <img
//             style={smallItemStyles}
//             ref={ref}
//             onClick={open}
//             src="https://farm6.staticflickr.com/5584/14985868676_4b802b932a_m.jpg"
//           />
//         )}
//       </Item>
//     </div>
//   </Gallery>
// );

// export default SlideShow;
