"use client";
import React, { createContext, useContext, useState } from "react";

interface BookingContextType {
  isOpen: boolean;
  selectedPlan: string;
  openBooking: (planName: string) => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const openBooking = (planName: string) => {
    setSelectedPlan(planName);
    setIsOpen(true);
  };

  const closeBooking = () => setIsOpen(false);

  return (
    <BookingContext.Provider
      value={{ isOpen, selectedPlan, openBooking, closeBooking }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context)
    throw new Error("useBooking must be used within BookingProvider");
  return context;
};
