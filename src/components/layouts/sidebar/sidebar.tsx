import { useState } from "react"
import Logo from "../../../assets/img/logo.png"
import LogoSquare from "../../../assets/img/logosquare.png"
import "./Sidebar.css"
import { menu } from "./menu"
import { useLocation, useNavigate } from "react-router-dom"
import { parseUrl } from "../../../helper/url-parser"
import { CaretRight, Gear } from "@phosphor-icons/react"

type Props = {
  expand: boolean | null
}

const SidebarComponent = ({expand} : Props) => {
  const path = useLocation()
  const [isExpand, setIsExpand] = useState<boolean>(expand ?? true)

  const navigate = useNavigate()

  // const handleHover = () => {
  //   if(!isExpand) setIsExpand(true)
  // }

  // const handleLeaveHover = () => {
  //   if(isExpand) setIsExpand(false)
  // }

  return (
    <div id="sidebar" className={`${isExpand ? 'expand w-60 xl:w-64' : 'w-20'} text-white min-h-screen p-4 overflow-auto fixed top-0 left-0`}>
      <ul>
        <li className="logo">
          <img src={isExpand ? Logo : LogoSquare} className={`${isExpand && 'h-10'}`} alt="" />
        </li>
        {
          menu.map((item, key) => (
            <li 
              key={key}
              className={`
                menu hover:bg-gray-700 hover:text-gray-200 rounded-lg cursor-pointer 
                ${parseUrl(path.pathname)[1] === item.name ? "bg-gray-700 text-gray-200" : ""}
                ${item.name === "home" && parseUrl(path.pathname)[1] === '' ? "bg-gray-700 text-gray-200" : ""}
                ${!isExpand && 'flex justify-center'}
              `}
              onClick={() => navigate(item.route)}
              // onMouseEnter={handleHover}
              // onMouseLeave={handleLeaveHover}
            >
              <div className={`icon`}>
                {item.icon}
              </div>
              {
                isExpand && <span className="title">{item.title}</span>
              }
            </li>
          ))
        }
      </ul>

      <ul className="absolute bottom-0 w-full left-0 px-3">
        <li
          className={`
            menu hover:bg-gray-700 hover:text-gray-200 rounded-lg cursor-pointer 
            ${parseUrl(path.pathname)[1] === "setting" ? "bg-gray-700 text-gray-200" : ""}
            ${!isExpand && 'flex justify-center'}
          `}
          onClick={() => navigate('/setting')}
        >
          <div className="icon">
            <Gear />
          </div>
          {
              isExpand && <span className="title">Setting</span>
            }
        </li>
        <li className="border-t border-gray-700"></li>
        <li
          className={`
            menu hover:bg-gray-700 hover:text-gray-200 rounded-lg cursor-pointer 
            ${parseUrl(path.pathname)[1] === "setting" ? "bg-gray-700 text-gray-200" : ""}
            ${!isExpand && 'flex justify-center'}
          `}
          onClick={() => navigate('/setting')}
        >
          <div className="icon w-8">
            <img 
              className="w-7 h-7 object-cover rounded-full" 
              src="https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg" 
              alt="" 
            />
          </div>
          {
              isExpand && 
                <div className="text-sm flex justify-between w-full items-center">
                  <span>Olivia Rhye <br />olivia@mail.com</span>
                  <CaretRight />
                </div>
            }
        </li>
      </ul>
    </div>
  )
}

export default SidebarComponent