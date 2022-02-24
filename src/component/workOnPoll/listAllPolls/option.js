import React from "react";

import { Button } from "@mui/material";

const Option = ({ option }) => {
    return (
        <div>
            <li>
                <Button variant="contained">
                    <span>{option.option}</span>
                    <span>{option.vote}</span>
                </Button>
            </li>
        </div>
    );
}

export default Option;