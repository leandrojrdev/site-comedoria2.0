import React, { useState } from 'react';
import { MenuLateralContainer } from './Styled-MenuLateral';
import { Link } from 'react-router-dom';


export default function MenuLateral() {

    const [isActive, setActive] = useState(true);
    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <MenuLateralContainer className={isActive ? 'menuLateral-off' : 'menuLateral-on'} onClick={handleToggle}>
            <div className='line-wrapper flex-class'>
                <div className='menu-solid-line' id={isActive ? '' : 'menu-solid-line1-on'}> </div>
                <div className='menu-solid-line' id={isActive ? '' : 'menu-solid-line2-on'}></div>
                <div className='menu-solid-line' id={isActive ? '' : 'menu-solid-line3-on'}></div>
            </div>
            <div className='botoes'>
                <Link to='/'><h3>Página Inicial</h3></Link> <hr />
                <Link to='/Cardapio'><h3>Cardápio</h3></Link> <hr />
                <Link to='/Contato'><h3>Fale Conosco</h3></Link> <hr />
                <a href='https://api.whatsapp.com/send?phone=5581991437844' target='_blank' rel="noopener noreferrer"><h3>Whatsapp</h3></a> <hr />
                <a href='https://www.instagram.com/_leozinnx_/' target='_blank' rel="noopener noreferrer"><h3>Instagram</h3></a> <hr />
            </div>
            <div className='credits'>
                Developed by Leo Jr's
            </div>
        </MenuLateralContainer>
    )
}
