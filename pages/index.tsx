import React, { FC } from 'react';

import { Button, Text } from '@chakra-ui/react';

import { loadPosts } from 'api/post';
import wrapper from 'config/configureStore';

import CommonBar from '@atoms/common/CommonBar';

import { ButtonSection, ReducerButtonSection } from '@components/homes';

const Home: FC = () => (
  <>
    <ButtonSection />
    <Text fontSize="lg">Home Style!</Text>
    <CommonBar />
    <Button display="block" mb="10px" colorScheme="primary">
      Hello~~~~~
    </Button>
    <ReducerButtonSection />
  </>
);

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  await store.dispatch(loadPosts({ lastId: 10 }));
  return { props: {} };
});

export default Home;
