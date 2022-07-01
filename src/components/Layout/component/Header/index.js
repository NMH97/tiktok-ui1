import classNames from 'classnames/bind';
import Style from './Header.module.scss';
const cx = classNames.bind(Style);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}></div>
        </header>
    );
}

export default Header;
