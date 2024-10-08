// 

import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id = "about" className='scroll no-scrollbar'>
        <BentoGrid>
            {gridItems.map((item, i) => (
                <BentoGridItem
                    id = {item.id}
                    key = {item.id}
                    title={item.title}
                    description={item.description}
                    className={item.className}
                    img = {item.img}
                    imgClassName = {item.imgClassName}
                    titleClassName = {item.titleClassName}
                    descClassName = {item.descClassName}
                    spareImg = {item.spareImg}
                />
            ))
            }
        </BentoGrid>
    </section>
  )
}

export default Grid