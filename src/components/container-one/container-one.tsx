


import { Certifications } from '../certifications'
import { Formations } from '../formations'
import s from'./container-one.module.css'

export function ContainerOne(){

    return(

            <div className={s.container}>

                <Formations />
                <Certifications />
  
            </div>
         
    )
}