"use client";

import { useState } from "react";

export default function ClientComponentTwo() {
    const [name, setName] = useState("John");

    return (
        <div>Client Component Two</div>
    )
}
