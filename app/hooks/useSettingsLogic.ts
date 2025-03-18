import { useFetcher, useNavigate } from "@remix-run/react";
import { useSubscribeToAllChanges } from "state/stores/use-save-bar-store";
import { useTOCStore } from "state/stores";
import { useAppBridge } from "@shopify/app-bridge-react";

export const useSettingsLogic = () => {
  const fetcher = useFetcher();
  const navigate = useNavigate();
  const shopify = useAppBridge();
  const { hasChanged, setHasChanged } = useSubscribeToAllChanges();
  const resetState = useTOCStore.getState().resetState;

  const onSave = () => {
    const tableOfContents = useTOCStore.getState();
    console.log("state", tableOfContents);

    fetcher.submit(
      { tableOfContents: JSON.stringify(tableOfContents) },
      {
        method: "post",
        action: "/app/settings",
        encType: "application/json",
      }
    );
  };

  const onDiscard = () => {
    shopify.saveBar.hide("my-save-bar");
    resetState();
    setHasChanged(false);
  };

  const handleBack = () => {
    shopify.saveBar.leaveConfirmation().then(() => {
      navigate("/app");
    });
  };

  return { onSave, onDiscard, handleBack, hasChanged };
};
