'use client';
import GuestActions from './Actions/GuestActions';
import UserActions from './Actions/UserActions';

const Auth = ({isLogin}: {isLogin: boolean}) => {


  if (!isLogin) {
    return <GuestActions />;
  } else {
    return <UserActions />;
  }
};

export default Auth;
