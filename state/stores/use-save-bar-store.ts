import { useEffect, useState } from "react";
import lodash from 'lodash';
import { useTOCStore } from ".";
const { isEqual } = lodash;
export const useSubscribeToAllChanges = () => {
  const [hasChanged, setHasChanged] = useState(false);
  const state = useTOCStore();

  useEffect(() => {
    const unsubscribe = useTOCStore.subscribe(
      (newState, prevState) => {
        setHasChanged(!isEqual(newState, prevState));
      }
    );

    return () => unsubscribe();
  }, [state]);

  return { hasChanged, setHasChanged };
};
