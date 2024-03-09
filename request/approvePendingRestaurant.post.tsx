'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const thanks = async (id: number ) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/pending-restaurants/approve`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${cookies().get("token")?.value}`,
    },
    body: JSON.stringify({ id: id }),
  });

  if (response.status === 401) {
    redirect('/admin/login');
  }
  if (!response.ok) {
    redirect('/sorry');
  }

  return await response.json();;
}

export default thanks;