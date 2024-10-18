"use client";

import { useState } from "react";

function Test() {
  const [u, su] = useState(null);
  const handleUserAgent = async () => {
    const res = await fetch("/api");
    if (!res.ok) {
      alert(await res.text());
      return;
    }
    const ua = await res.json();
    console.log(ua)
    su(ua);
  };
  return (
    <div className="w-11/12">
      <span>{u?u.length:''}</span>
      <button onClick={handleUserAgent}>userAgent</button>
    </div>
  );
}

export default Test;
