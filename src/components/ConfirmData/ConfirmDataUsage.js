import React from "react";
import {CheckBox, ConfirmDataUsageDiv, ErrorDiv} from "../../styles/component";

export const ConfirmDataUsage = ({register, errors, label, validaton}) => {
    return (
        <ConfirmDataUsageDiv>
            {label}
            <CheckBox
                type={"checkbox"}
                {...register(label, validaton)}
            />
            {errors[label] &&
                <ErrorDiv errors>{`The field is required!!!`}</ErrorDiv>}
        </ConfirmDataUsageDiv>
    );
};
