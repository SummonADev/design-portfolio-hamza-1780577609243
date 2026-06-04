import { useState, useCallback } from 'react';
import type { ContactFormData } from '@/types';

const initialState: ContactFormData = {
  name: '',
  email: '',
  message: '',
};

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      setSending(true);

      // Simulate sending
      setTimeout(() => {
        // Save to localStorage as a simple record
        const messages = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
        messages.push({ ...formData, date: new Date().toISOString() });
        localStorage.setItem('portfolio_messages', JSON.stringify(messages));

        setSending(false);
        setSubmitted(true);
        setFormData(initialState);

        setTimeout(() => setSubmitted(false), 4000);
      }, 1200);
    },
    [formData]
  );

  return { formData, submitted, sending, handleChange, handleSubmit };
}