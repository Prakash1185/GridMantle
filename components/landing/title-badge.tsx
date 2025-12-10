import React from 'react'
import { Badge } from '../ui/badge'

const TitleBadge = ({title}) => {
  return (
     <div className='px-5'>
        {/* badge */}
       <div className='py-3'>
         <Badge className='rounded-lg px-3 py-1 bg-foreground text-sm'>{title}</Badge>
       </div>
    </div>
  )
}

export default TitleBadge