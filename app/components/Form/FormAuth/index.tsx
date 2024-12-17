'use client';

import axiosCustomerConfig from '@/app/libs/configs/axiosCustomerConfig';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { ResponseData } from '@/app/libs/types';

export default function AuthTabs() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('login');
  const [loginForm, setLoginForm] = useState({
    email: 'user1',
    password: '123456'
  });
  const [registerForm, setRegisterForm] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axiosCustomerConfig.post('/Auth/Login', loginForm)
      .then((response) => {
        if (response.code === 200) {
          router.push('/learn/study');
        } else {
          toast.error("Tài khoản hoặc mật khẩu không đúng", {
            duration: 3000,
            position: "top-right",
          });
        }
      })
      .catch(error => {
        console.error('Error logging in:', error);
        toast.error("Tài khoản hoặc mật khẩu không đúng", {
          duration: 3000,
          position: "top-right",
        });
      });   
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(registerForm);
    if (registerForm.password !== registerForm.confirmPassword) {
      toast.error("Mật khẩu không khớp", {
        duration: 3000,
        position: "top-right",
      });
      return;
    }

    axiosCustomerConfig.post('/Auth/Register', registerForm)
      .then((response) => {
        if (response.code === 201) {
          toast.success("Đăng ký thành công, vui lòng đăng nhập", {
            duration: 3000,
            position: "top-right",
          });
        }
        else{
          toast.error("Đăng ký thất bại", {
            duration: 3000,
            position: "top-right",
          });
        }
      })
      .catch(error => {
        console.error('Error registering:', error);
      });
  };

  return (
    <div className="lg:w-1/2 w-full max-w-md text-xl">
      <div className="bg-white rounded-lg shadow-xl p-8">
        <div className="flex mb-6 border-b border-gray-200">
          <button
            className={`w-1/2 py-2 text-center font-semibold text-xl ${
              activeTab === 'login' ? 'border-b-2 border-purple-600 text-purple-600' : 'text-gray-500'
            }`}
            onClick={() => handleTabClick('login')}
          >
            Đăng nhập
          </button>
          <button
            className={`w-1/2 py-2 text-center font-semibold text-xl ${
              activeTab === 'register' ? 'border-b-2 border-pink-600 text-pink-600' : 'text-gray-500'
            }`}
            onClick={() => handleTabClick('register')}
          >
            Đăng ký
          </button>
        </div>

        {activeTab === 'login' && (
          <form onSubmit={handleLogin} className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Đăng nhập</h2>

            <div>
              <label htmlFor="email" className="block text-xl font-medium text-gray-700">Email</label>
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
              <label htmlFor="password" className="block text-xl font-medium text-gray-700">Mật khẩu</label>
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

        {activeTab === 'register' && (
          <form onSubmit={handleRegister} className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Đăng ký</h2>

            <div>
              <label htmlFor="register-email" className="block text-xl font-medium text-gray-700">Email</label>
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
              <label htmlFor="register-password" className="block text-xl font-medium text-gray-700">Mật khẩu</label>
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
              <label htmlFor="confirm-password" className="block text-xl font-medium text-gray-700">Nhập lại mật khẩu</label>
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
