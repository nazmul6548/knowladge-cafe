import Bookmark from "../bookmark/Bookmark"

import PropTypes from 'prop-types'

const Bookmarks = ({bookmarks,readingtime}) => {
  return (
    <div className="md:w-1/3">
        <div>
        <h1 className="ml-12 bg-purple-200 p-5 mt-2 rounded-xl font-bold text-xl">Reading Time : {readingtime}</h1>
        </div>
    <h1 className="ml-12 mt-5 text-center mb-5">Bookmarks blog: {bookmarks.length}</h1>
   {
    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
   }
    </div>
  )
}

Bookmarks.propTypes = {
    bookmarks : PropTypes.array,
    readingtime: PropTypes.number
}

export default Bookmarks