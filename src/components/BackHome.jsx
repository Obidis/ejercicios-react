import { Link } from "react-router-dom";


function BackHome() {

  const reloadPage = () => {
    window.location.reload();
  }
  return (


    <p onClick={reloadPage}><Link to={"/Home"} className='btn2' >Home</Link></p>

  )
}

export default BackHome