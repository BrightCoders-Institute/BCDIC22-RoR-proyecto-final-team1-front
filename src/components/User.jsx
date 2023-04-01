import Nabvar from "../components/nabvar/Nabvar"
import NavbarUser from "../components/navbaruser/NavbarUser"

const User = (props) => {
  if (props.currUser !== null)
    return (
      <>
        <NavbarUser currUser={props.currUser} setCurrUser={props.setCurrUser} />
      </>
    )

  return (
    <>
      <Nabvar currUser={props.currUser} setCurrUser={props.setCurrUser} />
    </>
  )
}

export default User
