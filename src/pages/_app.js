import '@/styles/globals.css'
import { siteConfig } from "../config/site"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { fontSans } from "@/lib/fonts"
import { SiteHeader } from "@/components/static/nav"
import { SiteFooter } from "@/components/static/footer"
import { Toaster } from "@/components/ui/toaster"
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation, I18nextProvider } from 'react-i18next';
import i18n from '../../i18n'; 


export default function App({ Component, pageProps }) {
  const router = useRouter();
  
  useEffect(() => {
    if(typeof window === 'undefined') return;
    window.play = {
        pop: () => {
            const musicSound = document.createElement('audio');
            musicSound.src = '/audio/click.mp3';
            musicSound.play();

            setTimeout(() => {
                musicSound.remove();
            }, 1000);
        }
    }

    const onClick = (e) => {
        const isLink = (e.target).closest('a') || (e.target).classList.contains('mouse-click');
        if (isLink) {
            window.play.pop();
        }
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  },[]);
  
  return <>

        <div
          className={cn(
            "min-h-screen  bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <I18nextProvider i18n={i18n}>
            <div className=" flex min-h-screen flex-col max-w-5xl mx-auto ">
              <SiteHeader />
              <div className="flex-1 z-40"><Component {...pageProps} /></div>
              <Toaster />
              <SiteFooter />
              <div className='w-full z-10 relative'>
              <div className="layout-color layout-right "></div>
              <div className="layout-color layout-left "></div>
              </div>
            </div>
            </I18nextProvider>
          </ThemeProvider>
        </div>
       
  </>
}
