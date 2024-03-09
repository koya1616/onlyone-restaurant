'use server'

import { cookies } from 'next/headers'

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
    throw new Error('E401');
  }
  if (!response.ok) {
    throw new Error('E500');
  }

  return await response.json();;
}

export default thanks;