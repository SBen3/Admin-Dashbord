import React from 'react'
import { ArrowUpNarrowWide , Users  , ShoppingBasket , Gem} from 'lucide-react'
function AIPoweredInsights({coloro}) {
  return (
    <div className={`flex flex-col gap-8 m-5 p-10  ${coloro} rounded-2xl border-slate-200 border-1`}>
        <h1 className='text-2xl mb-5 font-bold'>AI Powered Insights</h1>
      <div className='flex gap-5 ml-5 '>
        {<ArrowUpNarrowWide className='min-w-[20px] min-h-[30px]' color='#00896f'/>} <p>Revenue is up 15% compared to last month, driven primarily by a successful email campaign.</p>
      </div>
      <div className='flex gap-5 ml-5 '>
        {<Users className='min-w-[20px] min-h-[30px]' color='#008bc6'/>} <p>Customer retention has improved by 8% following the launch of the new loyalty program.</p>
      </div>
      <div className='flex gap-5 ml-5 '>
        {<ShoppingBasket className='min-w-[20px] min-h-[30px]' color='#845ec2'/>} <p>Product category "Electronics" shows the highest growth potential based on recent market trends.</p>
      </div>
      <div className='flex gap-5 ml-5 '>
        {<Gem className='min-w-[20px] min-h-[30px]' color='#ffc75f'/>} <p>Optimizing pricing strategy could potentially increase overall profit margins by 5-7%.</p>
      </div>
    </div>
  )
}

export default AIPoweredInsights
