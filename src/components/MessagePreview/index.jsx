import styles from "./MessagePreview.module.scss";

const MessagePreview = (props) => {
    const data = props.data || {
        text: 'lorem ipsum', date: new Date(), sender: 'user',
    };

    const createDate = (date) => new Date(date);

    return (
        <div className={styles.message}>
            <h5>{data.sender}</h5>
            <p>
                <small>{createDate(data.date).toLocaleDateString()} - {createDate(data.date).toLocaleTimeString()}</small>
            </p>
            <p>{data.text}</p>
        </div>
    );
};

export { MessagePreview };