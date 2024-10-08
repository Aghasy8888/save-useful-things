'use client';

import useFetchInfo from '@/hooks/useFetchInfo';
import { getData, selectAnyData } from '@/redux/features/generalSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import React, { useEffect } from 'react';

const ShowData = ({ anyData }: { anyData: {} }) => {
  const dispatch = useAppDispatch();
  const infoWeFetched = useAppSelector(selectAnyData);
  const { pending, users } = useFetchInfo();

  // useEffect(() => {
  //   dispatch(getData(anyData));
  // }, []);

  if (pending) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  console.log('infoWeFetched', infoWeFetched);
  console.log('users fetched from front', users);  

  return (
    <div>
      {/* <h3>{anyData.results[0].name}</h3> */}
      <p></p>
    </div>
  );
};

export default ShowData;
