import { QuoteProps } from "@/data";
import React from 'react'

export default function Quote({ quote }: { quote: QuoteProps }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-no-repeat bg-cover bg-[url(https://www.spacespheremaps.com/wp-content/uploads/HDR_nebulae_detail_image.png)]"> 
      
      <div className='p-20 rounded-md bg-[url(https://th.bing.com/th/id/OIP.YH24vp2CkCK_KvbAuTSzLwHaHG?w=804&h=771&rs=1&pid=ImgDetMain)] bg-right bg-no-repeat'>
        <div className="items-center border-2 box-shadow shadow-2xl rounded-md bg-white p-4">
          <blockquote className="font-bold">{quote.text}</blockquote>
          <cite className="text-gray-500">{quote.author}</cite>
        </div>
      </div>
      
    </div>
  );
}
