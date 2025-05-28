import { FC } from 'react';

import { Button } from '@chakra-ui/react';

import { login, logout } from 'store/user';

import { useTypeDispatch, useTypeSelector } from '@utils/useTypeRedux';

const ReducerButtonSection: FC = () => {
  const dispatch = useTypeDispatch();
  const { me } = useTypeSelector((state) => state.user);
  const onClickButton = () => {
    if (me === null) {
      dispatch(login());
    } else {
      dispatch(logout());
    }
  };

  return (
    <Button
      colorPalette="primary"
      variant={me === null ? 'solid' : 'outline'}
      onClick={onClickButton}
    >
      {me === null ? 'Log In' : 'Log Out'}
    </Button>
  );
};

export default ReducerButtonSection;
