import { createContext, useContext, useState, useEffect } from "react";
import { getCurrentUser } from "@/lib/appwrite";

interface GlobalContextProps {
    isLoggedIn: boolean,
    user: any,
    loading: boolean,
    setisLoggedIn: (value: boolean) => void,
    setUser: (value: any) => void
}

const GlobalContext = createContext<GlobalContextProps | null>(null);

export const useGlobalContext = () => useContext(GlobalContext);


export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoggedIn, setisLoggedIn] = useState(false)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getCurrentUser()
            .then((res) => {
                if (res) {
                    console.log('hay usuario');
                    
                    setisLoggedIn(true)
                    setUser(res as any)
                } else {
                    console.log('no hay usuario');
                    setisLoggedIn(false)
                    setUser(null)
                }
            })
            .catch((error) => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [])
 
 
    return (
        <GlobalContext.Provider
            value={{
                isLoggedIn,
                user,
                loading,
                setisLoggedIn,
                setUser
            }} > {children}
        </GlobalContext.Provider>
    )
}

