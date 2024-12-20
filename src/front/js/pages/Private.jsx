import React, { useContext } from "react";
import { Context } from "../store/appContext";

function Private() {
    const {store, actions} = useContext(Context)

    return (
        <div className="justify-content-center">
        {
            store.token ? 
            <h1>This is the private view</h1>
            :
            <h1>You don't have permissions to see this view</h1>
            
        }
        </div>
    )
}

export default Private;