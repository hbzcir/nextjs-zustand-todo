const useClientFetch = (fetchData) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      fetchData();
    }
  }, [fetchData]);
};

export default useClientFetch;
