interface BoxItemProps {
  text: string
}

const BoxItem = ({ text }: BoxItemProps) => {
  return (
    <div className="w-full h-full bg-white rounded-md">
      <p className="text-black">{text}</p>
    </div>
  )
}

export default BoxItem
