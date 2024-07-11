
import s from './certifications.module.css'
import { certifications } from './certifications.data'



export function Certifications(){
   
    return(
          
            <section className={s.certifications}>

                <h2>Certificações</h2>
                <ul>
                {certifications.map((item) => (
                    <li  key={item.id}>{item.text}</li>

                ))}
             
                </ul>

            </section>
     
    )
}