import { SocialList } from "../social-list/SocialList"
import './personal-data.css'


export function PersonalData (){

    return(

        <div className="introducion-one">
                    
        <div className="data">
            <h1 className="data-name"> <span className="first-name">Carlos</span> Eduardo Rodrigues de Freitas</h1>
            <p className="data-function">"Dessenvolvedor web"</p>
        </div>

        <SocialList />

</div>
    )
}