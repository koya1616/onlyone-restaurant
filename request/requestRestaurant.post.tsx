'use server'

const requestRestaurant = async (values: {
  name: string;
  information: string;
}) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/restaurant/request`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });

  if (response.status === 400) {
    throw new Error('E400');
  }
  if (!response.ok) {
    throw new Error('E500');
  }

  return await response.json();
}

export default requestRestaurant;