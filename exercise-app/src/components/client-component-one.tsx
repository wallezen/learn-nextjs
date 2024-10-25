"use client";

import { useState } from "react";

export default function ClientComponentOne() {
    const [name, setName] = useState("John");

    return (
        <div>Client Component One</div>
    )
}
