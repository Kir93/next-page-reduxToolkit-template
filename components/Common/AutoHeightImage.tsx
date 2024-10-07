import React from 'react';
import { Image, ImageProps } from '@chakra-ui/next-js';

interface IAutoHeightImage extends Omit<ImageProps, 'width'> {
  width?: string | number;
  alt: string;
}

const AutoHeightImage = ({ width = '100%', alt = '', ...props }: IAutoHeightImage) => (
  <Image {...props} w={width} alt={alt} h="auto" />
);

export default AutoHeightImage;
