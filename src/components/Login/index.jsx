// import styles from './Login.module.scss';

const Login = (props) => {
    const handleSendBtn = (event) => {
        event.preventDefault();
    };

    return (
        <div className="loginWrapper">
            <h1>Please Log In</h1>
            <form>
                <div>
                    <input
                        value={props.user}
                        onChange={(e) => ({ user: e.target.value })}
                        name="username"
                        id="username"
                        type="text"
                        placeholder="UserName"
                        required
                    />
                    <input
                        value={props.password}
                        onChange={(e) => ({ password: e.target.value })}
                        name="password"
                        id="password"
                        type="text"
                        placeholder="Password"
                    />
                </div>
                <button type="submit" onClick={handleSendBtn}>Enter</button>
            </form>
        </div>
    );
};

export default Login;