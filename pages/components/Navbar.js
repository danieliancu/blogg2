import Link from 'next/link'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { useContext } from 'react'
import { ThemeContext } from '../_app'

const Navbar = () => {

  const {theme, setTheme} = useContext(ThemeContext)

  return (
    <div className="w-full bg-black text-white p-5 md:px-0 border-b-2 border-white">
        <div className="max-w-screen-md flex justify-between items-center m-auto">
            <div>
                <Link href="/">Home</Link>
            </div>
            <div>
                <Link href="/admin">Admin</Link>
                <button
                    style={{marginLeft:"15px",verticalAlign:"top",fontSize:"22px"}}
                    onClick={()=>setTheme(theme==='dark'?'light':'dark')}
                >
                    {theme=='dark'?<BsFillMoonFill />:<BsFillSunFill/>}
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar