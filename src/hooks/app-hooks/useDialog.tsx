import { useState } from "react";

import { Dialog } from "@components/index";

const useDialog = (
  message: string,
  acceptButtonLabel: string,
  action: (
    elementId: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>
) => {
  const [open, setOpen] = useState<boolean>(false);
  const [elementId, setElementId] = useState<string>("");

  const toggleDialog = (): void => {
    setOpen(!open);
  };

  const updateElementId = (elementId: string): void => {
    setElementId(elementId);
  };

  const DialogBox = (): JSX.Element => {
    return (
      <Dialog
        open={open}
        dialogMessage={message}
        acceptButtonLabel={acceptButtonLabel}
        elementId={elementId}
        toggleDialog={toggleDialog}
        action={action}
      />
    );
  };

  return {
    DialogBox,
    toggleDialog,
    updateElementId,
  };
};

export default useDialog;
