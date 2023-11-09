import { useIntervalSWR } from "../lib/swr";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export default function LoginRegister() {
  const router = useRouter();


  return (
  <>
  {/**
   * login and register page with tabs 
   */
    }
    <div className="h-screen  flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div className="w-full flex flex-col items-center justify-center ">
        <div className="w-full max-w-md">
            <div className="bg-accent/25 overflow-hidden shadow rounded-lg ring-black/50 ring-2 dark:ring-0">
            <div className="px-4 py-5 sm:p-6">
                <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center">
                    <Icons.logo className="h-20 w-20" />
                    </div>
                    <div className="mt-5 flex justify-center items-center">
                    <span className="text-3xl font-semibold dark:text-white text-black">Login</span>
                    </div>
                </div>
                <div className="mt-5 w-full">
                    <Input
                    type="email"
                    placeholder="Email"
                    className="w-full"
                    />
                </div>
                <div className="mt-5 w-full">
                    <Input
                    type="password"
                    placeholder="Password"
                    className="w-full"
                    />
                </div>
                <div className="mt-5 w-full">
                    <Button
                    variant="secondary"
                    className="w-full"
                    >
                    Login
                    </Button>
                </div>
                <div className="mt-5 w-full">
                    <p className="text-sm text-gray-500 text-center">
                    Don't have an account?{" "}
                    <a
                        href="#"
                        className="font-medium  hover:text-accent-foreground underline"
                    >
                        Register
                    </a>
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>  
    </div>
    
    </div>
  </>
  )
}
