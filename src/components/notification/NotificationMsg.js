import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearNoti } from "../../redux/actions/productAction"

function NotificationMsg({ notification }) {
    const dispatch = useDispatch()

        
      useEffect( () =>{
        setTimeout(() => {
            // You can invoke sync or async actions with `dispatch`
            dispatch(clearNoti(notification));
            console.log("inside timeout")
          }, 3000);
      },[notification])
      
    return (
        <div className=''>
            <div className={`alert ${notification.type}  alert-dismissible fade show`} role="alert">
                {notification.massage}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    );
}

export default NotificationMsg; 