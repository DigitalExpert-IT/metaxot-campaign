import { useEffect, useState} from 'react';
import axios from 'axios';

const useFetchContents = (section: string) => {
    const baseURL = import.meta.env.VITE_CONTENT_API
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(baseURL+section);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error)
      }
    };

    fetchData();
  }, []);

  return {
    data,
    loading,
  };
};

export default useFetchContents;