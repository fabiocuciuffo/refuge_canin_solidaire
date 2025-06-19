import { Link } from "react-router"

function Button ({children, className, link, onClickCallback}: {children: React.ReactNode, className?: string, link?: string, onClickCallback?: (e: React.MouseEvent<HTMLButtonElement>) => void}) {
  const sharedClasses = "inline-block py-3 w-full text-center rounded-lg text-regular text-heavy transition-all ease-in-out duration-100 hover:opacity-55"
  if (link) {
    return(
      <Link to={link} className={sharedClasses + " " + className}>
        {children}
      </Link>
    )
  } else {
    return(
      <button onClick={onClickCallback} className={sharedClasses + " " + className}>
        {children}
      </button>
    )
  }
}

export default Button