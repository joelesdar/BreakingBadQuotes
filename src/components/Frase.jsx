import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ContenedorFrase = styled.div`
    padding: 2rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 800px;
    
    @media (max-width : 767px) {
        margin-top: 12rem;
    }

    @media (min-width: 768px) {
        margin-top: 16rem;
    }

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;
        padding-right: 4rem;
        font-size: 1.5rem;

        &::before {
            content: open-quote;
            font-size: 8rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }

        &::after {
            content: close-quote;
            font-size: 8rem;
            color: black;
            position: absolute;
            right: .8rem;
            /* top: 2rem; */
        }
    }

    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        text-align: right;
        color: #666;
        margin-top: 2rem;
    }

`;

const Frase = ({frase}) => {
    return (
        <ContenedorFrase>
            <h1>{frase.quote}</h1>
            <p>{frase.author}</p>
        </ContenedorFrase>
    );
}

Frase.propTypes = {
    frase: PropTypes.object.isRequired
}

export default Frase;