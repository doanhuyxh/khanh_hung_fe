'use client'

import { useState } from 'react';
export default function Home() {

  const [email, setEmail] = useState<string>('123213123@gmail.com');
  const [password, setPassword] = useState<string>('123213123');


  const submitForm = () => {
    
    fetch('https://localhost:44387/api/Auth/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
      credentials: 'include',
    })
    .then(res => res.json())
    .then(data => console.log(data))

  }


  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Đăng nhập</h2>
            <p className="mt-2 text-lg text-gray-600">Hoặc <a href="#" className="font-medium text-color-primary hover:text-hover-primary">đăng ký tài khoản mới</a></p>
          </div>
          <form className="mt-8 space-y-6" >
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email" type="email" required className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-color-primary focus:border-color-primary focus:z-10 sm:text-lg" placeholder="Nhập email của bạn" />
              </div>
              <div>
                <label htmlFor="password" className="block text-lg font-medium text-gray-700">Mật khẩu</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} id="password" name="password" type="password" required className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-color-primary focus:border-color-primary focus:z-10 sm:text-lg" placeholder="Nhập mật khẩu" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-color-primary focus:ring-color-primary border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-lg text-gray-900">Ghi nhớ đăng nhập</label>
              </div>

              <div className="text-lg">
                <a href="#" className="font-medium text-color-primary hover:text-hover-primary">Quên mật khẩu?</a>
              </div>
            </div>

            <div>
              <button type="button" onClick={submitForm} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-color-primary hover:bg-hover-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-color-primary">
                Đăng nhập
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
