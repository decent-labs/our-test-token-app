import { ethers } from 'ethers';
import React, { useState, useCallback } from 'react';
import { toast } from 'react-toastify';

interface ProviderRpcError extends Error {
  message: string;
  code: number;
  data?: unknown;
}

const useTransaction = () => {
  const [pending, setPending] = useState(false);

  const contractCall = useCallback(
    (
      contractFn: () => Promise<ethers.ContractTransaction>,
      pendingMessage: string,
      failedMessage: string,
      successMessage: string,
      failedCallback?: () => void,
      successCallback?: () => void,
      completedCallback?: () => void
    ) => {
      setPending(true);
      let toastId: React.ReactText;
      contractFn()
        .then((txResponse: ethers.ContractTransaction) => {
          toastId = toast(pendingMessage, {
            autoClose: false,
            closeOnClick: false,
            draggable: false,
            closeButton: false,
          });
          return Promise.all([txResponse.wait(), toastId]);
        })
        .then(([txReceipt, toastId]) => {
          setPending(false);
          toast.dismiss(toastId);
          if (txReceipt.status === 0) {
            toast.error(failedMessage);
            if (failedCallback) failedCallback();
          } else if (txReceipt.status === 1) {
            toast(successMessage);
            if (successCallback) successCallback();
          } else {
            toast.error("Not sure what happened with that transaction");
            if (failedCallback) failedCallback();
          }
          if (completedCallback) completedCallback();
        })
        .catch((error: ProviderRpcError) => {
          console.error(error);
          setPending(false);
          toast.dismiss(toastId);
          if (error.code !== 4001) {
            toast.error("There was an error! Check your browser's console logs for more details.");
          }
          if (failedCallback) failedCallback();
        })
    }, []);

  return { contractCall, pending };
}

export { useTransaction };
