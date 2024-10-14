"use client"

import { createContext, useEffect, useMemo, useState } from "react";

export const EditDataContext = createContext({
    editData: null,
})

const EditDataProvider = ({children}: { children : JSX.Element }) => {
    const [editData, setEditData] = useState(null)

    const appContextState = useMemo(() => ({ editData, setEditData }), [editData, setEditData]);

    useEffect(()=>{
        console.log({editData});
    }, [editData])
    return (
        <EditDataContext.Provider value={appContextState}>
            {children}
        </EditDataContext.Provider>
    )
}

export default EditDataProvider