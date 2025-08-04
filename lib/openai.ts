import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '', // 環境変数が未定義でも型エラー回避
});

export default openai;
