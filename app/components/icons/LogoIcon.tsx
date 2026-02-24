import Image from "next/image"

export function LogoIcon({ size = 48 }: { size?: number }) {
  return (
    <Image
      src="/images/logo.png"
      alt="Dashboard Kit"
      width={size}
      height={size}
      className="shrink-0 rounded-full"
    />
  )
}
