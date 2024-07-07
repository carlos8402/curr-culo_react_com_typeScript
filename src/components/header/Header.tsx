import { PersonalData } from "../personal-data/PersonalData"
import { Profile } from "../profile/Profile"
import s from'./header.module.css'

export function Header(){

    return(

            <header className={s.introduction}>

                <PersonalData />

                <Profile />

            </header>
        
    )
}