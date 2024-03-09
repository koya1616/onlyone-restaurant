'use server'

import { cookies } from 'next/headers'

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
    throw new Error('E401');
  }
  if (!response.ok) {
    throw new Error('E500');
  }

  const data = await response.json();
  cookies().set("token", data.token);
  return data;
}

export default adminLogin;