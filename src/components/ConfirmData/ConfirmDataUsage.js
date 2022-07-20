import React from "react";
import {CheckBox, ConfirmDataUsageDiv, EmptyDiv, ErrorDiv} from "../../styles/component";

export const ConfirmDataUsage = ({register, errors, label, validaton}) => {
    return (
        <ConfirmDataUsageDiv>
            {label}
            <CheckBox
                type={"checkbox"}
                {...register(label, validaton)}
            />
            {!errors[label] ?
                <EmptyDiv errors={errors}>The field is required!!!</EmptyDiv>
                :
                <ErrorDiv>
                    {`The field is required!!!`}
                </ErrorDiv>}
        </ConfirmDataUsageDiv>
    );
};
