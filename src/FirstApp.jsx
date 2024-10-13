//import { Fragment } from 'react'
import PropTypes from 'prop-types';


const person = {
    message: 'mi mensaje',
    name: 'Jhon P. Reyes Flores'
};

const saludarWeb = (name) => `Bienvenido estimad@ ${name}`;

//export const FirstApp = ({ title = 'Default title' }) => { //Se envía valor por defecto
export const FirstApp = ({ title, subtitle, name }) => {
    //console.log(props);
    //if(!title) throw new Error('El título no existe!');

    return (
        <>
            {/* <code>{JSON.stringify(person)}</code> */}
            {/* <h1>Hola Mundo!! - {saludarWeb(person.name)}</h1> */}
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <p>{name}</p>
        </>
    );
}

//se define los tipados de las props
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}

//se puede definir los valores por defecto de los props (usualmente se colocan hasta el final)
FirstApp.defaultProps = {
    title: 'No hay título',
    subtitle: 'No hay subtítulo',
    name: 'No hay nombre'
}