import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

const items = [
  {
    src: "https://media.giphy.com/media/8YEnJb7uM19kImkV8R/giphy.gif",
    altText: "슬라이드1 이미지 대체 문구",
    caption: "슬라이드1 설명",
    header: "슬라이드1 제목",
  },
  {
    src: "https://media.giphy.com/media/mFYxjzJO3zzNqGAwee/giphy.gif",
    altText: "슬라이드2 이미지 대체 문구",
    caption: "슬라이드2 설명",
    header: "슬라이드2 제목",
  },
  {
    src: "https://media.giphy.com/media/62aDCkUJ8AogFbqcVV/giphy.gif",
    altText: "슬라이드3 이미지 대체 문구",
    caption: "슬라이드3 설명",
    header: "슬라이드3 제목",
  },
];

class ReactstrapCarousel extends Component {
  render() {
    return (
      <>
        <Carousel>
          {items.map((item) => {
            return (
              <Carousel.Item>
                <Carousel.Caption>
                  <h3>{item.header}</h3>
                  <p>{item.caption}</p>
                </Carousel.Caption>
                <img src={item.src} alt={item.altTextsrc} />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </>
    );
  }
}

export default ReactstrapCarousel;
