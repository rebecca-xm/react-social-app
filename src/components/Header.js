const Header = (props) => {

    //! SINTASSI PRECEDENTE ALL'AGGIUNTA DELLE PROPS:
    // const links = [
    //     { link: '/home', label: 'Home' },
    //     { link: '/friends', label: 'Friends' },
    //     { link: '/messages', label: 'Messages' }
    // ];

    //? Cosa succede se non passo dei valori alle props? Per evitare errori e di rompere il codice:
    const name = props.name || 'App'; //* se le props sono undefined indico di andare a prendere il valore da App
    const links = props.links || 'App'; //* in tal modo ci saranno sempre dei valori predefiniti già settati

    //! SINTASSI PRECEDENTE ALLA RIMOZIONE DELLE PROPS DAL JSX => {props.name} e {props.links.map}

    return (
        <header>
            <h1>{name}</h1>
            <nav>
                <ul>
                    {links.map((item, index) => (
                    <li key={index}>                            
                        <a href={item.link}>{item.label}</a>
                    </li>
                    ))}
                    {/* N.B. la chiave (KEY) permette di distinguere il singolo elemento nell'iterazione 
                    e va inserita nell'elemento più alto, in questo caso <li> */}
                    {/* SINTASSI PRECEDENTE => 
                    <li>
                        <a href="/home">Home</a>
                    </li>
                    <li>
                        <a href="/friends">Friends</a>
                    </li>
                    <li>
                        <a href="/messages">Messages</a>
                    </li> */}
                </ul>
            </nav>
        </header>
    );
};

export default Header;

//* l'export di default in genere si usa di più quando si ha un file
//* dal quale si esporta un solo modulo
//! nel caso dell'export di default il nome non è vincolante
//* se l'export è con le graffe si può usare la sintassi export {x as y} per esportarlo
//* con un nome diverso