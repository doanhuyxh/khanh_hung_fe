import { cookies } from "next/headers";
import Header from "../components/Headers/Customer";
import "../styles/study.scss";
import { Customer } from "../libs/types";

export default async function LearnLayout({ children }: { children: React.ReactNode }) {

  const cookieStore = await cookies()
  const accessToken = cookieStore.get("AccessToken")
  const refreshToken = cookieStore.get("RefreshToken")

  let user: Customer = {} as Customer
  if (accessToken && refreshToken) {
    const res = await fetch('http://localhost:5035/api/v1/customer/get-info', {
      headers: {
        'Authorization': `Bearer ${accessToken.value}`,
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
    if (res.ok) {
      const res_data = await res.json()
      user = res_data.data
    }

  }

  return (
    <>
      <Header user={user} />
      {children}
    </>
  );
}
