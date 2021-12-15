import { useState } from 'react';
import FriendPreview from '../../components/FriendPreview';
import {MessagePreview} from '../../components/MessagePreview';
import styles from './Home.module.scss';
import { Post } from '../../components/Post';

const friends = [
    {name: 'Will', photo: 'https://64.media.tumblr.com/2c00245b0025578d80cca4bd7248dd24/tumblr_o06kb8txMY1sjjlobo6_250.png'},
    {name: 'Alana', photo: 'https://64.media.tumblr.com/e8575b0d02e1f070e59e3662c34966ad/a85562aa88fa06dd-62/s400x600/e699838a2f2f4d21f49389d4704d6f560223e3ba.png'},
    {name: 'Margot', photo: 'https://64.media.tumblr.com/df27221d2745aa6ce1b996e400205be1/tumblr_p1b7capCQ31vd63fwo1_540.jpg'},
];

const messages = [
    {text: 'lorem ipsum', date: new Date(), sender: 'Pippo'},
    {text: 'lorem ipsum', date: new Date(), sender: 'Pluto'},
    {text: 'lorem ipsum', date: new Date(), sender: 'Topolino'},
    {text: 'lorem ipsum', date: new Date(), sender: 'Minnie'},
    {text: 'lorem ipsum', date: new Date(), sender: 'Paperino'},
];

const posts = [
    {author: 'user', text: 'Oggi ho accarezzato un bel cagnolone', date: new Date()},
    {author: 'user', text: 'Sto imparando React', date: new Date(), photo: ''},
];

const Home = () => {
    const [friendsPreview, setFriendsPreview] = useState(friends);           // informazione che sarà monitorata dal componente React
    // equivale a => const friendsPreview = [];
    const [allPosts, setAllPosts] = useState(posts); 
    const [messagesPreview, setMessagesPreview] = useState(messages); 

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