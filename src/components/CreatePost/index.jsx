import { useState, useEffect } from 'react';
import { httpPost } from '../../libs/http';
import Modal from '../Modal';
import styles from './CreatePost.module.scss';

// const modal = () => {
//     return (
//         <div>Your post has been published</div>
//     )
// }

const CreatePost = () => {
    const [authorInput, setAuthorInput] = useState('');
    const [imgInput, setImgInput] = useState('');
    const [messageInput, setMessageInput] = useState('');
    const [formPostObj, setFormPostObj] = useState({});
    const [isModalVisible, setModalVisible] = useState(false);

    // const handleAuthorInput = (event) => setAuthorInput(event.target.value); <= PREV.VALUE 
    // const handleImgInput = (event) => setImgInput(event.target.value);
    // const handleMessageInput = (event) => setMessageInput(event.target.value);
    const handleSendBtn = (event) => {
        event.preventDefault();
        httpPost('/posts', formPostObj);
        setModalVisible(true);
        // alert('Your post has been created');

        setTimeout(() => {
            setModalVisible(false);
        }, 2000);
    };

    useEffect(() => {
        setFormPostObj({
            author: authorInput,
            text: messageInput,
            date: new Date().toISOString(),
            photo: imgInput
        });
    }, [authorInput, imgInput, messageInput])

    return (
        <div className={styles.createPost}>
        {isModalVisible && <Modal bgColor={'#3498db'} text={'Your post has been published'}/>}
            <form>
                <div className={styles.__author}>
                    <input
                        value={authorInput}
                        onChange={(e) => setAuthorInput(e.target.value)}
                        name='author'
                        id='author'
                        type='text'
                        placeholder='Author'
                        required />

                    <input
                        value={imgInput}
                        onChange={(e) => setImgInput(e.target.value)}
                        name='img'
                        id='img'
                        type='img'
                        placeholder='Img URL' />

                    <button onClick={handleSendBtn} type='submit'>
                        SEND
                    </button>
                </div>

                <textarea
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    name='message'
                    id='message'
                    type='text'
                    cols='30'
                    rows='10'
                    placeholder='message'
                    required>
                </textarea>
            </form>
        </div>
    )
};

export default CreatePost;