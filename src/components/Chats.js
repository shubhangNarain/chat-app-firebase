import React from 'react'
import { useHistory } from 'react-router-dom';
import { ChatEngine} from 'react-chat-engine';
import { auth } from '../firebase';

import { useAuth } from '../contexts/AuthContext';

const Chats = ()  => {
    const history = useHistory();
    const { user } = useAuth();

    console.log(user);

    const handleLogout = async () => {
        await auth.signOut();
        history.push('/login');
    }

    return (
        <div className="chats-page">
            <div className='nav-bar'>
                <div className='logo-tab'>
                    snvChat
                </div>
                <div onClick={handleLogout} className='logout-tab'>
                    Logout
                </div>
            </div>

            <ChatEngine
                height="calc(100vh - 66px)"
                projectId="f0c14315-6267-47dc-9af6-34ddaafa569d"
                userName="."
                userSecret="."
            />
        </div>
    );
}

export default Chats;
