import { signIn, signOut, useSession } from 'next-auth/react'
import { api } from '~/utils/api'

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession()

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  )

  return (
    <button
      className="rounded-full px-4 font-semibold text-white dark:text-dark-900 bg-dark-900 dark:bg-ligth-100 no-underline transition"
      onClick={sessionData ? () => void signOut() : () => void signIn()}
    >
      {sessionData ? 'Sign out' : 'Sign in'}
    </button>
    // <div className="flex flex-col items-center justify-center gap-4">
    //   {/* <p className="text-center text-white">
    //     {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
    //     {secretMessage && <span> - {secretMessage}</span>}
    //   </p> */}
    //   <button
    //     className="rounded-full bg-white/10 px-4 py-2 font-semibold text-white no-underline transition hover:bg-white/20"
    //     onClick={sessionData ? () => void signOut() : () => void signIn()}
    //   >
    //     {sessionData ? "Sign out" : "Sign in"}
    //   </button>
    // </div>
  )
}

export default AuthShowcase
