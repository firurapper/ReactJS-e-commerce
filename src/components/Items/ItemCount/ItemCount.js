import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ItemCount(props){

    const [count, setCount] = useState(props.initial);

    function onAdd(){
        return count >= props.max ? null : setCount(count+1);
    }

    function onRest(){
        return count <= props.min ? null : setCount(count-1);
    }

    const { userId } = useParams();
    useEffect(() => {
        console.log('Recived userId to: ', userId);
        return() => {
            console.log('Will change userId', userId);
        }
    }, [userId]);

    return(
        <>
        <div className="input-group">
                <button onClick={onRest} className="btn btn-primary input-group-prepend">-</button>
                <span className="form-control">{count}</span>
                <button onClick={onAdd} className="btn btn-primary input-group-apend">+</button>
            </div>
        </>
    );
}

export default ItemCount;