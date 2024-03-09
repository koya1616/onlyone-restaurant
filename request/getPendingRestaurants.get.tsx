'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const doItDoApprove = async () : Promise<{ pendingRestaurants : { id: number, name: string, information: string, isapproved: boolean}[]}> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/pending-restaurants`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${cookies().get("token")?.value}`,
    },
  });

  if (response.status === 401) {
    redirect('/admin/login');
  }
  if (!response.ok) {
    redirect('/sorry');
  }

  return response.json();
}

export default doItDoApprove;