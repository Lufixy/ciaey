import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { useTranslation } from 'react-i18next';
import { useState } from "react";


export function SiteCard() {
    const [modalOpen, setModalOpen] = useState(false);

    const SellixEmbed = () => {
  return (
    <div id="sellix-container">
      <div id="sellix-buttons-pointers-fix">
        <style>
          {[data-sellix-product] * {
            pointerEvents: 'none';
          }
          [data-sellix-group] * {
            pointerEvents: 'none';
          }}
        </style>
      </div>
      <div id="sellix-modal-64851e9501bbf" style={{ display: 'flex', position: 'fixed', top: '0px', left: '0px', width: '100%', height: '100%', zIndex: '99999' }}>
        <div id="backdrop" className="sellix-backdrop"></div>
        <style>
          {`.sellix-iframe {
            width: 100%;
            height: 100%;
            border: none;
          }

          .sellix-iframe-content {
            height: 100%;
          }

          .sellix-iframe-wrapper {
            top: 20px;
            margin: auto;
            width: 100%;
            height: 100%;
            zIndex: 1;
          }

          .sellix-iframe-loader-container {
            zIndex: 1;
            position: absolute;
            top: 30%;
            left: 50%;
            transform: translate(-50%);
            display: flex;
            flexDirection: column;
            alignItems: center;
          }

          .sellix-backdrop {
            background: #00000075;
            backdropFilter: 'blur(3px)';
            width: 100%;
            height: 100%;
            position: absolute;
          }

          .sellix-fallback-button {
            fontFamily: 'Open Sans';
            fontSize: '14px';
            fontWeight: 600;
            color: 'white';
            textDecoration: 'none';
          }

          .sellix-fallback-button-container {
            position: absolute;
            zIndex: 2;
            display: none;
            top: 50%;
            height: 50px;
            lineHeight: '40px';
            maxHeight: '50px';
            boxSizing: 'border-box';
            left: 50%;
            transform: 'translate(-50%, -50%)';
            background: '#613bea';
            padding: '.375rem .75rem';
            borderRadius: '3px';
          }`}
        </style>
        <div className="sellix-iframe-loader-container">
          <img src="https://cdn.sellix.io/static/embed/loader.png" alt="Loader" className="sellix-iframe-loader" style={{ width: '35px', display: 'none' }} />
        </div>
        <div className="sellix-fallback-button-container">
          <a className="sellix-fallback-button" href="https://embed.sellix.io/product/64851e9501bbf?" target="_blank" rel="noopener noreferrer">Go to product</a>
        </div>
        <div className="sellix-iframe-wrapper">
          <div className="sellix-iframe-content">
            <iframe
              scrolling="auto"
              src="https://embed.sellix.io/product/64851e9501bbf?"
              className="sellix-iframe"
              id="sellix-iframe"
              onError={(e) => console.log(e)}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
      
    const { t } = useTranslation();
    return <>
    <script src="https://cdn.sellix.io/static/js/embed.js"></script>
     <div className="mt-5 flex justify-center items-center" id="cheats">
    <span className="text-3xl font-semibold dark:text-white text-black">{t('cards.title')}</span>
    </div>
    <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mx-4 sm:mx-0">
    <div className="bg-accent/25 overflow-hidden shadow rounded-lg h-96 w-full ring-black/50 ring-2 dark:ring-0">
            <div className="px-4 py-5 sm:p-6">
                <dl>
                    <div className="flex items-center justify-between">
                    <dt className="text-sm font-medium text-gray-500 truncate">
                    Counter-Strike 1.6
                </dt>
                    <badge className="bg-green-500 text-white rounded-full px-2 py-1 text-xs font-bold ml-2">Undetected</badge>
                    </div>
               
                <dd className="flex flex-col mt-1 text-3xl font-semibold  dark:text-white text-black">
                    OCHOOK
                    <text className="mt-1 text-sm font-medium text-gray-500 truncate"> {t('cards.day')}</text>

                </dd> 
                <div className="mt-2 text-sm text-gray-500">
                    <div className="flex items-center space-x-2 gap-1">
                    <Icons.check className="h-5 w-5" /> Aimbot
                    </div>
                    <div className="flex items-center space-x-2 gap-1">
                    <Icons.check className="h-5 w-5" /> Wallhack
                    </div>
                    <div className="flex items-center space-x-2 gap-1">
                    <Icons.check className="h-5 w-5" /> No Recoil
                    </div>
                    <div className="flex items-center space-x-2 gap-1">
                    <Icons.check className="h-5 w-5" /> No Spread
                    </div>
                    <div className="flex items-center space-x-2 gap-1">
                    <Icons.check className="h-5 w-5" /> No Flash
                    </div>
                    <div className="flex items-center space-x-2 gap-1">
                    <Icons.check className="h-5 w-5" /> No Smoke
                    </div>
                    <div className="flex items-center space-x-2 gap-1">
                    <Icons.check className="h-5 w-5" /> Bunnyhop
                    </div>
                    </div>

              



                </dl>
            </div>
            <div className=" px-4 py-4 sm:px-6">
                {/* if button is clicked, open modal */}
            <Button
                size="lg"
                variant="ghost"
                className="w-full dark:bg-accent text-accent-foreground hover:bg-accent-dark hover:text-accent-foreground-dark bg-accent/30 ring-violet-300 dark:ring-0 ring-2 ring-offset-violet-100 "
                onClick={() => setModalOpen(true)}
            >
                                <Icons.shoppingCart className="h-5 w-5 mr-2" />  {t('cards.buy')}

            </Button>
            </div>
           
            </div>
            
            <div className="bg-accent/25 overflow-hidden shadow rounded-lg h-96 w-full ring-2 ring-offset-violet-100 dark:ring-offset-violet-900 ">
                <badge className="bg-blue-500 text-white rounded-full px-2 py-1 flex text-xs font-bold ml-2 absolute -mt-3">Best Seller</badge>
            <div className="px-4 py-5 sm:p-6">
                <dl>
                    <div className="flex items-center justify-between">
                    <dt className="text-sm font-medium text-gray-500 truncate">
                    Counter-Strike 1.6
                </dt>
                    <badge className="bg-green-500 text-white rounded-full px-2 py-1 text-xs font-bold ml-2">Undetected</badge>
                    </div>
               
                    <dd className="flex flex-col mt-1 text-3xl font-semibold  dark:text-white text-black">
                    OCHOOK
                    <text className="mt-1 text-sm font-medium text-gray-500 truncate"> {t('cards.week')}</text>

                </dd> 
                <div className="mt-2 text-sm text-gray-500">
                    <div className="flex items-center space-x-2 gap-1">
                    <Icons.check className="h-5 w-5" /> Aimbot
                    </div>
                    <div className="flex items-center space-x-2 gap-1">
                    <Icons.check className="h-5 w-5" /> Wallhack
                    </div>
                    <div className="flex items-center space-x-2 gap-1">
                    <Icons.check className="h-5 w-5" /> No Recoil
                    </div>
                    <div className="flex items-center space-x-2 gap-1">
                    <Icons.check className="h-5 w-5" /> No Spread
                    </div>
                    <div className="flex items-center space-x-2 gap-1">
                    <Icons.check className="h-5 w-5" /> No Flash
                    </div>
                    <div className="flex items-center space-x-2 gap-1">
                    <Icons.check className="h-5 w-5" /> No Smoke
                    </div>
                    <div className="flex items-center space-x-2 gap-1">
                    <Icons.check className="h-5 w-5" /> Bunnyhop
                    </div>
                    </div>

              



                </dl>
            </div>
            <div className=" px-4 py-4 sm:px-6">
            <Button
                size="lg"
                variant="ghost"
                className="w-full dark:bg-accent text-accent-foreground hover:bg-accent-dark hover:text-accent-foreground-dark bg-accent/30 ring-violet-300 dark:ring-0 ring-2 ring-offset-violet-100 "
                onClick={() => setModalOpen(true)}
            >
                <Icons.shoppingCart className="h-5 w-5 mr-2" /> {t('cards.buy')}
            </Button>
            </div>
         
</div>
        <div className="bg-accent/25 overflow-hidden shadow rounded-lg bot-card bg-admin h-96 w-full ring-black/50 ring-2 dark:ring-0" ispromotion="true">
            <div className="px-4 py-5 sm:p-6">
                <dl>
                    <div className="flex items-center justify-between">
                    <dt className="text-sm font-medium text-gray-500 truncate">
                    Counter-Strike 1.6
                </dt>
                    <badge className="bg-green-500 text-white rounded-full px-2 py-1 text-xs font-bold ml-2">Undetected</badge>
                    </div>
               
                    <dd className="flex flex-col mt-1 text-3xl font-semibold  dark:text-white text-black">
                    OCHOOK
                    <text className="mt-1 text-sm font-medium text-gray-500 truncate"> {t('cards.month')}</text>

                </dd> 
                <div className="mt-2 text-sm text-gray-500">
                    <div className="flex items-center space-x-2 gap-1">
                    <Icons.check className="h-5 w-5" /> Aimbot
                    </div>
                    <div className="flex items-center space-x-2 gap-1">
                    <Icons.check className="h-5 w-5" /> Wallhack
                    </div>
                    <div className="flex items-center space-x-2 gap-1">
                    <Icons.check className="h-5 w-5" /> No Recoil
                    </div>
                    <div className="flex items-center space-x-2 gap-1">
                    <Icons.check className="h-5 w-5" /> No Spread
                    </div>
                    <div className="flex items-center space-x-2 gap-1">
                    <Icons.check className="h-5 w-5" /> No Flash
                    </div>
                    <div className="flex items-center space-x-2 gap-1">
                    <Icons.check className="h-5 w-5" /> No Smoke
                    </div>
                    <div className="flex items-center space-x-2 gap-1">
                    <Icons.check className="h-5 w-5" /> Bunnyhop
                    </div>
                    </div>

              



                </dl>
            </div>
            <div className=" px-4 py-4 sm:px-6">
            <Button
                size="lg"
                variant="ghost"
                className="w-full dark:bg-accent text-accent-foreground hover:bg-accent-dark hover:text-accent-foreground-dark bg-accent/30 ring-violet-300 dark:ring-0 ring-2 ring-offset-violet-100 "
                onClick={() => setModalOpen(true)}
            >
                <Icons.shoppingCart className="h-5 w-5 mr-2" /> {t('cards.buy')}
            </Button>
            </div>
           
            </div>
            </div>
            </>


}
