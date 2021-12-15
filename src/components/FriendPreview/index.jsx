import styles from "./FriendPreview.module.scss";

const FriendPreview = (props) => {
    const data = props.data || {
        name: 'Friend', 
        photo: 'https://64.media.tumblr.com/5d61946de95c9cc2bfd6107c122230ac/540f0b61cb5a11f6-85/s400x600/091bc0e2aa27eae3304290cd1fd59b22ea262b9c.png'
    };                                                              // <= DATI DI PLACEHOLDER
    return (
        <div className={styles.friend}>
            <img src={data.photo} alt={data.name} />
            <p>{data.name}</p>
        </div>
    );
};

export default FriendPreview;