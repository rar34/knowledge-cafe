import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
   
    
    return (
        <div className="md:w-1/3 bg-gray-200 p-4 rounded-lg">
            <h3 className='text-2xl text-[#6047EC] font-semibold mb-2'>Spent time on read: {readingTime} minute</h3>
            <h2 className="text-2xl font-bold">Bookmarked Blog: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
            
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;