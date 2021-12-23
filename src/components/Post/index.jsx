import styles from './Post.module.scss';
import { useState } from 'react';
import { DateInfo } from "./../Date/Date.jsx";
import { httpDELETE } from '../../libs/http';
import Modal from '../Modal';

const Post = (props) => {
    const data = props.data || {
        author: 'user',
        text: 'text',
        date: new Date(),
        photo: 'https://images.unsplash.com/photo-1511149672083-577ee63de3dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
    };

    const handleDeletePost = () => {
        httpDELETE(`/posts/${props.data.id}`).then(() => { });
        // alert(`Post by ${props.author} was deleted`);
        setModalVisible(true);

        setTimeout(() => {
            setModalVisible(false);
            window.location.href = '/';
        }, 2000);
    };

    const [isModalVisible, setModalVisible] = useState(false);

    return (
        <article className={styles.post}>
            {isModalVisible && <Modal bgColor={'red'} text={'This post has been deleted'} />}
            <button onClick={handleDeletePost}>X</button>
            <h3>{data.author}</h3>
            <p>
                <small>{data.date ? <DateInfo relative={data.date} /> : <></>}</small>
            </p>
            <p>{data.text}</p>

            {data.photo ? <img src={data.photo} alt={data.author} /> : <></>}
        </article>
    );
};

export { Post };