import PropTypes from 'prop-types'
import { FaBookmark } from 'react-icons/fa';

export const Vlog = ({vlog,handleClick,setTimehandler}) => {
    const {title,coverPic,readingTime,author,publishDate,hashtags} = vlog;
    
  return (
    <div className='mb-20 mt-5'>
        <img className='w-full' src={coverPic} alt={`cover picture of the title ${title}`} />
        <div className='flex justify-between items-center'>
            <div className='flex items-center m-5'>
                <div className=''>
                    <img className='w-[50px] h-[50px] rounded-[50%]' src={author.img} alt="" />
                
                </div>
                <div className='ml-5'>
                <h4 className='font-bold'>{author.name}</h4>
                <p>Publish date : {publishDate}</p>

                </div>

            </div>
            <div className='flex item-center'>
                <p >{readingTime} min read </p>
                <button onClick={() => handleClick(vlog)} className='ml-2 text-blue-200'><FaBookmark></FaBookmark></button>
            </div>
        </div>

        <h1 className='pb-5 font-bold text-3xl'>{title}</h1>
        <p className='pb-5'>
            {
                hashtags.map((hash,i) =><span key={i}><a href="">#{hash}</a></span>)
            }
        </p>
        <button onClick={() => setTimehandler(readingTime)} className='text-purple-600 font-bold underline'>Mark as read</button>
    </div>
  )
}
Vlog.propTypes ={
    vlog: PropTypes.object,
    handleClick: PropTypes.func,
    setTimehandler: PropTypes.func
}
