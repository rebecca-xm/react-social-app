import styles from "./MessagePreview.module.scss";
import { DateInfo } from "./../Date/Date.jsx";

const MessagePreview = (props) => {
    const data = props.data || {
        text: 'lorem ipsum', date: new Date(), sender: 'user',
    };

    return (
        <div className={styles.message}>
            <h5>{data.sender}</h5>
            <p>
                <small><DateInfo relative={data.date} /></small>
            </p>
            <p>{data.text}</p>
        </div>
    );
};

export { MessagePreview };