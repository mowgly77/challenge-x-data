import { LoginForm } from "@/app/components/login/LoginForm"

export default function LoginPage() {
  return (
    <main className="flex min-h-svh items-center justify-center bg-sidebar p-4 md:p-8">
      <div className="w-full max-w-sm rounded-lg bg-card p-8 shadow-sm md:max-w-md md:p-12">
        <LoginForm />
      </div>
    </main>
  )
}
