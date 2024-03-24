"use client";

import { createContext, useContext, useEffect, useState } from "react";

const SendMailInputFormContext = createContext();

// Create a provider component
const SendMailFormProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formView, setFormView] = useState("");
  const [suggestedContacts, setSuggestedContacts] = useState([]);
  const [selectedContacts, setSelectedContacts] = useState([]);

  const [formData, setFormData] = useState({
    receiver_email: [],
  });
  const [formField, setFormField] = useState({
    message_body: "",
    sender_email: "okeydeede@gmail.com",
    subject: "",
  });

  const openModal = (state, elem) => {
    setIsOpen((prevState) => !prevState);
    setFormView(elem);
  };
  const handleInputChange = (fieldName, value) => {
    setFormField((prevFormField) => ({
      ...prevFormField,
      [fieldName]: value,
    }));
  };

  const handleComboItemClick = (fieldName, fullName) => {
    // Check if the fullName is already present in the selectedContacts array
    if (!selectedContacts.includes(fullName)) {
      // If not present, add it to newSelectedContacts
      const newSelectedContacts = [...selectedContacts, fullName];
      setSelectedContacts(newSelectedContacts);

      // Update the formData state with the newSelectedContacts
      setFormData((prevState) => ({
        ...prevState,
        [fieldName]: newSelectedContacts,
      }));
    }
  };

  const handleRemoveReceiverEmail = (fieldName, emailToRemove) => {
    // Filter out the emailToRemove from selectedContacts array
    const updatedSelectedContacts = selectedContacts.filter(
      (email) => email !== emailToRemove
    );
    // Update the state with the filtered selectedContacts array
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: prevState[fieldName].filter(
        (email) => email !== emailToRemove
      ),
    }));
    // Update selectedContacts state with the filtered array
    setSelectedContacts(updatedSelectedContacts);
  };

  const close = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Update formField with allEmails
    setFormField((prevState) => ({
      ...prevState,
      to: [...formData.receiver_email],
    }));
  }, [formData]);

  return (
    <SendMailInputFormContext.Provider
      value={{
        isOpen,
        openModal,
        close,
        formView,
        handleComboItemClick,
        handleInputChange,
        suggestedContacts,
        setSuggestedContacts,
        formField,
        setFormField,
        formData,
        handleRemoveReceiverEmail,
      }}
    >
      {children}
    </SendMailInputFormContext.Provider>
  );
};

// Custom hook to use the context
const useInputFormModal = () => {
  const context = useContext(SendMailInputFormContext);
  if (!context) {
    throw new Error("useToggle must be used within a ToggleProvider");
  }
  return context;
};

export { SendMailFormProvider, useInputFormModal };
