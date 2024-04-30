import PropTypes from 'prop-types';

function Dice({number}){
    return(
        <>
            <img src={`dice-${number}.png`} alt="dice"/>       
        </>
    )
}

Dice.propType = {
    number: PropTypes.number,
}

export default Dice