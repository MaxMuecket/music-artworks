import { useEffect, useState } from 'react';

function useFetch<T>(
  url: string
): {
  data: T | null;
} {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(setData);
  }, []);

  return { data };
}

export default useFetch;
