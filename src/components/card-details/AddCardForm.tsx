'use client';

import React, { useState } from 'react';

const AddCardForm = () => {
  const [formData, setFormData] = useState({
    icon: '',
    bankName: '',
    cardName: '',
    monthlyIncome: '',
    annualFees: '',
    features: '',
    rewards: '',
    benefits: '',
    annualFee: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addCard = async () => {
    try {
      const response = await fetch('/api/card-details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          monthlyIncome: parseFloat(formData.monthlyIncome),
          features: formData.features.split(',').map((item) => item.trim()),
          rewards: formData.rewards.split(',').map((item) => item.trim()),
          benefits: formData.benefits.split(',').map((item) => item.trim()),
          annualFee: formData.annualFee.split(',').map((item) => item.trim()),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('✅ Card added successfully:', data);
        alert('Card added successfully!');
        setFormData({
          icon: '',
          bankName: '',
          cardName: '',
          monthlyIncome: '',
          annualFees: '',
          features: '',
          rewards: '',
          benefits: '',
          annualFee: '',
        });
      } else {
        console.error('❌ Failed to add card:', data);
        alert(`Failed to add card: ${data.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('❌ Error adding card:', error);
      alert('Error adding card. Please try again.');
    }
  };

  return (
    <div className="p-6 border rounded-md shadow-md max-w-lg mx-auto mt-8 bg-white">
      <h2 className="text-2xl font-bold mb-4">Add a New Card</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addCard();
        }}
      >
        {/** Icon URL */}
        <label className="block mb-2">
          Icon URL:
          <input
            type="text"
            name="icon"
            value={formData.icon}
            onChange={handleChange}
            className="w-full border p-2 rounded-md mt-1"
            required
          />
        </label>

        {/** Bank Name */}
        <label className="block mb-2">
          Bank Name:
          <input
            type="text"
            name="bankName"
            value={formData.bankName}
            onChange={handleChange}
            className="w-full border p-2 rounded-md mt-1"
            required
          />
        </label>

        {/** Card Name */}
        <label className="block mb-2">
          Card Name:
          <input
            type="text"
            name="cardName"
            value={formData.cardName}
            onChange={handleChange}
            className="w-full border p-2 rounded-md mt-1"
            required
          />
        </label>

        {/** Monthly Income */}
        <label className="block mb-2">
          Monthly Income:
          <input
            type="number"
            name="monthlyIncome"
            value={formData.monthlyIncome}
            onChange={handleChange}
            className="w-full border p-2 rounded-md mt-1"
            required
          />
        </label>

        {/** Annual Fees */}
        <label className="block mb-2">
          Annual Fees:
          <input
            type="text"
            name="annualFees"
            value={formData.annualFees}
            onChange={handleChange}
            className="w-full border p-2 rounded-md mt-1"
            required
          />
        </label>

        {/** Features */}
        <label className="block mb-2">
          Features (comma-separated):
          <textarea
            name="features"
            value={formData.features}
            onChange={handleChange}
            className="w-full border p-2 rounded-md mt-1"
          />
        </label>

        {/** Rewards */}
        <label className="block mb-2">
          Rewards (comma-separated):
          <textarea
            name="rewards"
            value={formData.rewards}
            onChange={handleChange}
            className="w-full border p-2 rounded-md mt-1"
          />
        </label>

        {/** Benefits */}
        <label className="block mb-2">
          Benefits (comma-separated):
          <textarea
            name="benefits"
            value={formData.benefits}
            onChange={handleChange}
            className="w-full border p-2 rounded-md mt-1"
          />
        </label>

        {/** Annual Fee */}
        <label className="block mb-4">
          Annual Fee (comma-separated):
          <textarea
            name="annualFee"
            value={formData.annualFee}
            onChange={handleChange}
            className="w-full border p-2 rounded-md mt-1"
          />
        </label>

        {/** Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Add Card
        </button>
      </form>
    </div>
  );
};

export default AddCardForm;
