import Quote from "@/components/quote";
import { QUOTES } from "@/data";

export default function Home() {
  const quotes = QUOTES;

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return (
    <div>
      <Quote quote={randomQuote} />
    </div>
  );
}
