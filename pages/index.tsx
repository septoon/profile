import Image from 'next/image'
import data from '../data.json'

import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function LinkCard({href, title, image}: {href: string, title: string, image?: string}) {
  return(
    <a href={href} className="flex items-center p-1 mb-3 w-full bg-gray-200 text-gray-800 rounded-md hover:scale-105 transition-all max-w-3xl">
      <div className="flex items-center w-full text-center">
        {image && (<Image priority className="rounded-mmd" alt={title} src={image  } width={40} height={40} />)}
        <h2 className="font-semibold w-full text-center -ml-10">{title}</h2>

      </div> 
    </a>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col items-center mx-auto w-full mt-16 px-8 text-white">
      <Image priority className="rounded-full" alt={data.name} src={data.avatar} width={96} height={96} />
      <div className="flex items-center  mt-4 mb-8">
        <a href={data.tg} target="_blank" className="font-semibold mr-1 text-xl" rel="noreferrer">{`@${data.name}`}</a>
        <TelegramIcon fontSize="small" color='primary' />
      </div>
      {data.links.map(link => ( 
        <LinkCard key={link.href} {...link} />
      ))}
      <div className="flex mt-8 w-1/2 h-10 justify-around ">
        
          {data.socials.map(link => {
            if (link.href.includes('telegram')) {
              return (
                <> 
                  <a href={link.href} target="_blank" className='hover:cursor-pointer' rel="noreferrer">
                    <TelegramIcon key={link.href} fontSize="large" color='white' />
                  </a>
                </>
              )
            }
            if (link.href.includes('instagram')) {
              return (
                <>
                  <a href={link.href} target="_blank" className='hover:cursor-pointer' rel="noreferrer">
                    <InstagramIcon key={link.href} fontSize="large" color='white' />
                  </a>
                </>
              )
            }
            if (link.href.includes('twitter')) {
              return (
                <>
                  <a href={link.href} target="_blank" className='hover:cursor-pointer' rel="noreferrer">
                    <TwitterIcon key={link.href} fontSize="large" color='white' />
                  </a>
                </>
              )
            }
          })}
      </div>
    </div>
  )
}
