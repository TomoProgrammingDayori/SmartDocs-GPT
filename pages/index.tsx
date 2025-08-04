import { useState } from 'react';
import { useRouter } from 'next/router';

// Top page to choose document type and industry
export default function Home() {
  const router = useRouter();
  const [docType, setDocType] = useState('contract');
  const [industry, setIndustry] = useState('web');

  const handleStart = () => {
    // Navigate to form with query params
    router.push(`/form?docType=${docType}&industry=${industry}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4 p-4">
      <h1 className="text-2xl font-bold">SmartDocs GPT</h1>
      <div className="space-y-2">
        <label className="block">
          <span>Document Type</span>
          <select className="border p-2" value={docType} onChange={e => setDocType(e.target.value)}>
            <option value="contract">Contract</option>
            <option value="invoice">Invoice</option>
            <option value="estimate">Estimate</option>
          </select>
        </label>
        <label className="block">
          <span>Industry</span>
          <select className="border p-2" value={industry} onChange={e => setIndustry(e.target.value)}>
            <option value="web">Web Production</option>
            <option value="writer">Writer</option>
            <option value="video">Video Editing</option>
          </select>
        </label>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2" onClick={handleStart}>Start</button>
    </div>
  );
}