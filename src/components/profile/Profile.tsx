import './profile.css'

export function Profile (){
    return(

        <div className="profile">
                    
            <img className="profile-img" src="./img/foto_perfil.jpg"  width="150px" height="150px"  alt="" />

            <div className="profile-text">
                <h2 className="profile-title">Perfil Pessoal</h2>
                <p className="profile-about">Sou um estudante de Ciências da Computação e cada dia mais apaixonado por tecnologia,
                estudando e praticando HTML, CSS , Java Script, GIT. Além da faculdade estou sempre fazendo
                cursos livres e bootcamps para aprender novas habilidades no campo de desenvolvimento.</p>
            </div>

        </div>
    )
}