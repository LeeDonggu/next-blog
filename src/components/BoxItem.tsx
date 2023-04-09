interface Box404Props {
  text: string
}

const BoxItem = ({ text }: Box404Props) => {
  return (
    <div className="w-full h-full bg-white rounded-md">
      <p className="text-black">{text}</p>
    </div>
  )
}

export default BoxItem
