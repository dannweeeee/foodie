import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import { useContext } from 'react';
import { UserLocationContext } from '../../context/UserLocationContext';

function GoogleMapView() {
  const {userLocation, setUserLocation} = useContext(UserLocationContext);
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

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={userLocation}
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
    </GoogleMap>
  ) : (
    <div>Loading...</div>
  );
}

export default GoogleMapView;
