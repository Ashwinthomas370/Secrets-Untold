import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
  const [data, setData] = useState<[]>();
  const [errors, setErros] = useState<Error>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const resJson = await res.json();
        setData(resJson?.data);
        setLoading(false);
      } catch (error) {
        setErros(error as Error);
        setLoading(false);
      }
    };
    getData();
  }, [url]);

  return { data, errors, loading };
};
