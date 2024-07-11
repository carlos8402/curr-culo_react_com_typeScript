
import { PersonalData } from '../personal-data'
import { Profile } from '../profile'
import s from'./header.module.css'

export function Header(){

    return(

            <header className={s.introduction}>

                <PersonalData />

                <Profile />

            </header>
        
    )
}