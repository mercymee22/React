import { useState, useEffect } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { useSpring, animated } from 'react-spring';

const AnimatedDisplayCard = ({ item }) => {
    const { image, name, description } = item;
    const [toggle, setToggle] = useState(false); //set a local state variable toggle, destructure toggle & it's updater function, setToggle from calling the useState hook. 
    
    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(1,0)', //100% width & height, then 100%/0% width & height.
        config: { duration: 500 } //500 milliseconds, 1000ms = 1 second. apply our animations over .5 seconds
    });

    //to let react know we want to perform some side effect. 
    useEffect(() => {
       setToggle(true); 
    }, []);

    return (
        <animated.div style={animatedStyle}>  {/*animatedStyle - name of the javascript style object created earlier.*/}
            <Card>
                <CardImg src={image} alt={name} />
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </animated.div>
    )
}

export default AnimatedDisplayCard; 
{/**/}