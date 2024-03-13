import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-white mb-3 p-1 lg:p-5 rounded-lg'>
            <h3 className='text-2xl'>{title}</h3>
        </div>
    );
};
Bookmark.propTypes ={
    bookmark: PropTypes.object
}

export default Bookmark;