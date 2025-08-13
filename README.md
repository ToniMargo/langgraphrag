# LangChain RAG Chatbot

LangChain RAG Chatbot is a simple Retrieval-Augmented Generation (RAG) application built with Next.js, MongoDB Atlas Vector Search, and OpenAI embeddings. It allows users to ask natural language questions about installing the FancyWidget library and receive answers based solely on the uploaded documentation.

## 📦 Requirements
- Node.js (v14 or later)
- MongoDB Atlas account
- An open MongoDB Atlas project with one running cluster
- OpenAI API key (with at least $5 credits): [Get API Key](https://platform.openai.com/signup)

## 🚀 Setup Instructions

### 1. Clone the repository and install dependencies
```bash
npm install
```

### 2. Configure environment variables  
Rename `.env.example` to `.env` and add your API keys and MongoDB URI:
```
OPENAI_API_KEY=your_openai_key
MONGODB_ATLAS_URI=your_mongodb_connection_string
```

### 3. Embed documentation data  
Run the script to upload and embed the FancyWidget documentation into your MongoDB collection:
```bash
npm run embed
```

### 4. Create a Vector Search index in MongoDB Atlas  
Go to **SERVICES → Atlas Search → + CREATE SEARCH INDEX**, and create a vector index with the following definition:
```json
{
  "fields": [
    {
      "numDimensions": 1536,
      "path": "embedding",
      "similarity": "cosine",
      "type": "vector"
    }
  ]
}
```
- **Database:** `docs`  
- **Collection:** `embeddings`  
- **Index name:** `vector_index`

### 5. Start the development server
```bash
npm run dev
```

### 6. Access the chatbot frontend  
Open your browser and go to:
```
http://localhost:3000
```
Ask a question such as:
> "How can I install the FancyWidget library?"

The chatbot will retrieve relevant context from the database and respond using only the provided documentation.

## 💬 Example Queries
- "How do I install FancyWidget on macOS?"
- "Does FancyWidget require dependencies before installation?"
- "Show me the steps to set up FancyWidget for the first time."

## 🛠 Tech Stack
- **Next.js** (frontend & API routes)
- **MongoDB Atlas Vector Search**
- **OpenAI Embeddings** (`text-embedding-ada-002`)
- **LangChain.js**
- **TypeScript, Node.js**

## 🧾 License
MIT License. This project is for educational and demonstration purposes only.
