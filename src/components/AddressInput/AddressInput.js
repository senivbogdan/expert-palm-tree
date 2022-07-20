import React from "react";
import {  ErrorDiv, Input, FieldDiv } from "../../styles/component"

export const MyAddressInput = ({ register, errors, label, validaton }) => {
    const changeFunc = (e) => {

    }
    let message = errors[label]?.message
    const reg = {...register(label, validaton)}
    return (
        <FieldDiv>
        {label}
        <Input
            type="text"
            onChange={e => changeFunc(e)}
            {...reg}
            message={message}
            />
            {errors[label] &&
                    <ErrorDiv errors={errors}>{errors[label] ? errors[label]?.message : ""}</ErrorDiv>}
        </FieldDiv>
    );
};

