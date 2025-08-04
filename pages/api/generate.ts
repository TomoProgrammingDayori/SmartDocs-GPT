import type { NextApiRequest, NextApiResponse } from 'next';
import { openai } from '../../lib/openai';
import { supabase } from '../../lib/supabaseClient';

// API route to generate document using OpenAI and store in Supabase
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
   return;
  }

 const { docType, industry, formData, userId } = req.body;

  try {
    // Create prompt based on form data
    const prompt = `Generate a ${industry} ${docType} with the following data: ${JSON.stringify(formData)}`;
    // Call OpenAI GPT-4
    const completion = await openai.createChatCompletion({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'You are a helpful assistant that writes professional documents.' },
        { role: 'user', content: prompt }
      ]
    });

    const content = completion.data.choices[0].message?.content || '';

    // Save to Supabase if user is logged in
    if (userId) {
      await supabase.from('documents').insert({
        user_id: userId,
        doc_type: docType,
        industry,
        content
      });
    }

    res.status(200).json({ content });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate document', details: error });
  }
}