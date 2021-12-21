import styles from './Home.module.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessagePreview } from '../../components/MessagePreview';
import { Post } from '../../components/Post';
import { http } from '../../libs/http';
import FriendPreview from '../../components/FriendPreview';

const friends = [];

const messages = [];

const posts = [];

const Home = () => {
    const [friendsPreview, setFriendsPreview] = useState(friends);           // informazione che sarà monitorata dal componente React
    const [allPosts, setAllPosts] = useState(posts);
    const [messagesPreview, setMessagesPreview] = useState(messages);

    useEffect(() => {
        http('/friends?_limit=4').then(data => setFriendsPreview(data));
        http('/posts').then(data => setAllPosts(data.reverse()));
        http('/messages?_limit=4').then(data => setMessagesPreview(data));
    }, []);

    return (
        <section className={styles.home}>
            <h3>Benvenuto utente!</h3>
            <div className={styles.grid}>
                <aside>
                    {friendsPreview.map((friend, index) => <FriendPreview key={index} data={friend} />)}
                </aside>
                <main>
                    <Link to='/new-post'>
                        <button className={styles.createPostBtn}>+ Create a new post!</button>
                    </Link>
                    {allPosts.map((post, index) => <Post key={index} data={post} />)}
                </main>
                <aside>
                    {messagesPreview.map((message, index) => <MessagePreview key={index} data={message} />)}
                </aside>
            </div>
        </section>
    );
};

export default Home;