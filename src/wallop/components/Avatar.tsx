import Image from "next/image"

interface AvatarProps {
  src: string
  alt: string
  size?: number
}

export function Avatar({ src, alt, size = 40 }: AvatarProps) {
  return (
    <div className={`relative rounded-full overflow-hidden`} style={{ width: size, height: size }}>
      <Image src={src || "/placeholder.svg"} alt={alt} layout="fill" objectFit="cover" />
    </div>
  )
}