import { LogoIcon } from "@/app/components/icons/LogoIcon"

export function LoginHeader() {
  return (
    <div className="flex flex-col items-center gap-3">
      <LogoIcon size={48} />
      <span className="text-lg font-bold text-muted-foreground opacity-70">
        Dashboard Kit
      </span>
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-2xl font-bold text-foreground text-balance">
          Log In to Dashboard Kit
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your email and password below
        </p>
      </div>
    </div>
  )
}
