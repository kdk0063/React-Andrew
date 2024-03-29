import classNames from 'classnames';
import useNavigation from '../hooks/use-navigation';

function Link({ to, children, className, activeClassName }) {
    const { navigate, currentPath, handleNav } = useNavigation();

    const classes = classNames(
        'text-black',
        className,
        currentPath === to && activeClassName
    )

    const handleClick = (event) => {
        if (event.ctrlKey || event.metaKey) {
            return;
        };

        event.preventDefault();

        navigate(to);
        handleNav();
    };

    return (
        <a className={classes} onClick={handleClick} href={to}>{children}</a>
    )
};
export default Link;