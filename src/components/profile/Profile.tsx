import s from'./profile.module.css'


export function Profile (){
    return(

        <div className={s.profile}>
                    
            <img src="./img/foto_perfil.jpg"  width="150px" height="150px"  alt="" />

            <div>
                <h2>Perfil Pessoal</h2>
                <p>Sou um estudante de Ciências da Computação e cada dia mais apaixonado por tecnologia,
                estudando e praticando HTML, CSS , JAVASCRIPT, GIT , TYPESCRIPT, REACT  Além da faculdade estou sempre fazendo
                cursos livres e bootcamps para aprender novas habilidades no campo de desenvolvimento.</p>
            </div>

        </div>
    )
}