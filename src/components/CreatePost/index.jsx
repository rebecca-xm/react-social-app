import { useEffect, useReducer } from 'react';
import { httpPost } from '../../libs/http';
import Modal from '../Modal';
import styles from './CreatePost.module.scss';

//* SINTASSI CON USEREDUCER

const initialState = {
    formPostObj:
    {
        author: '',
        text:'',
        photo: '',
        date: new Date().toISOString(),
    },
    isModalVisible: false
};

const formReducer = (state, action) => {
    switch (action.type) {
        case "form":
            return { ...state, formPostObj: { ...state.formPostObj, [action.value]: action.payload } };
        case "modal":
            return { ...state, isModalVisible: action.payload };
        default:
            return state;
    };
};

const CreatePost = () => {
    const [state, dispatch] = useReducer(formReducer, initialState);

    const handleSendBtn = (e) => {
        e.preventDefault();
        httpPost("/posts", state.formPostObj);
        dispatch({ type: "modal", payload: !state.isModalVisible })
        setTimeout(() => {
            dispatch({ type: 'modal' })
          }, 2000);

        // setTimeout(() => {
        //     isModalVisible(false);
        // }, 2000);          <== chiedere come aggiungere settimeout
    };

    useEffect(() => {
        dispatch({ type: "modal", payload: false });
    }, [state.formPostObj]);

    return (
        <div className={styles.createPost}>
            {/* {isModalVisible &&
                <Modal bgColor={'#3498db'}
                    text={'Your post has been published'} />} */}
            <form>
                <div className={styles.__author}>
                    <input
                        value={state.formPostObj.author}
                        onChange={(e) => dispatch({ type: "form", value: "author", payload: e.target.value })}
                        name='author'
                        id='author'
                        type='text'
                        placeholder='Author'
                        required />

                    <input
                        value={state.formPostObj.photo}
                        onChange={(e) => dispatch({ type: "form", value: "photo", payload: e.target.value })}
                        name='photo'
                        id='photo'
                        type='photo'
                        placeholder='photo URL' />

                    <button
                        type="submit"
                        onClick={handleSendBtn}>
                        Send
                    </button>
                    {state.isModalVisible &&
                        <Modal
                            bgColor={'#3498db'}
                            text={'Your post has been published'}
                        />}

                </div>

                <textarea
                    value={state.formPostObj.text}
                    onChange={(e) => dispatch({ type: "form", value: "text", payload: e.target.value })}
                    name='text'
                    id='text'
                    type='text'
                    cols='30'
                    rows='10'
                    placeholder='text'
                    required>
                </textarea>
            </form>
        </div>
    )
};

export default CreatePost;

//* SINTASSI CON USESTATE
// const CreatePost = () => {
//     const [authorInput, setAuthorInput] = useState('');
//     const [photoInput, setphotoInput] = useState('');
//     const [textInput, settextInput] = useState('');
//     const [formPostObj, setFormPostObj] = useState({});
//     const [isModalVisible, setModalVisible] = useState(false);

//     // const handleAuthorInput = (event) => setAuthorInput(event.target.value); <= PREV.VALUE 
//     // const handlephotoInput = (event) => setphotoInput(event.target.value);
//     // const handletextInput = (event) => settextInput(event.target.value);
//     const handleSendBtn = (event) => {
//         event.preventDefault();
//         httpPost('/posts', formPostObj);
//         setModalVisible(true);
//         // alert('Your post has been created');

//         setTimeout(() => {
//             setModalVisible(false);
//         }, 2000);
//     };

//     useEffect(() => {
//         setFormPostObj({
//             author: authorInput,
//             text: textInput,
//             date: new Date().toISOString(),
//             photo: photoInput
//         });
//     }, [authorInput, photoInput, textInput])

//     return (
//         <div className={styles.createPost}>
//         {isModalVisible && <Modal bgColor={'#3498db'} text={'Your post has been published'}/>}
//             <form>
//                 <div className={styles.__author}>
//                     <input
//                         value={authorInput}
//                         onChange={(e) => setAuthorInput(e.target.value)}
//                         name='author'
//                         id='author'
//                         type='text'
//                         placeholder='Author'
//                         required />

//                     <input
//                         value={photoInput}
//                         onChange={(e) => setphotoInput(e.target.value)}
//                         name='photo'
//                         id='photo'
//                         type='photo'
//                         placeholder='photo URL' />

//                     <button onClick={handleSendBtn} type='submit'>
//                         SEND
//                     </button>
//                 </div>

//                 <textarea
//                     value={textInput}
//                     onChange={(e) => settextInput(e.target.value)}
//                     name='text'
//                     id='text'
//                     type='text'
//                     cols='30'
//                     rows='10'
//                     placeholder='text'
//                     required>
//                 </textarea>
//             </form>
//         </div>
//     )
// };