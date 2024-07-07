
import s from './certifications.module.css'
import { certification } from '../../ListCertifications'



export function Certifications(){
   
    return(
          
            <section className={s.certifications}>

                <h2>Certificações</h2>
                <ul>
                {certification.map((items) => (
                    <li  key={items.id}>{items.text}</li>

                ))}
             
                </ul>

            </section>
     
    )
}