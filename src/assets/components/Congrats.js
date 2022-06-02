import React from "react";
import Container from "../styles/js/Container";

const Congrats = ({text, classe}) => {
    return (
        <>
            <Container className={"result " + classe}>{text}</Container>
        </>
    );
}

export default Congrats