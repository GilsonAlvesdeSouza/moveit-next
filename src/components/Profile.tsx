import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="img/images.jpeg" alt="Bruxa Cadaver" />
            <div>
                <strong>Franciele</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    level 1
                </p>
            </div>
        </div>
    );
}