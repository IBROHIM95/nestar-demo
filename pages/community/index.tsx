import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { NextPage } from "next";
import { useState } from "react";



const Community: NextPage = () => {
    console.log("Community component - pages router");
    const [title, setTitle] = useState<string>("hello")
    
    return(
        <div>
            COMMUNITY{""}
            <button onClick={() => alert("hello mit")} style={{margin: '"15px'}}  >
                PRESS ME
            </button>
        </div>
    )
}

export default   withLayoutBasic(Community)