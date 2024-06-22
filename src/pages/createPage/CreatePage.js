import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {minus, plus, reset, umenshat, uvelichivat} from "../../store/PostsSlice";
import {Link} from "react-router-dom";

const CreatePage = () => {

    const dispatch = useDispatch();
    const nolek = useSelector(state => state.postsSlice.nolek);


    return (
        <div>
            <h1>{nolek}</h1>
            <button onClick={() => dispatch(uvelichivat())}>+1</button>
            <button onClick={() => dispatch(umenshat())}>-1</button>
            <button onClick={() => dispatch(plus())}>+10</button>
            <button onClick={() => dispatch(minus())}>-10</button>
            <button onClick={() => dispatch(reset())}>reset</button>
            <Link to={"/kaif"}>
                <button>Registation</button>
            </Link>
        </div>
    );
};

export default CreatePage;