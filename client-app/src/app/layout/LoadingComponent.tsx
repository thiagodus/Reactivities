import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

interface Props{
    inverted?: boolean;
    
}

export default function Loadingcomponent({inverted = true}: Props){
    return (
        <Dimmer active={true} inverted={inverted}>
            <Loader>Loading</Loader>
        </Dimmer>
    )
}