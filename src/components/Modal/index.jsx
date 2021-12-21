import styles from './Modal.module.scss';

const Modal = (props) => {
    return (
        <div className={styles.Modal}>
            {props.text}
        </div>
    )
}

export default Modal;