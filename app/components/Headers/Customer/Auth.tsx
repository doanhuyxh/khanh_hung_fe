'use client';
import GuestActions from './Actions/GuestActions';
import UserActions from './Actions/UserActions';

const Auth = ({isLogin, user}: {isLogin: boolean, user: any}) => {


  if (!isLogin) {
    return <GuestActions />;
  } else {
    return <UserActions user={user} />;
  }
};

export default Auth;
