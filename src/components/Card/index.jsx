import PropTypes from 'prop-types';

export function Card({ children, className }) {
    return (
        <div className={`rounded-3xl shadow-lg ${className}`}>
            {children}
        </div>
    );
}

Card.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

Card.defaultProps = {
    children: null,
    className: '',
};

export default Card;