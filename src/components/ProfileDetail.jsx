import React from 'react';
import { useParams } from 'react-router-dom';
import MapComponent from './MapComponent';

function ProfileDetail() {
  const { id } = useParams();

  return (
    <div>
      <h1>Profile Detail</h1>
      <MapComponent profileId={id} />
    </div>
  );
}

export default ProfileDetail;
