"use client";

import axiosCustomerConfig from "@/app/libs/configs/axiosCustomerConfig";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Image from "next/image";

export default function AuthTabs() {

  const [isClient, setIsClient] = useState(false)

  const router = useRouter();
  const [activeTab, setActiveTab] = useState("login");
  const [loginForm, setLoginForm] = useState({
    email: "user1",
    password: "123456"
  });
  const [registerForm, setRegisterForm] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axiosCustomerConfig
      .post("/Auth/Login", loginForm)
      .then((response: any) => {
        if (response.code === 200) {
          router.push("/learn/study");
        } else {
          toast.error("Tài khoản hoặc mật khẩu không đúng", {
            duration: 3000,
            position: "top-right"
          });
        }
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        toast.error("Tài khoản hoặc mật khẩu không đúng", {
          duration: 3000,
          position: "top-right"
        });
      });
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(registerForm);
    if (registerForm.password !== registerForm.confirmPassword) {
      toast.error("Mật khẩu không khớp", {
        duration: 3000,
        position: "top-right"
      });
      return;
    }

    axiosCustomerConfig
      .post("/Auth/Register", registerForm)
      .then((response: any) => {
        if (response.code === 201) {
          toast.success("Đăng ký thành công, vui lòng đăng nhập", {
            duration: 3000,
            position: "top-right"
          });
        } else {
          toast.error("Đăng ký thất bại", {
            duration: 3000,
            position: "top-right"
          });
        }
      })
      .catch((error) => {
        console.error("Error registering:", error);
      });
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash;
      if (currentHash === "#dang-nhap") {
        setActiveTab("login");
      } else if (currentHash === "#dang-ky") {
        setActiveTab("register");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  if (!isClient) {
    return <></>;
  }

  return (
    <div className="w-full lg:w-1/4 lg:text-xl bg-transparent rounded-lg overflow-hidden flex flex-col items-center justify-center">
      <div className="text-white mt-4 mb-10">
        <p className="font-bold mb-2 lg:text-3xl lg:scale-95 text-center">
          KHÓA HỌC KINH DOANH KHÓA HỌC hoàn toàn miễn phí
        </p>
        <p className="lg:text-lg font-bold underline lg:scale-105 text-center">
          Bán hàng tự động - dạy học tự động - thu nhập thụ động
        </p>
      </div>

      <div className="w-full bg-green-500 flex flex-row justify-start p-4 rounded-t-2xl">
        <div className="flex-shrink-0 w-26 animate-shake animate-infinite animate-duration-[2000ms] animate-ease-in">
          <Image
            src={"/assets/images/home/banner-form-image.png"}
            width={100}
            height={100}
            alt="banner-form-image"
            className="w-full h-auto max-w-xs"
          />
        </div>
        <div className="text-white mt-4 md:mt-0 md:ml-4">
          <p className="mb-2">Không nhập form rườm rà, không nhập thẻ,</p>
          <p className="">không giới hạn thời gian - Đăng nhập là học ngay!</p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full bg-white p-4">
        <div className="flex flex-row items-center justify-center gap-4 w-full  p-2 rounded-xl cursor-pointer border border-gray-200">
          <span className="w-12">
            <Image
              src={"/assets/images/home/icon-gg.png"}
              width={100}
              height={100}
              alt=""
            />
          </span>
          <span className="font-bold">Tiếp tục với google</span>
        </div>
      </div>
      <div className="w-full bg-white rounded-b-xl shadow-xl p-8">
        <div className="flex mb-6 border-b border-gray-200">
          <button
            className={`w-1/2 py-2 text-center font-semibold text-xl ${activeTab === "login"
              ? "border-b-2 border-purple-600 text-purple-600"
              : "text-gray-500"
              }`}
            onClick={() => handleTabClick("login")}
          >
            Đăng nhập
          </button>
          <button
            className={`w-1/2 py-2 text-center font-semibold text-xl ${activeTab === "register"
              ? "border-b-2 border-pink-600 text-pink-600"
              : "text-gray-500"
              }`}
            onClick={() => handleTabClick("register")}
          >
            Đăng ký
          </button>
        </div>

        {activeTab === "login" && (
          <form onSubmit={handleLogin} className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Đăng nhập
            </h2>

            <div>
              <label
                htmlFor="email"
                className="block text-xl font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                value={loginForm.email}
                onChange={handleLoginChange}
                className="mt-1 block w-full px-3 py-2 text-xl border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-xl font-medium text-gray-700"
              >
                Mật khẩu
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="mt-1 block w-full px-3 py-2 text-xl border border-gray-300 rounded-md"
                value={loginForm.password}
                onChange={handleLoginChange}
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 text-xl font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-md"
            >
              Đăng nhập
            </button>
          </form>
        )}

        {activeTab === "register" && (
          <form onSubmit={handleRegister} className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Đăng ký
            </h2>

            <div>
              <label
                htmlFor="register-email"
                className="block text-xl font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="register-email"
                value={registerForm.email}
                onChange={handleRegisterChange}
                className="mt-1 block w-full px-3 py-2 text-xl border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label
                htmlFor="register-password"
                className="block text-xl font-medium text-gray-700"
              >
                Mật khẩu
              </label>
              <input
                type="password"
                name="password"
                id="register-password"
                value={registerForm.password}
                onChange={handleRegisterChange}
                className="mt-1 block w-full px-3 py-2 text-xl border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label
                htmlFor="confirm-password"
                className="block text-xl font-medium text-gray-700"
              >
                Nhập lại mật khẩu
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirm-password"
                value={registerForm.confirmPassword}
                onChange={handleRegisterChange}
                className="mt-1 block w-full px-3 py-2 text-xl border border-gray-300 rounded-md"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 text-xl font-medium text-white bg-pink-600 hover:bg-pink-700 rounded-md"
            >
              Đăng ký
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
