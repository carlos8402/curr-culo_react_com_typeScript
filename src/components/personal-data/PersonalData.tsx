import { SocialList } from "../social-list/SocialList"
import s from'./personal-data.module.css'


export function PersonalData (){

    return(

        <div className={s.introduction_one}>
                    
            <div>
                <h1> <span>Carlos</span> Eduardo Rodrigues de Freitas</h1>
                <p>"Desenvolvedor web"</p>
            </div>

            <SocialList />

        </div>
    )
}