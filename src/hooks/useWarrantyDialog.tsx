"use client";

import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWarrantyDialogOpen } from "@/store/app";
import { RootState } from "@/store";

/**
 * A hook for managing warranty dialog state
 */
interface UseWarrantyDialogResult {
  isOpen: boolean;
  openDialog: () => void;
  closeDialog: () => void;
}

export function useWarrantyDialog(): UseWarrantyDialogResult {
  const dispatch = useDispatch();
  const isOpen = useSelector(
    (state: RootState) => state.app.warrantyDialogOpen,
  );

  const openDialog = useCallback(() => {
    dispatch(setWarrantyDialogOpen(true));
  }, [dispatch]);

  const closeDialog = useCallback(() => {
    dispatch(setWarrantyDialogOpen(false));
  }, [dispatch]);

  return {
    isOpen,
    openDialog,
    closeDialog,
  };
}

export default useWarrantyDialog;
