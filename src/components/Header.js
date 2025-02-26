import { URLS } from "../utils/constants"

const Header = () => {
  return (
    <div className="absolute px-8 py-4 bg-gradient-to-b from-black z-10">
        <img className="w-48" src={URLS.headerLogo} 
        alt="netlfix_logo" />
    </div>
  )
}

export default Header