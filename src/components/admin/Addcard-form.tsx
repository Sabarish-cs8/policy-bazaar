'use client'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {  useToast } from '@/hooks/use-toast';
import { PlanTypeEnum } from '@/utils/cardUtils';
import React from 'react';
import { useAddCard } from '@/hook/addCard';
import { useRouter } from 'next/navigation';

const AddCardForm = () => {
  const { toast } = useToast();
  const router = useRouter();
  const {formData,setFormData} =useAddCard()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle the change of planType from the Select component
  const handlePlanTypeChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      planType: value as PlanTypeEnum, 
    }));
  };

  // Handle file upload for the icon
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Convert the file to a base64 string or handle it according to your needs
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          icon: reader.result as string, 
        }));
      };
      reader.readAsDataURL(file);
    }
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
          planType: formData.planType, 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('✅ Card added successfully:', data);
        toast({
          title:'Card added successfully!',
        })
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
          planType: PlanTypeEnum.LifetimeFree,
        });
        
        router.push('/adminportal/admin-login')
      } else {
        console.error(' Failed to add card:', data);
        toast({
          title:
          `Failed to add card: ${data.error || 'Unknown error'}`
        })
      }
    } catch (error) {
      console.error(' Error adding card:', error);
      toast({
        title:'Error adding card. Please try again.'
    });
    }
  };

  return (
    <div className='space-y-2'>
    <h1 className='text-3xl text-[#253858]'>
        Add New Card
        </h1>
    <div className="p-6 border rounded-md shadow-md max-w-lg mx-auto mt-8 bg-white">
      <h2 className="text-2xl font-bold mb-4">Add a New Card</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addCard();
        }}
      >
        {/** Icon URL or File Upload */}
        <label className="block mb-2">
          Icon (URL or Upload):
          <input
            type="text"
            name="icon"
            value={formData.icon}
            onChange={handleChange}
            className="w-full border p-2 rounded-md mt-1"
            placeholder="Enter image URL"
          />
          <div className="mt-2">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="border p-2 rounded-md mt-1"
            />
          </div>
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

        {/** Plan Type */}
        <label className="block mb-4">
          Plan Type:
          <Select value={formData.planType} onValueChange={handlePlanTypeChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Plan Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={PlanTypeEnum.LifetimeFree}>{PlanTypeEnum.LifetimeFree}</SelectItem>
              <SelectItem value={PlanTypeEnum.ShariahCompliant}>{PlanTypeEnum.ShariahCompliant}</SelectItem>
            </SelectContent>
          </Select>
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
    </div>
  );
};

export default AddCardForm;
