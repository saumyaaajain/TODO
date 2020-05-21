import Typography from "@material-ui/core/Typography";
import React from "react";

export default function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © TO DO WEBSITE '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}