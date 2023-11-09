import { useState , useEffect} from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { useTranslation } from "react-i18next";

export function MainNav({ items }) {
  const { t } = useTranslation();
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <span className="inline-block font-bold text-xl text-accent-foreground dark:text-white">
          {siteConfig.name}
        </span>
      </Link>
      <div className="hidden md:flex">
        {items?.length ? (
          <nav className="gap-6 flex">
            {items?.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "flex items-center text-sm font-medium text-muted-foreground transform transition-colors duration-200 hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-2",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                  >
                    
                    {t(item.trans)}
                  </Link>
                )
            )}
          </nav>
        ) : null}
      </div>
      {/**
       * mobile menu
       */}
      <div className="md:hidden flex items-center space-x-2">
        <DropdownMenu>
          <DropdownMenuTrigger className="text-muted-foreground hover:text-accent-foreground dark:hover:text-white">
            <Icons.menu className="h-6 w-6" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="right">
            {items?.length ? (
              <div className="py-1">
                {items?.map(
                  (item, index) =>
                    item.href && (
                      <DropdownMenuItem
                      >
                        <Link
                          key={index}
                          href={item.href}
                          className={cn(
                            "flex items-center text-sm font-medium text-muted-foreground transform transition-colors duration-200 hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-2",
                            item.disabled && "cursor-not-allowed opacity-80"
                          )}
                        >
                        {item.title}
                        </Link>
                      </DropdownMenuItem>
                    )
                )}
              </div>
            ) : null}
          </DropdownMenuContent>
        </DropdownMenu>
        </div>
    </div>
  );
}
