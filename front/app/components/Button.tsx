import { Link } from "react-router"

function Button ({children, className, link, onClickCallback}: {children: React.ReactNode, className?: string, link?: string, onClickCallback?: (e: React.MouseEvent<HTMLButtonElement>) => void}) {
  if (link) {
    return(
      <Link to={link} className={"inline-block py-3 w-full text-center rounded-lg text-regular text-heavy" + " " + className}>
        {children}
      </Link>
    )
  } else {
    return(
      <button onClick={onClickCallback} className={"inline-block py-3 w-full text-center rounded-lg text-regular text-heavy" + " " + className}>
        {children}
      </button>
    )
  }
}

export default Button