import { useEffect } from "react";
import { useState } from "react"
import { Vlog } from "../vlog/Vlog";
import PropTypes from "prop-types";


export const Vlogs = ({handleClick,setTimehandler}) => {
    const [vlogs,setVlogs] = useState([]);
    useEffect(() => {
        fetch('vlog.json')
        .then(res => res.json())
        .then(data => setVlogs(data))


    },[]);
    // console.log(vlogs);
  return (
    <div className="md:w-2/3">
        <h1>length : {vlogs.length}</h1>
        {
            vlogs.map(vlog => <Vlog handleClick={handleClick} vlog={vlog} key={vlog.id} setTimehandler={setTimehandler} ></Vlog> )
        }
        </div>
  )
}
Vlogs.propTypes={
    handleClick: PropTypes.func,
    setTimehandler: PropTypes.func
}