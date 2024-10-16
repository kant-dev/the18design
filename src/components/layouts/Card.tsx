"use client"

type CardProps = {
      children: React.ReactNode,
      className?: string,
}

export const Card = ({ children, className }: CardProps) => {
      return (
            <div className={`md:flex md:flex-row p-5 mt-8 md:gap-6 ${className}`}>
                  {children}
            </div>
      )
}