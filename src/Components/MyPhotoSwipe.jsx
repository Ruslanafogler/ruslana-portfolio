import React, { Component } from "react";
import { PhotoSwipe, PhotoSwipeGallery } from "react-photoswipe";

export default function MyPhotoSwipe() {
  let items = [
    {
      src: require("../assets/images/SRrobot.jpg"),
      thumbnail: require("../assets/images/SRrobot.jpg"),
      w: 900,
      h: 1200,
      title: "Image 1",
    },
    {
      src: "http://lorempixel.com/1200/900/sports/2",
      thumbnail: "http://lorempixel.com/120/90/sports/2",
      w: 1200,
      h: 900,
      title: "Image 2",
    },
  ];

  let options = {
    //http://photoswipe.com/documentation/options.html
  };
  const getThumbnailContent = (item) => {
    return <img src={item.thumbnail} width={120} height={90} />;
  };
  return (
    <PhotoSwipeGallery
      items={items}
      options={options}
      thumbnailContent={getThumbnailContent}
    />
  );
}
