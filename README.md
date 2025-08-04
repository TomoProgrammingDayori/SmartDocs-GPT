

# 📄 SmartDocs GPT

業界特化型のAIドキュメント生成ツール。Web制作・ライター・動画編集など、フリーランスや中小事業者向けに、契約書・請求書・見積書を自動生成します。

OpenAI GPTとCodexを活用し、入力内容に応じて業界標準の文書を即座に作成。PDF出力や履歴管理機能も搭載しています。

---

## 🚀 主な特徴

- ✅ 業界別テンプレート（Web制作、ライター、動画編集）
- 🧠 GPT-4による文章自動生成
- 🧾 Markdown＋PDF出力対応
- 🔒 Supabaseでの認証＋履歴保存
- 📱 スマホ対応のシンプルUI（Next.js + Tailwind CSS）

---

## 🛠️ 使用技術

| 項目        | 技術・サービス              |
|-------------|------------------------------|
| フロントエンド | Next.js / React / Tailwind CSS |
| バックエンド   | Supabase (Auth + DB)         |
| AI          | OpenAI GPT-4 / Codex         |
| 文書出力     | Markdown / html-pdf など      |

---
## 📷 スクリーンショット
<img width="675" height="421" alt="スクリーンショット 2025-08-04 101309" src="https://github.com/user-attachments/assets/fae5ac25-ed97-4258-9536-3183e30ad4c9" />


---

## 📂 ファイル構成

```

.
├── pages/
│   ├── index.tsx         # トップページ（選択画面）
│   ├── form.tsx          # 入力フォーム
│   ├── result.tsx        # 生成結果表示
│   └──dashboard.tsx      # 履歴管理
├── components/
│   └── ...               # UI部品群
├── lib
│   ├── openai.ts         # GPT呼び出し関数
│   └── supabaseClient.ts # Supabase初期化
├── .env.local.example    # 環境変数例
└── README.md

````

---

## ⚙️ セットアップ手順

1. リポジトリをクローン：
   ```bash
   git clone https://github.com/your-username/smartdocs-gpt.git
   cd smartdocs-gpt
```

2. 必要なパッケージをインストール：

   ```bash
   npm install
   ```

3. `.env.local` を作成し、以下を設定：

   ```
   NEXT_PUBLIC_SUPABASE_URL=
   NEXT_PUBLIC_SUPABASE_ANON_KEY=
   OPENAI_API_KEY=
   ```

4. 開発サーバーを起動：

   ```bash
   npm run dev
   ```

---

## 🖼️ 使用例（Web制作契約書）

1. 「契約書」→「Web制作」を選択
2. 氏名・報酬・納期などを入力
3. GPTが契約書を生成（例：業務範囲・著作権・支払い条件など）
4. Markdown表示＋PDFダウンロード

---

## 💡 今後の予定

* 他業種テンプレート追加（コンサル、翻訳、広告代理業など）
* 独自テンプレート登録機能
* 英語出力対応
* チーム共有機能

---

## 📬 お問い合わせ・貢献

バグ報告・提案・改善PRなど歓迎です！まずは [Issues](https://github.com/your-username/smartdocs-gpt/issues) からどうぞ。

---
## 🧑‍💻 作者

[ともプログラム便り](https://github.com/TomoProgrammingDayori)

ポートフォリオやAIツール開発に関する情報もぜひご覧ください！


---

## 📄 ライセンス

MIT License
