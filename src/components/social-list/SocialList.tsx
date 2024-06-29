import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import './socialList.css'


export type List = {
   
  icon: JSX.Element;
  link: string;
  text: string;
  
};



export function SocialList() {

      const socialItems: List[] = [

        {
            icon: <FaLinkedin />,
            link: 'https://www.linkedin.com/in/carlos-eduardo-r-freitas/',
            text: 'Perfil linkedin',
          },
          {
            icon: <FaGithub />,
            link: 'https://github.com/carlos8402',
            text: 'Perfil github',
          },
          {
            icon: <FaEnvelope />,
           link: 'mailto:carlos_eduardo8468@hotmail.com',
            text: 'enviar email',
          },
          {
            icon: <FaPhone />,
            link: 'tel:+5581984027695',
            text: 'ligar: (81) 98402-7695',
          },
          {
            icon: <FaWhatsapp />,
            link: 'https://wa.me/5581984027695?text=',
            text: 'iniciar uma conversa no whatsapp',
          }
        ];
    
  return (
    <div className="social-list">

        <ul className="items">
            {socialItems.map((items, index) => (
            <li  className="item" key={items.index}>
              <i className='icons-social'> {items.icon}</i>
              <a  className="link-social" href={items.link}>{items.text}</a>
            </li>
    ))}
        </ul>
    </div>
  )
}

