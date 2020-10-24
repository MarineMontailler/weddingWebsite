import React from 'react';
import MainPageMain from '../../components/MainPageMain';
import dametlau from "../../img/Laura-damien.png";
import dametlau2 from "../../img/laura-damien1.png";


export default function Album(){
    return(
        <MainPageMain className="photos">
            <img  src={dametlau} alt="laura et dam" width="200"/>
            <img src={dametlau2} alt="laura et dam" width="200"/>  
        </MainPageMain>
    )
}