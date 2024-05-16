import { createContext, useContext, useState, useEffect,ReactNode } from "react";
import { getCurrentUser } from "@/lib/appwrite";

interface GlobalContextProps {
    isLoggedIn: boolean,
    user: any,
    loading: boolean,
    setisLoggedIn: (value: boolean) => void,
    setUser: (value: any) => void
}

const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    return context
    

}
interface Props {
    children: ReactNode;
  }
  
const GlobalProvider: React.FC<Props> = ({ children }) => {
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
            }} > 
              {children}
        </GlobalContext.Provider>
    )
    
  };
  
  export default GlobalProvider;

// export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
//     const [isLoggedIn, setisLoggedIn] = useState(false)
//     const [user, setUser] = useState(null)
//     const [loading, setLoading] = useState(true)
//     useEffect(() => {
//         getCurrentUser()
//             .then((res) => {
//                 if (res) {
//                     console.log('hay usuario');
                    
//                     setisLoggedIn(true)
//                     setUser(res as any)
//                 } else {
//                     console.log('no hay usuario');
//                     setisLoggedIn(false)
//                     setUser(null)
//                 }
//             })
//             .catch((error) => {
//                 console.error(error)
//             })
//             .finally(() => {
//                 setLoading(false)
//             })

//     }, [])
 
 
//     return (
//         <GlobalContext.Provider
//             value={{
//                 isLoggedIn,
//                 user,
//                 loading,
//                 setisLoggedIn,
//                 setUser
//             }} > {children}
//         </GlobalContext.Provider>
//     )
// }

