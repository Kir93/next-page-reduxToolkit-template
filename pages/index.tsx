import React, { FC } from 'react';
import CommonButton from 'atoms/CommonButton';
import CustomColorBar from '@atoms/CustomColorBar/CustomColorBar';
import CommonBar from '@components/Common/CommonBar';
import DefaultComponents from '@components/DefaultComponents/DefaultComponents';
import wrapper from '@configs/configureStore';
import { loadPosts } from '@APIs/post';

const Index: FC = () => (
  <>
    <DefaultComponents />
    <CommonBar />
    <CustomColorBar color="#ff9595" />
    <CommonButton type="primary">Hello~~~~~</CommonButton>
  </>
);

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  await store.dispatch(loadPosts(10));
  return { props: {} };
});

export default Index;
