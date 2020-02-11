import React, { useEffect } from 'react';

// test services, todo: call action to fetch data
import { getHomeCarouselRequest } from '../../services/home';

export default function Home() {
  useEffect(() => {
    getHomeCarouselRequest().then((res) => console.log(res));
    return () => {};
  }, []);

  return <div>Home</div>;
}
