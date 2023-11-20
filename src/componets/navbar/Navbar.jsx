import React from 'react'
import { Link} from 'react-router-dom'
import tachyons from 'tachyons'

const Navbar = () =>{
    return(
         <>
            <nav className="db dt-l w-100 border-box pa3 ph5-l">
                <div className="db dtc-l v-mid w-100 w-75-l tc tr-l pt4 ">
                    <Link className="link dim f6 f5-l dib mr3 mr4-l grow white" to="/" title="Home">Home</Link>
                    <Link className="link dim  f6 f5-l dib mr3 mr4-l grow white" to="store" title="Store">Store</Link>
                    <Link className="link dim  f6 f5-l dib mr3 mr4-l grow white" to="music" title="Album & EP">Album & Songs</Link>
                    <Link className="link dim f6 f5-l dib mr3 mr4-l grow white" to="player" title="Player">Player</Link>
                    <Link className="link dim f6 f5-l dib mr3 mr4-l grow white" to="video" title="Videos">Videos</Link>
                </div>
            </nav>
         </>   
    )
}

export default Navbar;