import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

interface DocRow {
  id: string;
  doc_type: string;
  industry: string;
  content: string;
  created_at: string;
}

// Dashboard page to list generated documents
export default function Dashboard() {
  const [docs, setDocs] = useState<DocRow[]>([]);

  useEffect(() => {
    const load = async () => {
      const user = await supabase.auth.getUser();
      if (user.data.user) {
        const { data } = await supabase
          .from<DocRow>('documents')
          .select('*')
          .eq('user_id', user.data.user.id)
          .order('created_at', { ascending: false });
        setDocs(data || []);
      }
    };
    load();
  }, []);

  return (
    <div className="p-4 max-w-3xl mx-auto space-y-4">
      <h1 className="text-xl font-bold">History</h1>
      {docs.map((d) => (
        <div key={d.id} className="border p-2">
          <div className="font-semibold">{d.doc_type} - {d.industry}</div>
          <pre className="whitespace-pre-wrap text-sm">{d.content}</pre>
        </div>
      ))}
    </div>
  );
}