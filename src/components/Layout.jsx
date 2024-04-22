import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Outlet } from 'react-bootstrap-icons'
import { useNavigate } from 'react-router-dom';


function Layout() {

    const [shouldRefetch, setShouldRefetch] = useState(false);
    const navigate = useNavigate();
    const [showOverlay, setShowOverlay] = useState(localStorage.getItem('overlay_state') === 'open');


    const toggleOverlay = () => {
        const newOverlayState = !showOverlay;
        setShowOverlay(newOverlayState);
        localStorage.setItem('overlay_state', newOverlayState ? 'open' : 'close')
      }
    
      useEffect(() => {
        if(shouldRefetch){
          navigate(0);
          setShouldRefetch(false);
    
        }
      },[shouldRefetch, navigate])

  return (
    <div>
         <Header toggleOverlay={toggleOverlay} setShouldRefetch={setShouldRefetch}/>
         <div>
            <Outlet />
         </div>
        <div>
            <p>&copy; 2024</p>
        </div>
    </div>
  )
}

export default Layout