import { PersonalData } from "../personal-data/PersonalData"
import { Profile } from "../profile/Profile"

import './header.css'

export function Header(){

    return(

        <>
            <header className="introduction">

                <PersonalData />

                <Profile />

            </header>
        </>
    )
}