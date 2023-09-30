import useSWRImmutable from "swr/immutable";

export const useFetchArray = (url) => {
  const { data, error, isLoading } = useSWRImmutable(url);

  return {
    data,
    error,
    isLoading,
    isEmpty: data && data.length === 0,
  };
};
