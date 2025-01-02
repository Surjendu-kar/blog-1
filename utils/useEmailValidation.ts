"use client";
import { useState } from "react";

export interface UseEmailValidationReturn {
  email: string;
  isValid: boolean;
  setEmail: (value: string) => void;
  validateEmail: (email: string) => boolean;
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useEmailValidation = (
  initialEmail: string = ""
): UseEmailValidationReturn => {
  const [email, setEmail] = useState(initialEmail);
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (email: string): boolean => {
    if (!email) return true;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsValid(validateEmail(value));
  };

  return {
    email,
    isValid,
    setEmail,
    validateEmail,
    handleEmailChange,
  };
};
