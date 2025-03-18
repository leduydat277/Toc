import { useNavigate } from "@remix-run/react";
import { useAppBridge } from "@shopify/app-bridge-react";

export const useNavigateLeaveConfirm = () => {
  const navigate = useNavigate();
  const shopify = useAppBridge();

  const navigateWithConfirm = (path: string) => {
    shopify.saveBar.leaveConfirmation().then(() => {
      navigate(path);
    });
  };

  return navigateWithConfirm;
};
