import { useReducer } from "react";
import Context from "./Context";
import { rootReducer, rootStore } from "./rootStore";
const ContextProvider = ({children}) => {
    const [state, dispatch]= useReducer(rootReducer, rootStore)
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider