import { useState } from "react";

import { Dialog } from "@components/index";

const useDialog = (message: string, acceptButtonLabel: string) => {
  const [open, setOpen] = useState<boolean>(false);
  const [chosenOption, setChosenOption] = useState<"Yes" | "Not">("Not");

  const toggleDialog = (): void => {
    setOpen(!open);
  };

  const toggleChosenOption = (option: "Yes" | "Not"): void => {
    setChosenOption(option);
  };

  const DialogBox = (): JSX.Element => {
    return (
      <Dialog
        open={open}
        dialogMessage={message}
        acceptButtonLabel={acceptButtonLabel}
        toggleDialog={toggleDialog}
        toggleChosenOption={toggleChosenOption}
      />
    );
  };

  return {
    DialogBox,
    chosenOption,
    toggleDialog,
  };
};

export default useDialog;
