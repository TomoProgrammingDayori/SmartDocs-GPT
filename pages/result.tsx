import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import jsPDF from 'jspdf';

// Result page displays generated document and allows PDF download
export default function ResultPage() {
  const router = useRouter();
  const { content } = router.query;
  const [text, setText] = useState('');

  useEffect(() => {
    if (typeof content === 'string') {
      setText(content);
    }
  }, [content]);

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.text(text, 10, 10);
    doc.save('document.pdf');
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Generated Document</h1>
      <pre className="whitespace-pre-wrap border p-4 bg-gray-50">{text}</pre>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2" onClick={handleDownload}>Download PDF</button>
    </div>
  );
}