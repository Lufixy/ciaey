import Link from "next/link"
import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Icons } from "@/components/icons"
import axios from "axios";
import { useTranslation } from 'react-i18next';

export function SiteHeader() {
  const router = useRouter();
  const { i18n } = useTranslation();
  const [user, setUser] = useState(null);

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <header className="bg-transparent z-40 w-full mx-auto px-4 sm:px-0 lg:px-0">
      <div className="flex  h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
          
            <div className="flex items-center space-x-1">
        
              <button
           
                className={
                  "flex items-center text-sm font-medium text-muted-foreground transform transition-colors duration-200 hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-2 border-b-2 border-transparent hover:border-accent"
                }

              >
               <Icons.login className="h-5 w-5" /> <span className="ml-2">{i18n.t('navbar.login')}</span>
              </button>
        
            <ThemeToggle />

            </div>
            <div className="flex items-center space-x-2">
              
      <Select
        defaultValue={i18n.language}
        onValueChange={handleLanguageChange}
        
      >
        <SelectTrigger>
          <SelectValue>
            {i18n.language.toUpperCase()}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">EN</SelectItem>
          <SelectItem value="ru">RU</SelectItem>
          <SelectItem value="tr">TR</SelectItem>
        </SelectContent>
      </Select>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
