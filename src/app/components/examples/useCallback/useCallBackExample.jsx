import React, { useState, useEffect, useRef, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [date, setDate] = useState({});
    const withOutCallback = useRef(0);
    const withCallback = useRef(0);
    const handleChange = ({ target }) => {
        setDate((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    // Without Callback
    const validateWithOutCallback = (date) => {
        console.log(date);
    };
    useEffect(() => {
        withOutCallback.current++;
    }, [validateWithOutCallback]);
    // With Callback
    const validateWithCallback = useCallback((date) => {
        console.log(date);
    }, []);
    useEffect(() => {
        withCallback.current++;
    }, [validateWithCallback]);

    useEffect(() => {
        validateWithOutCallback(date);
        validateWithCallback(date);
    }, [date, validateWithOutCallback]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render withOutCallback:{withOutCallback.current}</p>
            <p>Render withCallback:{withCallback.current}</p>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={date.email || ""}
                onChange={handleChange}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
