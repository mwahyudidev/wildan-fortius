import { TextInput } from "flowbite-react"
import MagnifySVG from "../svg/maginifier"
import { Bell } from "@phosphor-icons/react"

const NavbarComponent = () => {
  return (
    <div className="flex justify-between items-center mb-5">
      <h1 className="text-xl font-bold uppercase text-primary">
        company name
      </h1>
      <div className="w-72 items-center flex gap-2">
        <div className="border border-gray-300 cursor-pointer hover:bg-gray-100 p-2 rounded-lg text-2xl">
          <Bell />
        </div>
        <TextInput
          className="w-full bg-white"
          style={{
            paddingLeft: "40px",
            fontSize: "12pt",
            backgroundColor: "#fff"
          }}
          placeholder="Search"
          icon={MagnifySVG}
        />
      </div>
    </div>
  )
}

export default NavbarComponent