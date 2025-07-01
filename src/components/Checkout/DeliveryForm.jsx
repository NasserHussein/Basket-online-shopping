import { useState } from 'react';

const InputField = ({ label, type = 'text', optional }) => {
  const [value, setValue] = useState('');

  return (
    <div className="relative w-full">
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder=" "
        className="peer w-full rounded border border-gray-300 px-4 pt-5 pb-2 focus:border-[#1773B0] focus:outline-none"
      />
      <label
        className={`absolute top-2 left-4 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#1773B0]`}
      >
        {label}
        {optional && <span className="ml-1 text-gray-400">(optional)</span>}
      </label>
    </div>
  );
};

const DeliveryForm = () => {
  return (
    <div className=''>
      <h2 className="mb-4 text-xl font-semibold">Delivery</h2>
      <form className="space-y-4">
        <InputField label="Country/Region" />

        <div className="flex flex-col gap-4 sm:flex-row">
          <InputField label="First name" />
          <InputField label="Last name" />
        </div>
        <InputField label="Address" />
        <InputField label="Apartment, suite, etc." optional />
        <div className="flex flex-col gap-4 sm:flex-row">
          <InputField label="Postal code" />
          <InputField label="City" />
        </div>
        <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="accent-blue-600" />
            Save this information for next time
          </label>
      </form>
    </div>
  );
};

export default DeliveryForm;
