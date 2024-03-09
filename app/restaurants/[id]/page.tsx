import React from 'react';
import parse from 'html-react-parser';

const getOnlyOneRestaurant = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/restaurants/${id}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const UIisImportant = async ({ params }: { params: { id: string } }) => {
  const data = await getOnlyOneRestaurant(params.id)
  return (
    <div>
      <h1>{data.restaurant.id}</h1>
      <p>{data.restaurant.name}</p>
      <p>{data.restaurant.description}</p>
      <p>{data.restaurant.gmap}</p>
      {parse(data.restaurant.iframe)}
    </div>
  );
}

export default UIisImportant;