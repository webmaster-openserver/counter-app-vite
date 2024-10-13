import { Fragment } from "react";
import PropTypes, { number } from "prop-types";
import { useState } from "react";

export const CounterApp = ({ count }) => {
    //console.log('render');
    const [counter, setCounter] = useState(count)

    const increaseClickEvent = (event) => {
        setCounter(counter + 1);
    }

    const decreaseClickEvent = (event) => {
        setCounter(counter - 1);
    }

    const resetClickEvent = (event) => {
        setCounter(count);
    }

    return (
        <Fragment>
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            <button onClick={increaseClickEvent}>+1</button>
            <button onClick={decreaseClickEvent}>-1</button>
            <button onClick={resetClickEvent}>Reset</button>
        </Fragment>
    );
}

CounterApp.defaultProps = {
    count: 0
}

CounterApp.propTypes = {
    //value: PropTypes.number.isRequired
    count: (props, propName, componentName) => {
        const value = props[propName];

        //Validamos que sea un número
        if (typeof value !== 'number') {
            return new Error(`${propName} en ${componentName} debe ser un número (Tipo de valor enviado: ${typeof value})`);
        }

        // //Validamos que no permita un número negativo, ya que siempre iniciará en 0.
        // if (value < 0) {
        //     return new Error(`${propName} en ${componentName} no puede ser valor negativo.`);
        // }

        return null; //No exiten errores
    }
}