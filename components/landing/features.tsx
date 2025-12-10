import React from 'react'

const Features = () => {
  return (
    <div className='px-5'>  

    <div className='grid grid-cols-1 md:grid-cols-3 '>
        {/* Features one */}
    <div className='border-b md:border-b-0  md:border-r border-dashed py-2 md:py-4'>
        <h1 className='text-lg font-medium jetbrains-mono tracking-tight '>Open Source</h1>
        <p className='text-muted-foreground text-sm tracking-wide pt-1.5'>This project is completely open sourced so that people can contribute and take this project to next level so do checkout the github to get started.</p>
    </div>

    {/* Features two */}
    <div className='border-b md:border-b-0  md:border-r border-dashed md:pl-3 py-2 md:py-4'>
        <h1 className='text-lg font-medium jetbrains-mono tracking-tight'>Modern & Sleek</h1>
        <p className='text-muted-foreground text-sm tracking-wide pt-1.5'>All the components are built using tailwind css and shadcn ui so that we can provide the latest and responsive layout to users.</p>
    </div>

    {/* Features three */}
    <div className='md:pl-3 py-2 md:py-4'>
        <h1 className='text-lg font-medium jetbrains-mono tracking-tight'>Customizable</h1>
        <p className='text-muted-foreground text-sm tracking-wide pt-1.5'>All the blocks are fully customizable according to your project requirements , make changes and get your grid idea into reality.</p>
    </div>
    </div>

    </div>
  )
}

export default Features