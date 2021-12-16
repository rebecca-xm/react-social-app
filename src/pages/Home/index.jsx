import { useState, useEffect } from 'react';
import FriendPreview from '../../components/FriendPreview';
import { MessagePreview } from '../../components/MessagePreview';
import styles from './Home.module.scss';
import { Post } from '../../components/Post';
import { http } from '../../libs/http';

const friends = [];

const messages = [];

const posts = [];

const Home = () => {
    const [friendsPreview, setFriendsPreview] = useState(friends);           // informazione che sarà monitorata dal componente React
    // equivale a => const friendsPreview = [];
    const [allPosts, setAllPosts] = useState(posts);
    const [messagesPreview, setMessagesPreview] = useState(messages);

    //! fetch('https://edgemony-backend.herokuapp.com/friends?_limit=4')
    //! .then(response => response.json())
    //! .then(data => setFriendsPreview(data));         
    //! ^ sposto la funzione in useEffect() perché m'interessa che il codice venga eseguito solo in uno specifico momento

    //* SINTASSI PRE CREAZIONE HTTP.JS
    // useEffect(() => {
    //     fetch('https://edgemony-backend.herokuapp.com/friends?_limit=4')
    //         .then(response => response.json())
    //         .then(data => setFriendsPreview(data));

    //         fetch('https://edgemony-backend.herokuapp.com/posts')
    //         .then(response => response.json())
    //         .then(data => setAllPosts(data));

    //         fetch('https://edgemony-backend.herokuapp.com/messages?_limit=4')
    //         .then(response => response.json())
    //         .then(data => setMessagesPreview(data));
    // }, []);

    //* SINTASSI POST CREAZIONE HTTP.JS
    useEffect(() => {
        http('/friends?_limit=4').then(data => setFriendsPreview(data));
        http('/posts').then(data => setAllPosts(data));
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

//! RICORDA: UN COMPONENTE JSX DEVE RITORNARE SEMPRE UN SOLO ELEMENTO PARENTE

//* PROPS E STATI
// Le props dicono "questi sono dati che vengono dall'esterno del componente"
// Lo stato fa il contrario, indica che i dati sono interni al componente e per questo se li manipola lui

//* LINTER - WARNINGS 15/12
// gli strumenti di linting sono strumenti di controllo stilistico
// quindi non di qualcosa che non funziona ma di qualcosa che andrebbe fatto meglio
// nel caso del problema riscontrato il 15/12 si trattava per esempio delle variabili non assegnate