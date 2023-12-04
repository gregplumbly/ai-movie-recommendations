import Image from "next/image";
import MovieSelection from "./components/MovieSelection";
import { openai, supabase } from './lib/generate-embeddings';

export default function Home() {
    return (
        <main className="w-5/6 mx-auto md:max-w-3xl">
            <MovieSelection />
        </main>
    );
}
