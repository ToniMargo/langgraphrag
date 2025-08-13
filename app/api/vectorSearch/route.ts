import { OpenAIEmbeddings } from "@langchain/openai";
import mongoClientPromise from "@/app/lib/mongodb";
import { MongoDBAtlasVectorSearch } from "@langchain/mongodb";

export async function POST(req: Request) {
    const client = await mongoClientPromise;
    const dbName = "docs";
    const collectionName = "embeddings";
    const collection = client.db(dbName).collection(collectionName);

    const dbConfig = {
        collection: collection,
        indexName: "vector_index",
        textKey: "text",
        embeddingKey: "embedding",
    };
    const vectorStore = new MongoDBAtlasVectorSearch(
        new OpenAIEmbeddings({
            stripNewLines: true,
        }), dbConfig);

    const question = await req.text();
    const retriever = await vectorStore.asRetriever({
        searchType: "mmr",
        searchKwargs: {
            fetchK: 20,
            lambda: 0.1,
        }, 
    });
    const retrievedResults = await retriever.getRelevantDocuments(question);

    return Response.json(retrievedResults);
}
