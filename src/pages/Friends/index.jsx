import { useEffect, useState } from 'react';
import { http } from '../../libs/http';
import FriendPreview from '../../components/FriendPreview';
import styles from './Friends.module.scss';

const Friends = () => {
    const [friendsList, setFriendsList] = useState([]);

    useEffect(() => {
        http('/friends').then((friendsList) => setFriendsList(friendsList))
    }, []);

    return (
        <div className={styles.friends}>
            {friendsList.map((friend) => (
                <FriendPreview data={friend} key={friend.id} />
            ))}
        </div>
    );
};

export default Friends;