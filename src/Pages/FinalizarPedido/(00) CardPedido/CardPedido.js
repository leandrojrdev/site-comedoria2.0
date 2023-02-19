import React from 'react';

import Global from '../../../Global';
import { CardPedidoContainer } from './Styled-CardPedido';

export default function CardPedido() {
    return (
        <CardPedidoContainer>
            <h3>Pedido:</h3>
            <hr className='barra'></hr>
            <div className='infoPedido'>
                <span>{Global.newMsg}</span>
            </div>
            <div className='precoPedido'>
                <span>PREÇO TOTAL: R$ {Global.precoTotal}</span>
            </div>
        </CardPedidoContainer>
    )
}
