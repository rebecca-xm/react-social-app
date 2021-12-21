import styles from './Footer.module.scss';

const Footer = () => {
    const year = new Date().getFullYear();                  //* per renderizzare sempre la data attuale
    return (
    <footer className={styles.footer}>
        <hr />
        <p>Copyright Edgemony - {year}</p>
    </footer>
    );
};

export default Footer;