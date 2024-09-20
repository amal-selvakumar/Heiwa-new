import './Button.css'

type ButtonProps={
  variant?: 'primary' | 'secondary' | 'outline',
  size?: 'small' | 'medium' | 'large',
  type?: 'button' | 'submit',
  onClick?: (event:React.MouseEvent<HTMLButtonElement>) => void,
  children: React.ReactNode
}

function Button({variant,size,onClick,type,children}:ButtonProps) {

  const classNames = `button ${variant} ${size}`
  return (
    <button className={classNames}
    type={type}
    onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
