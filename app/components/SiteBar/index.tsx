"use client";

import Image from "next/image";
import "./index.scss";

function SiteBar() {
  return (
    <div className="sitebar_container">
      <div className="sitebar_content">
        <div className="stiebar_top">
          <a href="" className="stiebar_top_wrap">
            <span className="icon_thuner">
              <Image
                width={20}
                height={31}
                alt=""
                src={"/assets/images/ic-thunder.svg"}
              />
            </span>
            <span>Học ngay</span>
          </a>
        </div>

        <div className="stibar_body">
          <div className="stibar_body_wrap">
            <div
              style={{
                height: "43.9941px",
                width: "228.008px",
                opacity: 0,
                transform: "translateY(80.1855px)",
              }}
            />

            <div className="stibar_body_block">
              <p>Quyền lợi dành riêng cho bạn</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SiteBar;
