"use client"

type CardPriceProps = {
      children: React.ReactNode,
      className?: string,
}

export const CardPrice = ({ children, className }: CardPriceProps) => {
      return (
            <div className={`border-2 border-black h-[600px] flex flex-col p-4 ${className}`}>
                  {children}
            </div>
      )
}