
import { useState } from 'react'
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { Header } from './components/Header/Header'
import { Vlogs } from './components/vlogs/Vlogs'

function App() {

  const [bookmarks,setBookmark] = useState([])
  const [readingtime,setReadingtime] = useState(0)
  const handleClick = vlog => {
    // console.log(vlogs);
    const newbookmark =[...bookmarks,vlog]
    setBookmark(newbookmark)
// console.log(newbookmark);
  }
  const setTimehandler = time => {
const newreadingtime = readingtime + time;
setReadingtime(newreadingtime)
  }
 

  return (
    <div className='max-w-6xl mx-auto'>
     
      <Header></Header>
      <div className='md:flex'>
      <Vlogs handleClick={handleClick} setTimehandler={setTimehandler}></Vlogs>
      <Bookmarks bookmarks={bookmarks} readingtime={readingtime}></Bookmarks>
      </div>
    </div>
  )
}

export default App
