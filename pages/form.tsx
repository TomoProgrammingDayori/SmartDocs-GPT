import { useRouter } from 'next/router';
import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

// Form page to collect document details
export default function FormPage() {
  const router = useRouter();
  const { docType, industry } = router.query as { docType?: string; industry?: string };

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    amount: '',
    dueDate: '',
    payment: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const user = await supabase.auth.getUser();
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ docType, industry, formData, userId: user.data.user?.id })
    });
    const data = await response.json();
    setLoading(false);
    router.push(`/result?content=${encodeURIComponent(data.content)}`);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Input Information</h1>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input className="w-full border p-2" name="name" placeholder="Your Name" onChange={handleChange} />
        <input className="w-full border p-2" name="company" placeholder="Company" onChange={handleChange} />
        <input className="w-full border p-2" name="amount" placeholder="Amount" onChange={handleChange} />
        <input className="w-full border p-2" name="dueDate" placeholder="Due Date" onChange={handleChange} />
        <input className="w-full border p-2" name="payment" placeholder="Payment Terms" onChange={handleChange} />
        <button
          className="bg-green-500 text-white px-4 py-2"
          type="submit"
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate'}
        </button>
      </form>
    </div>
  );
}