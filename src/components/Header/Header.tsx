import Link from 'next/link'
import AuthShowcase from './AuthShowCase'
import { setLocalStorageItem } from '~/utils/localStorage'
import { memo } from 'react'

const Header = () => {
  const handleChangeTheme = () => {
    const hasClassNameDark = document.documentElement.classList.value === 'dark'
    if (hasClassNameDark) {
      document.documentElement.classList.remove('dark')
      setLocalStorageItem('theme', 'light')
      return
    }
    document.documentElement.classList.add('dark')
    setLocalStorageItem('theme', 'dark')
  }

  return (
    <div className="flex h-full box-border justify-between items-center dark:text-white ">
      <div className="flex-auto">
        <Link href="/">MunTestApp</Link>
      </div>
      <div className="flex gap-4">
        <button onClick={handleChangeTheme}>DarkMode</button>
        {/* <button>로그인</button> */}
        <AuthShowcase />
      </div>
    </div>
  )
}

export default memo(Header)
