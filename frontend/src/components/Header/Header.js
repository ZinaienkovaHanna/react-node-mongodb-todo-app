import sunIcon from '../../images/icon-sun.svg';
import moonIcon from '../../images/icon-moon.svg';

import styles from './Header.module.css';

function Header({ isSun, setIsSun }) {
    const handleToggle = () => {
        setIsSun(!isSun);
    };

    return (
        <div className={styles.headerContainer}>
            <h1>TODO</h1>
            {isSun ? (
                <img src={moonIcon} alt="Moon" onClick={handleToggle} />
            ) : (
                <img src={sunIcon} alt="Sun" onClick={handleToggle} />
            )}
        </div>
    );
}

export default Header;
