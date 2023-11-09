import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import {
    Card,
 
  } from "@/components/ui/card"

export function SiteFooter() {
    return (
        <div className="w-full z-20 bg-transparent">
            <div className="mx-4 sm:mx-0 flex flex-warp items-center justify-between py-4 sm:flex-row sm:space-y-0">
                <div className="flex flex-warp items-center space-x-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                    <Link href={siteConfig.links.discord} target="_blank" rel="noreferrer">
                        <div className={buttonVariants({
                            size: "icon",
                            variant: "ghost",
                        })}>
                            <Icons.discord className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                        </div>
                    </Link>
                   
                </div>
       
                <div className="text-sm text-gray-500">
                    Made with <span className="text-red-500">♥</span> by <a href="https://github.com/Lufixy" target="_blank" rel="noreferrer" className="text-white-500 hover:text-gray-600 underline">Lufixy</a>
                </div>
            </div>
        </div>
    )
}
