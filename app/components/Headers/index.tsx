import Image from "next/image";
import "./index.scss";
import Auth from "./Auth";

const Header = () => {
  return (
    <header className="header">
      <div className="header_top">
        <div className="header_top_news">
          <div>
            <p>
              Livestream Q&A hỏi đáp, tám chuyện vui vẻ Cùng anh chị Đồng nghiệp
              20:00-23:00 05/07/2024
            </p>
          </div>
        </div>
        <div className="header_top_contact">
          <div className="header_top_contact_hotline">
            <span>
              <Image
                src="/assets/images/header/icon-hostline.png"
                alt="phone"
                width={17}
                height={17}
              />
            </span>
            <span>Hỗ trợ kỹ thuật</span>
            <span>
              <Image
                src="/assets/images/header/icon-info.png"
                alt="phone"
                width={17}
                height={17}
              />
            </span>
          </div>

          <div className="header_top_contact_download_app">
            <a href="">
              <span>
                <Image
                  src="/assets/images/header/icon-down.png"
                  alt="phone"
                  width={16}
                  height={16}
                />
              </span>
              <span>Tải App mobile</span>
            </a>
          </div>
        </div>
      </div>

      <div className="header_bottom">
        <div className="container">
          <div className="header_bottom_wrapper">
            <div className="header_bottom_wrapper_left">
              <a href="">
                <span>
                  <Image
                    src="/assets/images/logo-png.png"
                    width={100}
                    height={100}
                    alt=""
                  />
                </span>
              </a>
            </div>

            <div className="header_bottom_wrapper_middle">
              <div className="header_bottom_wrapper_middle_list">
                <a href="">
                  <span className="icon">
                    <Image
                      src="/assets/images/add-friend.svg"
                      width={20}
                      height={20}
                      alt=""
                    />
                  </span>
                  <span className="text">Kết bạn</span>
                </a>

                
                <a href="">
                  <span className="icon">
                    <Image
                      src="/assets/images/ic-chanel-group.svg"
                      width={20}
                      height={20}
                      alt=""
                    />
                  </span>
                  <span className="text">Colleague Club</span>
                </a>

                
                <a href="">
                  <span className="icon">
                    <Image
                      src="/assets/images/question-1.svg"
                      width={20}
                      height={20}
                      alt=""
                    />
                  </span>
                  <span className="text">Hỏi tôi</span>
                </a>

                
                <a href="">
                  <span className="icon">
                    <Image
                      src="/assets/images/ic-chanel-7.svg"
                      width={20}
                      height={20}
                      alt=""
                    />
                  </span>
                  <span className="text">Hoạt động</span>
                </a>

                
                <a href="">
                  <span className="icon">
                    <Image
                      src="/assets/images/ic-chanel-2.svg"
                      width={20}
                      height={20}
                      alt=""
                    />
                  </span>
                  <span className="text">Blog</span>
                </a>

                
                <a href="">
                  <span className="icon">
                    <Image
                      src="/assets/images/icon_fb.svg"
                      width={20}
                      height={20}
                      alt=""
                    />
                  </span>
                  <span className="text">Fanpage</span>
                </a>

                
                <a href="">
                  <span className="icon">
                    <Image
                      src="/assets/images/MTczMjAwNjc1MQ.png"
                      width={20}
                      height={20}
                      alt=""
                    />
                  </span>
                  <span className="text">Tiktok</span>
                </a>

                
              </div>
            </div>

            <div className="header_bottom_wrapper_right">
              <Auth />
            </div>
          </div>
        </div>
      </div>
      
    </header>
  );
};

export default Header;
