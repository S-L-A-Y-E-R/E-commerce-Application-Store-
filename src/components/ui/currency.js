'use client'

import { useEffect, useState } from "react";
import { formatter } from "../../../lib/utils";

const Currency = ({ values }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <div className="font-semibold">
            {formatter.format(Number(values))}
        </div>
    );
}

export default Currency;