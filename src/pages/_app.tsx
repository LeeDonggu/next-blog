import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { useEffect, useState } from "react";
import { getLocalStorageItem } from "~/utils/localStorage";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [isDark, setDark] = useState<boolean | null>(null)
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const theme = getLocalStorageItem('theme')
      if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
        setDark(true)
      } else {
        document.documentElement.classList.remove('dark')
        setDark(false)
      }
    }
  }, [])

  // NOTE 페이지 새로고침시 깜빡임 UX 이슈 개선 (feat isDark, setDark)
  if (isDark === null){
    return <></>
  }

  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
