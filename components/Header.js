import Image from 'next/image'
import React from 'react'
import { HomeIcon,BoltIcon,MagnifyingGlassCircleIcon,UserIcon,CheckBadgeIcon,WalletIcon } from '@heroicons/react/24/outline'
import HeaderItem from './HeaderItem'
function Header() {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
    
    <div className='flex flex-grow justify-evenly max-w-2xl'>
    <HeaderItem title='HOME' Icon={HomeIcon}/>
    <HeaderItem title='TRENDING' Icon={BoltIcon}/>
    <HeaderItem title='ACCOUNT' Icon={UserIcon}/>
    <HeaderItem title='SEARCH' Icon={MagnifyingGlassCircleIcon}/>
    <HeaderItem title='VERIFIED' Icon={CheckBadgeIcon}/>
    <HeaderItem title='COLLECTION' Icon={WalletIcon}/>
    </div>

    <Image src='https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png' width={100} height={100}/>
    </header>
  )
}

export default Header