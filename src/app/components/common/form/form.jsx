import React, { useState, useEffect } from "react";
import { validator } from "../../../utils/validator";
import { PropTypes } from "prop-types";
const FormComponent = ({ children, validatorConfig }) => {
    const [data] = useState({});
    const [, setErrors] = useState({});
    // const handleChange = (target) => {
    //     setData((prevState) => ({
    //         ...prevState,
    //         [target.name]: target.value
    //     }));
    // };
    // const isValid = Object.keys(errors).length === 0;
    useEffect(() => validate(), [data]);
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const clonedElements = React.Children.map(children, (child) => {
        console.log(child);
        return child;
    });
    return <form>{clonedElements}</form>;
};
FormComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.npde
    ]),
    validatorConfig: PropTypes.object
};

export default FormComponent;
