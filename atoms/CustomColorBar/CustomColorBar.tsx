import React, { FC } from 'react';

import { Box } from '@chakra-ui/react';

interface IProps {
  color: string;
}

const CustomColorBar: FC<IProps> = ({ color }) => (
  <Box w="100vw" h="2px" m="15px auto" bgColor={color} />
);

export default CustomColorBar;
