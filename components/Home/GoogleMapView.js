import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import { useContext, useEffect, useState } from 'react';
import { UserLocationContext } from '../../context/UserLocationContext';
import Markers from './Markers';
import { SelectedBusinessContext } from '../../context/SelectedBusinessContext';

function GoogleMapView({businessList}) {
  const {userLocation, setUserLocation} = useContext(UserLocationContext);
  const {selectedBusiness,setSelectedBusiness} = useContext(SelectedBusinessContext)
  const [map,setMap] = useState();

  const { isLoaded } = useJsApiLoader({
    id: ['google-map-script'],
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  });

  const coordinate = {lat:-34.397, lng:150.644}
  console.log(userLocation);

  const containerStyle = {
    width: '100%',
    height: '500px',
  };

  useEffect(()=>{
    if(map && selectedBusiness)
    {
     map.panTo(selectedBusiness.geometry.location);

    }
  },[selectedBusiness])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={!selectedBusiness.name? userLocation : selectedBusiness.geometry.location}
      zoom={12}
      options={{mapId: '4ccaceca683e75ce'}}
    >
      <MarkerF 
        position={userLocation}
        icon={{
          url:'/user-location.png',
          scaledSize: {
            width: 50,
            height: 50,
          }
        }}
      />
      {businessList.map((item, index) => index <= 7&& (
        <Markers business={item} key={index} />
      ))}
    </GoogleMap>
  ) : (
    <div>Loading...</div>
  );
}

export default GoogleMapView;
