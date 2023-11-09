import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import Tilt   from 'react-parallax-tilt';
export function SiteFeatures() {
    const { t } = useTranslation();

    // "features": {
    //     "title": "Особенности",
    //     "vac": "Защита VAC",
    //     "vac_text": "VAC - это сокращение от Valve Anti-Cheat. Эта система представляет собой автоматизированную систему античит, разработанную и эксплуатируемую компанией Valve. Она призвана предотвратить мошенничество в играх и обеспечить честное игровое окружение.",
    //     "prices": "Доступные цены",
    //     "prices_text": "Наши программные продукты отличаются высоким качеством и при этом имеют очень разумные цены.",
    //     "support": "Поддержка 24/7",
    //     "support_text": "Наша служба поддержки доступна 24/7. Если у вас есть вопросы, не стесняйтесь обращаться в нашу службу поддержки. Мы с удовольствием ответим на ваши запросы."
    //     },

    return <>
    <div className="mt-5 flex justify-center items-center">
    <span className="text-3xl font-semibold dark:text-white text-black">{t('features.title')}</span>
    </div>
    <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 p-2 mx-4 sm:mx-0 dark:bg-accent/25  rounded-xl">

    <Tilt className="Tilt" options={{ max : 25 }} >
        <div classsName="w-full h-full dark:bg-accent/25 bg-black/25 overflow-hidden shadow rounded-lg ring-black/50 ring-2 dark:ring-0">
            <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center justify-center">
                <Icons.clock7 className="h-20 w-20" />
                </div>
                <div className="mt-5 flex justify-center items-center">
                <span className="text-3xl font-semibold text-center dark:text-white text-black">{t('features.support')}</span>
                </div>
                <div className="mt-5 flex justify-center items-center">
                <span className="text-sm font-light text-center dark:text-gray-500 text-black">{t('features.support_text')}</span>
                </div>
            </div>
        </div>
    </Tilt>
    
    <Tilt className="Tilt" options={{ max : 25 }} >
        <div classsName="w-full h-full bg-accent/25 overflow-hidden shadow rounded-lg ring-black/50 ring-2 dark:ring-0">
            <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center justify-center">
                <div className='flex flex-col items-center justify-center'>
                <Icons.shieldCheck className="h-20 w-20" />
                </div>
                </div>
                <div className="mt-5 flex justify-center items-center">
                <span className="text-3xl font-semibold text-center dark:text-white text-black">{t('features.vac')}</span>
                </div>
                <div className="mt-5 flex justify-center items-center">
                <span className="text-sm font-semibold text-center dark:text-gray-500 text-black">{t('features.vac_text')}</span>
                </div>
            </div>
        </div>
    </Tilt>
    
    <Tilt className="Tilt" options={{ max : 25 }} >
        <div classsName="w-full h-full bg-accent/25 overflow-hidden shadow rounded-lg ring-black/50 ring-2 dark:ring-0">
            <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center justify-center">
                <Icons.wallet className="h-20 w-20" />
                </div>
                <div className="mt-5 flex justify-center items-center">
                <span className="text-3xl font-semibold text-center dark:text-white text-black">{t('features.prices')}</span>
                </div>
                <div className="mt-5 flex justify-center items-center">
                <span className="text-sm font-semibold text-center dark:text-gray-500 text-black">{t('features.prices_text')}</span>
                </div>
            </div>
        </div>
    </Tilt>
    
    </div>
    </>
}
    