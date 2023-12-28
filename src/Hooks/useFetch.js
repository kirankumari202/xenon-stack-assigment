/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const abortFetch = new AbortController();
    const signal = abortFetch.signal;

    async function fetchData() {
      setLoading(true);
      try {
        const response = await axios.get(url);
        if (signal.aborted) return;
        setStatus("success");
        setData(response.data);
      } catch (error) {
        if (signal.aborted) return;
        setStatus("error");
        setError(error.message);
      } finally {
        if (!signal.aborted) setLoading(false);
      }
    }

    fetchData();

    return () => {
      console.log("aborting fetch");
      abortFetch.abort();
    };
  }, [url]);

  return { data, loading, error, status };
}
