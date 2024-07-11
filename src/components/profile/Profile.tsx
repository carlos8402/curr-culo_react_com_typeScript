import s from'./profile.module.css'


export function Profile (){
    return(

        <div className={s.profile}>
                    
            <img src="./img/foto_perfil.jpg"  width={150} height={150} alt="Foto de perfil do estudante de Ciências da Computação, homem pardo,por volta de 35 anos,sorri com camisa social branca." />

            <div>
                <h2>Perfil Pessoal</h2>
                <p>Sou um estudante de Ciências da Computação e cada dia mais apaixonado por tecnologia,
                estudando e praticando HTML, CSS , JAVASCRIPT, GIT , TYPESCRIPT, REACT  Além da faculdade estou sempre fazendo
                cursos livres e bootcamps para aprender novas habilidades no campo de desenvolvimento.</p>
            </div>

        </div>
    )
}