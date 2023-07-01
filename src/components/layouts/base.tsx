import NavbarComponent from "./navbar"
import SidebarComponent from "./sidebar/sidebar"

type Props = {
  children: JSX.Element | JSX.Element[] | null
  sidebarExpand: boolean | null
}

const BaseLayout = ({children, sidebarExpand} : Props) => {
  return (
    <div className="pt-5">
      <SidebarComponent expand={sidebarExpand} />

      {/* white background  */}
      <div className={`${sidebarExpand ? 'ml-60 xl:ml-64' : 'ml-20'}  bg-white rounded-tl-3xl p-6`} style={{minHeight: "98vh"}}>
        <NavbarComponent />
        {children}
      </div>
    </div>
  )
}

export default BaseLayout