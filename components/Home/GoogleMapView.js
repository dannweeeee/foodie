import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

function GoogleMapView() {
  const { isLoaded } = useJsApiLoader({
    id: ['ec7be0fc20bd33e8'],
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  });
  const coordinate = {lat:-34.397, lng:150.644}
  const containerStyle = {
    width: '100%',
    height: '500px',
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={coordinate}
      zoom={12}
      options={{id:'ec7be0fc20bd33e8'}}
    >
    </GoogleMap>
  ) : (
    <div>Loading...</div>
  );
}

export default GoogleMapView;
