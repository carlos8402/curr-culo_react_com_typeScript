import { References } from "../references/References";
import { Skills } from "../skills/Skills";
import s from'./container-two.module.css'

export function ContainerTwo(){
    return(
        
            <div className={s.container2}>

                <Skills />
                <References />

            </div>
        
    )
}