"use client";
import React, { useEffect, useState } from "react";

function URL() {
    const [url, setUrl] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            setUrl(window.location.href);
        }
    }, []);

    return (
        <React.Fragment>{url}</React.Fragment>
    );
}

export default URL;