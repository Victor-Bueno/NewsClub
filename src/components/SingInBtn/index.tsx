import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

export function SignInBtn() {
    const isUserLoggedIn = true;

    return isUserLoggedIn ? (
        <button className={styles.signInBtn} type="button">
            <FaGithub color="#04d361" />
            Victor Bueno
            <FiX color="#737380" className={styles.closeIcon}/>
        </button>
    ) : (
        <button className={styles.signInBtn} type="button">
            <FaGithub color="#eba417" />
            Sign in with Github
        </button>
    );
}