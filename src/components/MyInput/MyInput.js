import React from "react";
import {FieldDiv, Input, ErrorDiv, EmptyDiv} from "../../styles/component"

export const MyInput = ( { register, errors, label, validaton } ) => {
    let message = errors?.[label]?.message
    const reg = {...register(label, validaton)}
    return (
        <>
            <FieldDiv>
                {label}
                <Input
                    data-testid={`${label}`}
                    type="text"
                    inputRef={register}
                    {...reg}
                    message={message}>
                </Input>
                        {!errors[label] ?
                            <EmptyDiv errors={errors}>asdasdasdasdasdasd</EmptyDiv>
                        :
                            <ErrorDiv>
                                {errors[label]?.message || `* does not pass validation`}
                            </ErrorDiv>}
            </FieldDiv>
        </>
    );
};

