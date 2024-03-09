import React from 'react';
import Adminmin from  '../../components/adminmin'
import doItDoApprove from '../../request/getPendingRestaurants.get'

const AdminTop = async () => {
  const data = await doItDoApprove()

  return (
    <>
      <Adminmin pendingRestaurants={data.pendingRestaurants} loading={!data || !data.pendingRestaurants} />
    </>
  )
}

export default AdminTop;
