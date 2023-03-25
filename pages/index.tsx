import React, { FC } from 'react';

import wrapper from '@configs/configureStore';
import { loadPosts } from '@APIs/post';

import CommonButton from '@atoms/CommonButton';
import CustomColorBar from '@atoms/CustomColorBar/CustomColorBar';

import CommonBar from '@components/Common/CommonBar';
import { HomeButtonSection, HS } from '@components/Home';

const Home: FC = () => (
  <>
    <HomeButtonSection />
    <HS.Text>Home Style!</HS.Text>
    <CommonBar />
    <CustomColorBar color="#ff9595" />
    <CommonButton type="primary">Hello~~~~~</CommonButton>
  </>
);

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  await store.dispatch(loadPosts({ lastId: 10 }));
  return { props: {} };
});

export default Home;
