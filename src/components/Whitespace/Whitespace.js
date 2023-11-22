import { Repeat } from '@phosphor-icons/react';
import React, { useEffect, useState } from 'react';
import Element from "./Element";

function Whitespace(props) {
    const [update2, setUpdate2] = useState(0);

    const renderedElements = props.data.map(typeBlock => (
        <>
            {typeBlock.list.map((element, index) => (
                <Element key={index} coor={element} updateCoors={props.updateElement} />
            ))}
        </>
    ))
    useEffect(() => {
        setUpdate2(prev => prev+1);
    },[props.update])
    
  return (
    props.showRightNav && (
      <div
        className="w-full bg-repeat whitespace" 
        style={{
            backgroundImage: `url("https://img.freepik.com/premium-vector/grid-stripe-seamless-pattern_97886-21859.jpg")`,
            backgroundSize: '25%',
        }}
        >
        <div className="w-full" style={{
          height: "calc(100vh - 99.6px)",
          backgroundColor: 'rgba(255,255,255,.8)'
        }}>
                {renderedElements}
        </div>
      </div>
    )
  );
}

export default Whitespace