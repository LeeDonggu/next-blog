import Link from 'next/link'

const Custom404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#cbcde5] gap-6">
      <p className="text-white font-bold">404 Not Found Page Example</p>
      <Link href="/" className="px-2 py-2 bg-red-300 rounded-md">
        <span className="text-white">HOME</span>
      </Link>
    </div>
  )
}

export default Custom404
