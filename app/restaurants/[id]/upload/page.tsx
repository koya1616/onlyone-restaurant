import React from 'react';
import INeedYou from '../../../../components/iNeedYou';
import getRestaurantImage from '../../../../request/getRestaurantImage.get';

const UploadImage = async ({ params }: { params: { id: string } }) => {
  const images = await getRestaurantImage(params.id);
  return (
    <INeedYou params={params} images={images} />
  );
}

export default UploadImage;
