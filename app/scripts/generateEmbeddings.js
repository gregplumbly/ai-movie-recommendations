const OpenAI = require("openai");
const { createClient } = require("@supabase/supabase-js");
const podcasts = require("./content.js");

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const privateKey = process.env.SUPABASE_ANON_KEY;
if (!privateKey) throw new Error(`Expected env var SUPABASE_API_KEY`);
const url = process.env.SUPABASE_URL;
if (!url) throw new Error(`Expected env var SUPABASE_URL`);
const supabase = createClient(url, privateKey);

async function generateEmbeddings(input) {
    const data = await Promise.all(
        input.map(async (textChunk) => {
            const embeddingResponse = await openai.embeddings.create({
                model: "text-embedding-ada-002",
                input: textChunk,
            });
            return {
                content: textChunk,
                embedding: embeddingResponse.data[0].embedding,
            };
        })
    );
    await supabase.from("documents").insert(data);
    console.log("Embedding and storing complete!");
}

generateEmbeddings(podcasts);
