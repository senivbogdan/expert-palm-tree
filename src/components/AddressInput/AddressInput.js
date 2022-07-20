import React from "react";
import {ErrorDiv, Input, FieldDiv, EmptyDiv} from "../../styles/component"

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
            {!errors[label] ?
                <EmptyDiv errors={errors}>The field is required!!!</EmptyDiv>
                :
                <ErrorDiv>
                    {errors[label] ? errors[label]?.message : ""}
                </ErrorDiv>}
        </FieldDiv>
    );
};

