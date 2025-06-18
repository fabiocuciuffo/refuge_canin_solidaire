import { Link } from "react-router"

function Button ({children, className, link}:{children: React.ReactNode, className?: string, link?: string}) {
  if (link) {
    return(
    <Link to={link} className={"inline-block py-3 w-full text-center rounded-lg text-regular text-heavy" + " " + className}>
      {children}
    </Link>
    )
  } else {
        return(
    <button  className={"inline-block py-3 w-full text-center rounded-lg text-regular text-heavy" + " " + className}>
      {children}
    </button>
    )
  }
}

export default Button