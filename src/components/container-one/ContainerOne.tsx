import { Certifications } from "../certifications/Certifications";
import { Formations } from "../formations/Formations";
import s from'./container-one.module.css'

export function ContainerOne(){

    return(

            <div className={s.container}>

                <Formations />
                <Certifications />
  
            </div>
         
    )
}