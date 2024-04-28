"use client";

import { useEffect } from "react";
import Qs from "qs";
export default function TestQS() {
  useEffect(() => {
    const urlParams = Qs.parse(location.search, { ignoreQueryPrefix: true });
    console.log(urlParams);

    const t = Qs.stringify({
      a: [1,2,34,5,6,7]
    }, {
        addQueryPrefix: true
    });

    console.log(t);
    
  }, []);

  return <div>TestQS</div>;
}
