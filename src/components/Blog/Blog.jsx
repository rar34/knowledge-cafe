import PropTypes from 'prop-types';
import { FaRegBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    // console.log(blog)
    const {title,cover, author, author_img,posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-20 space-y-3'>
            <img className='rounded-lg mt-6 w-full' src={cover} alt={`Cover picture of the ${title}`} />
            <div className='flex justify-between my-2'>
                <div className='flex gap-6'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h4 className='text-xl lg:text-2xl font-bold'>{author}</h4>
                        <p className='font-medium'>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmark(blog)} className='ml-2 text-xl'><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>


            <h3 className='lg:text-4xl md:text-2xl font-bold'>{title}</h3>
            {
                hashtags.map((has, idx) => <span key={idx}> <a href="">{has}</a></span> )
            }
            <br />
            <button onClick={() => handleMarkAsRead(blog.reading_time)} className='underline text-blue-500 text-xl font-semibold' href="">Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func
}

export default Blog;