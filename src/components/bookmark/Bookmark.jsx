
import PropTypes from 'prop-types';
function Bookmark({bookmark}) {
    console.log(bookmark);
    // const {title} = bookmark;
  return (
    <div className='bg-slate-100 p-4 ml-12 mt-2 rounded-xl '>

        <h3>{bookmark.title}</h3>
    </div>
  )
}
Bookmark.propTypes={
    bookmark:PropTypes.object
}
export default Bookmark