import fs from "fs";

export default function ServerComponentOne() {
    fs.readFileSync("src/components/server-component-one.tsx", "utf8");

    return (
        <div>Server Component One</div>
    )
}
