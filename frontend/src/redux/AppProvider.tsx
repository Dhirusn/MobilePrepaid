import type React from "react"
import { useRef } from "react"
import { Provider } from "react-redux"
import { store, type AppStore } from "./store"

const AppProvider = ({ children }: { children: React.ReactNode }) => {

    const storeRef = useRef<AppStore>(undefined)

    if (!storeRef.current) {
        storeRef.current = store()
    }

    return (
        <Provider store={storeRef.current}>{children}</Provider>
    )
}

export default AppProvider