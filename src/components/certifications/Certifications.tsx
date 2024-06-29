import './certifications.css'

export type ListCertifications = {
    
    id: number;
    text: string;
};

export function Certifications(){
    const certification: ListCertifications[] = [
        {
            id: 1,
            text:"Curso básico HTML / Fundação Bradesco"
        },
        {
            id:2,
            text:"Curso avançado HTML / Fundação Bradesco"
        },
        {
            id:3,
            text:"Curso de CSS / Curso em video"
        },
        {
            id:4,
            text:"Curso Java script / Curso em video"
        },
        {
            id:5,
            text:"Curso de GIT / Curso em video"
        },
        {
            id:6,
            text:"Curso de programação em java (240h) adm e tec"
        },
        {
            id:7,
            text:"OrangeTech - bootcamp DIO - Java / Spring Boot / maven"
        },
        {
            id:8,
            text:"Curso de React.Js (nível intermediário e avançado) / udemy"

        },
    ]
    return(
        <>  
            <section id="certifications">

                <h2 className="certifications-title">Certificações</h2>
                <ul className="certifications-items">
                {certification.map((items) => (
                    <li className="certifications-item" key={items.id}>{items.text}</li>

                ))}
             
                </ul>

            </section>
    </>  
    )
}