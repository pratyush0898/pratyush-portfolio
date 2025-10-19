"use client";
import React from "react";

export default function BackButton({ className }) {
    return (
        <img
            src="/back-button.webp"
            alt="back"
            className={className}
            onClick={() => window.history.back()}
            style={{ cursor: "pointer" }}
        />
    );
}
