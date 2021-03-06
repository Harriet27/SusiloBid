import React, { useState } from 'react';
import { Carousel, Card } from 'react-bootstrap';

import Slider1 from '../asset/slider1.jpg';
import Slider2 from '../asset/slider2.png';
import Slider3 from '../asset/slider3.png';

const CarouselPage = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="d-flex justify-content-center mt-3">
      <Card style={{ borderRadius: '20px' }}>
        <Card.Body>
          <Carousel activeIndex={index} onSelect={handleSelect} style={{ width : '60em', height: '20em' }}>
            <Carousel.Item>
              <img
                style={{ height: '20em', borderRadius: '20px' }}
                className="d-block w-100"
                src={Slider1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ height: '20em', borderRadius: '20px' }}
                className="d-block w-100"
                src={Slider2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ height: '20em', borderRadius: '20px' }}
                className="d-block w-100"
                src={Slider3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CarouselPage;