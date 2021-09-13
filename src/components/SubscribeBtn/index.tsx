import styles from './styles.module.scss';

interface SubscribeBtnProps {
    priceId: string;
}

export function SubscribeBtn(props: SubscribeBtnProps) {
    return (
        <button className={styles.subscribeBtn} type="button">
            Subscribe now
        </button>
    );
}