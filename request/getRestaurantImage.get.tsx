'use server'

const getRestaurantImage = async (id: string) : Promise<string[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HONO_API_ENDPOINT}/restaurants/${id}/images`, {
    method: 'GET',
    cache: 'no-cache',
  });

  return response.json();
}

export default getRestaurantImage;