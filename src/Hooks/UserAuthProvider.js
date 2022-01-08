import { useContext } from "react"
import { AuthContext } from "../ContextAPI/ContextAPI"

const UseAuthProvider = () => {
    return useContext(AuthContext)
}

export default UseAuthProvider;