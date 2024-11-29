import "./Auth.scss";

export default function Auth() {
  const isLogin = true;

  if (isLogin) {
    return (
      <div className="flex gap-2">
        <div className="btn_login">
          <span className="text-nowrap">Đăng nhập</span>
        </div>
        <div className="btn_register">
          <span className="text-nowrap">Đăng ký và học thử ngay</span>
        </div>
      </div>
    );
  } else {
    return <div />;
  }
}
