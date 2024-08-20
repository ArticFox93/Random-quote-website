export interface QuoteProps {
  author: string;
  text: string;
}

export const QUOTES: QuoteProps[] = [
  {
    author: "Albert Einstein",
    text: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  },
  {
    author: "Isaac Newton",
    text: "If I have seen further, it is by standing on the shoulders of giants.",
  },
  {
    author: "Yoda",
    text: "Do or do not. There is no try.",
  },
  {
    author: "Mahatma Gandhi",
    text: "Be the change that you wish to see in the world.",
  },
  {
    author: "Nelson Mandela",
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  },
  {
    author: "Confucius",
    text: "It does not matter how slowly you go as long as you do not stop.",
  },
  {
    author: "Walt Disney",
    text: "The way to get started is to quit talking and begin doing.",
  },
  {
    author: "Steve Jobs",
    text: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
  },
  {
    author: "Eleanor Roosevelt",
    text: "The future belongs to those who believe in the beauty of their dreams.",
  },
  {
    author: "Oprah Winfrey",
    text: "The biggest adventure you can take is to live the life of your dreams.",
  },
] as const;
