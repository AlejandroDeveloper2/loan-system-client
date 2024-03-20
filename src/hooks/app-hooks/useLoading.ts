import { useState } from "react";

const useLoading = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingMessage, setLoadingMessage] = useState<string>("");

  const toggleLoading = (message: string, isLoading: boolean): void => {
    setLoading(isLoading);
    setLoadingMessage(message);
  };

  return {
    loading,
    loadingMessage,
    toggleLoading,
  };
};
export default useLoading;
