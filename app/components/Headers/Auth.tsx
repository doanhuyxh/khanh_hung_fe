import "./Auth.scss";
import Image from "next/image";
export default function Auth() {
  const isLogin = true;

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
          <p className="text-nowrap text-center text-white">Học ngay</p>
          <p className="text-nowrap uppercase text-center text-white">Hoàn toàn miễn phí</p>
        </div>

      </div>
    );
  } else {
    return <div className="flex gap-4" >
      <div className="btn-upgrade">
        <a href="" className="btn-upgrade-link">
          <span className="star"></span>
          <span>
            <Image src="/assets/images/flash.svg" alt="star" width={20} height={20} />
          </span>
          <span className="text-nowrap uppercase text-white font-bold text-xl">Học ngay</span>
        </a>
      </div>
      <div className="btn_profile">
        <div className="btn_profile_content cursor-pointer">
          <a href="" className="btn_profile_avatar">
            <Image src="/assets/images/avatar_defaut.jpg" alt="profile" width={100} height={100} />
          </a>
          <div className="flex flex-col gap-1">
            <p className="text-nowrap text-black font-bold text-xl">Nguyễn Văn A</p>
            <div className="text-nowrap flex items-center gap-1">
              <Image src="/assets/images/price-icon.svg" alt="star" width={15} height={15} />
              <span className="text-nowrap text-color-primary font-bold text-xl m-y-auto">100đ</span>
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}
