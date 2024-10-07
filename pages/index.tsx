import React, { FC } from 'react';

import wrapper from '@configs/configureStore';
import { loadPosts } from '@APIs/post';

import CustomColorBar from '@atoms/CustomColorBar/CustomColorBar';

import CommonBar from '@components/Common/CommonBar';
import { ButtonSection, ReducerButtonSection } from '@components/Home';
import { Button, Text } from '@chakra-ui/react';

const Home: FC = () => (
  <>
    <ButtonSection />
    <Text size="lg">Home Style!</Text>
    <CommonBar />
    <CustomColorBar color="#ff9595" />
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
