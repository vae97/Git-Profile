import React, {useEffect, useRef} from "react";
import lottie from 'lottie-web';
import {makeStyles} from '@material-ui/core/styles';

const useStyles=makeStyles((themes)=>({

    animation:{
        paddingBottom:"50px"
    }
    
}))

export default function Animation(){

    const classes =useStyles();
    const container =useRef(null);

    useEffect(()=>{

        lottie.loadAnimation({
            container:container.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: require('../src/intro.json')
        })
    },[])


    return(
        <div>
            <div ref={container} className={classes.animation}></div>
        </div>
    )
}
