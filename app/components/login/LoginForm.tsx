"use client"

import { motion } from "framer-motion"
import { useLoginForm } from "@/app/hooks/useLoginForm"
import { LoginHeader } from "./LoginHeader"
import { LoginFooter } from "./LoginFooter"
import { FormField } from "./FormField"
import { PasswordInput } from "./PasswordInput"

export function LoginForm() {
  const { email, setEmail, password, setPassword, errors, handleSubmit } = useLoginForm()

  return (
    <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: "easeOut" }} className="flex w-full flex-col gap-6">
      <LoginHeader />
      <div className="flex flex-col gap-5">
        <FormField label="Email" htmlFor="email" error={errors.email}>
          <input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" className="h-11 w-full rounded-lg border border-input bg-card px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none" />
        </FormField>
        <FormField label="Password" htmlFor="password" error={errors.password} endAction={<button type="button" className="text-xs font-semibold text-muted-foreground hover:text-primary">Forgot password?</button>}>
          <PasswordInput id="password" value={password} onChange={setPassword} />
        </FormField>
      </div>
      <button type="submit" className="h-12 w-full rounded-lg bg-primary font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
        Log In
      </button>
      <LoginFooter />
    </motion.form>
  )
}
