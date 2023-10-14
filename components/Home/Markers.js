import { MarkerF, OverlayView } from '@react-google-maps/api'
import BusinessItem from './BusinessItem'
import React, { useContext } from 'react'
import { SelectedBusinessContext } from '../../context/SelectedBusinessContext';

function Markers ({business}) {
  const {selectedBusiness, setSelectedBusiness} = useContext(SelectedBusinessContext);
  return (
    <div>
      <MarkerF 
        position={business.geometry.location}
        onClick={() => setSelectedBusiness(business)}
        icon={{
          url:'/marker.png',
          scaledSize: {
            width: 30,
            height: 30,
          }
        }}
      >
        {selectedBusiness.reference == business.reference?
          <OverlayView
            position={business.geometry.location}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div className='ml-[-95px] mt-[-240px]'>
              <BusinessItem business={business} />
            </div>
          </OverlayView> 
          : null 
        }
      </MarkerF>
    </div>
  )
}

export default Markers
