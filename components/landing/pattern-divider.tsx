import React from 'react'

const PatternDivider = () => {
    return (
        <div className="relative border-t border-b h-14 sm:h-16 md:h-20 overflow-hidden">
            <div className="absolute inset-0 flex">
                {Array.from({ length: 100 }).map((_, i) => (
                    <div
                        key={i}
                        className="flex-shrink-0 w-px h-full bg-border skew-x-[45deg]"
                        style={{ marginLeft: '1rem' }}
                    />
                ))}
            </div>
        </div>
    )
}

export default PatternDivider