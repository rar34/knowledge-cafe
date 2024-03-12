import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    console.log(blog)
    const {title,cover, author, author_img,posted_date, reading_time, hashtags} = blog;
    return (
        <div>
            <img src={cover} alt={`Cover picture of the ${title}`} />
            <div className='flex justify-between'>
                <div className='flex gap-6'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h4 className='text-xl lg:text-2xl font-bold'>{author}</h4>
                        <p className='font-medium'>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>


            <h3 className='lg:text-4xl md:text-2xl font-bold'>{title}</h3>
            {
                hashtags.map((has, idx) => <span key={idx}> <a href="">{has}</a></span> )
            }
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;