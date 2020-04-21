import React, { ReactNode } from 'react';
import CarouselItem from './carousel.component';

export default {
  title: 'Carousel Item',
  component: CarouselItem,
  decorators: [
    (storyFn: () => ReactNode) => (
      <div
        style={{
          backgroundColor: '#ececec',
          height: '90vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {storyFn()}
      </div>
    ),
  ],
};

export const Default = () => <CarouselItem />;
