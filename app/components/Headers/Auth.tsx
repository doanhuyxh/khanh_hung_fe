import "./Auth.scss";

export default function Auth() {
  const isLogin = false;

  if (!isLogin) {
    return (
      <div className="flex gap-2">
        <div className="btn_login">
          <span className="text-nowrap">Đăng nhập</span>
        </div>
        <div className="btn_register">
          <span className="text-nowrap">Đăng ký và học thử ngay</span>
        </div>
        <div className="btn_register_mobile flex-col">
          <p className="text-nowrap text-center text-white text-sm">Học ngay</p>
          <p className="text-nowrap uppercase text-center text-white text-sm">Hoàn toàn miễn phí</p>
        </div>
        
      </div>
    );
  } else {
    return <div />;
  }
}
