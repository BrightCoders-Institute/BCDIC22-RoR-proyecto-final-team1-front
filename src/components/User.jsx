import Nabvar from "../components/nabvar/Nabvar"
import NavbarUser from "../components/navbaruser/NavbarUser"

export default function User({ currUser, setCurrUser }) {
  if (currUser) {
    return (
      <>
        <NavbarUser setCurrUser={setCurrUser} />
      </>
    )
  } else {
    return (
      <>
        <Nabvar setCurrUser={setCurrUser} />
      </>
    )
  }
}
