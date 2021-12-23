import styles from './Modal.module.scss';

const Modal = ({ bgColor, text }) => {
    return (
        <div className={styles.Modal} style={{ background: `${bgColor}` }}>
            <p>
                {text}
            </p>
        </div>
    );
};

export default Modal;