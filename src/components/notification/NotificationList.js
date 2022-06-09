import React from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import NotificationMsg from './NotificationMsg';

function NotificationList(props) {
    const notifications = useSelector( state => state.MyActions.notification)
 console.log(notifications)
    return (
        <div className='noti'>
            {
                notifications.map( (list) => (
                    <NotificationMsg notification={list} key={list.id}/>

                ))
            }
        </div>
    );
}

export default NotificationList;