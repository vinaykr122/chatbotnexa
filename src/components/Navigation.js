import React from 'react'
import logo from './NEXAlogo.png'

function Navigation() {
  return (
    <div className="w-full h-[6vh] fixed top-2 flex item-center justify-between ">
        <div className='pl-5'><img src={logo} alt="logo" className="w-50 h-40" /></div>
        <div className='pr-10 flex flex-coloum gap-2'>
          {/* <div className="p-3 border-2 rounded-lg border-green cursor-pointer">sign-In</div>
          <div className="p-3 border-2 rounded-lg border-green cursor-pointer">Sign-Up</div> */}
        </div>
    </div>
  )
}

export default Navigation