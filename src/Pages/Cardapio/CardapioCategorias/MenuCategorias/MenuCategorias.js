import React from 'react'
import { MenuCategoriasConteiner } from './Styled-MenuCategorias'

export default function MenuCategorias({ combo_promoContainer, ChangeCOMBOS_PROMO, promoContainer, ChangeALL, allContainer, ChangeBATATA, batataContainer, ChangeBEBIDA, bebidaContainer, acaiContainer, ChangeACAI, ChangeHAMBU, hambuContainer, ChangeHOTDOG, hotdogContainer }) {



    return (
        <MenuCategoriasConteiner className='flex-class' >
            <li onClick={ChangeALL} className={`categoria ${allContainer ? 'categoriaON' : ''}`}>
                <h4>Todos</h4>
            </li>
            <li onClick={ChangeCOMBOS_PROMO} className={`categoria ${combo_promoContainer ? 'categoriaON' : ''}`}>
                <h4>Combos & Promoções</h4>
            </li>
            <li onClick={ChangeHAMBU} className={`categoria ${hambuContainer ? 'categoriaON' : ''}`}>
                <h4>Hamburguer</h4>
            </li>
            <li onClick={ChangeHOTDOG} className={`categoria ${hotdogContainer ? 'categoriaON' : ''}`}>
                <h4>Hotdog</h4>
            </li>
            <li onClick={ChangeBATATA} className={`categoria ${batataContainer ? 'categoriaON' : ''}`}>
                <h4>Batata frita</h4>
            </li>
            <li onClick={ChangeACAI} className={`categoria ${acaiContainer ? 'categoriaON' : ''}`}>
                <h4>Açaí</h4>
            </li>
            <li onClick={ChangeBEBIDA} className={`categoria ${bebidaContainer ? 'categoriaON' : ''}`}>
                <h4>Bebidas</h4>
            </li>
        </MenuCategoriasConteiner>
    )
}
