'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const adminLogin = async (values: {
  whoareyou?: string;
  password?: string;
}) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/admin/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });

  if (response.status === 401) {
    redirect('/admin/login');
  }
  if (!response.ok) {
    redirect('/sorry');
  }

  const data = await response.json();
  cookies().set("token", data.token);
  return data;
}

export default adminLogin;