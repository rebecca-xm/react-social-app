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

//* il module.scss fa in modo che non ci siano mai due moduli con la stessa classe e lo stesso hash
// quindi si va a ridurre il rischio ed eventuali pericoli derivanti da conflitti nel css

export default Footer;