import classNames from 'classnames/bind';
import style from './DefaultLayout.module.scss';

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <h1>HEADER LAYOUT</h1>
            <div className={cx('content')}>{children}</div>
        </div>
    );
}

export default DefaultLayout;
