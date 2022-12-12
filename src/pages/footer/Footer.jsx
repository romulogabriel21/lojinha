import './Footer.css'
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <FaWhatsapp className='icons' />
      <FaInstagram className='icons' />
      <FaLinkedin className='icons' />
    </footer>
  )
}

export default Footer