export interface ArticleSection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface ArticleQuestion {
  question: string;
  answer: string;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  image?: string;
  intro: string[];
  sections: ArticleSection[];
  questions: ArticleQuestion[];

  relatedService: {
    label: string;
    href: string;
  };
}