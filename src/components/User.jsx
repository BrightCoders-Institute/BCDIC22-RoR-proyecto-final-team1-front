import { useState } from "react"
import Nabvar from "../components/nabvar/Nabvar"
import NavbarUser from "../components/navbaruser/NavbarUser"

const User = () => {
  const [currUser, setCurrUser] = useState(null);
  if (localStorage.getItem("token") !== null)
    return (
      <>
        <NavbarUser currUser={currUser} setCurrUser={setCurrUser} />
      </>
    )

  return (
    <>
      <Nabvar currUser={currUser} setCurrUser={setCurrUser} />
    </>
  )
}

export default User
