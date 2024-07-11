
import s from'./skills.module.css'
import { skillsList } from './skills.data'



export function Skills(){
   
    return(

        <div className={s.skills}>
        
                <h2>Habilidades:</h2>
                <ul>
                    {skillsList.map((items) => (
                        <li key={items.id}>
                            <img src={items.img} alt="" />
                        </li>
                    ))}
   
                </ul>

        </div>
    )
}

