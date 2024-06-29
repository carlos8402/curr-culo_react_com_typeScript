import { Certifications } from "../certifications/Certifications";
import { Formations } from "../formations/Formations";
import './container-one.css'

export function ContainerOne(){

    return(

        <>
            
            <div className="container">

                   
                    <Formations />
                    <Certifications />

                   
            </div>
        </>  
    )
}