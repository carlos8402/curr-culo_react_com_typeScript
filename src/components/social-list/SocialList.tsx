
import s from'./socialList.module.css'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

    export type List = {
      id: number;
      icon: JSX.Element;
      link: string;
      text: string;
      
    }
  
     export const socialItems: List[] = [
  
    {
       id: 1,
      icon: <FaLinkedin />,
      link: 'https://www.linkedin.com/in/carlos-eduardo-r-freitas/',
      text: 'Perfil linkedin',
    },
    { 
      id: 2,
      icon: <FaGithub />,
      link: 'https://github.com/carlos8402',
      text: 'Perfil github',
    },
    { 
      id: 3,
      icon: <FaEnvelope />,
      link: 'mailto:carlos_eduardo8468@hotmail.com',
      text: 'enviar email',
    },
    { 
      id: 4,
      icon: <FaPhone />,
      link: 'tel:+5581984027695',
      text: 'ligar: (81) 98402-7695',
    },
    { 
      id: 5,
      icon: <FaWhatsapp />,
      link: 'https://wa.me/5581984027695?text=',
      text: 'iniciar uma conversa no whatsapp',
    }
  ];
  
  
  export function SocialList() {
  return (
    <div className={s.socialList}>

        <ul>

            {socialItems.map((item) => (

            <li key={item.id}>
              <i> {item.icon}</i>
              <a href={item.link}>{item.text}</a>
            </li>
            ))}
        </ul>
    </div>
  )
}

