import { socialItems } from "./social-list.data"
import s from'./social-list.module.css'



  
  export function SocialList() {
  return (
    <div className={s.socialList}>

        <ul>

            {socialItems.map(({icon:Icon,id,link,text}) => (

            <li key={id}>
              <i>{<Icon/>}</i>
              <a href={link}>{text}</a>
            </li>
            ))} 
        </ul>
    </div>
  )
}

