import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BookOpen, Heart, Gift, Sparkles, Church, Flame, type LucideIcon } from "lucide-react";

const contentDir = path.join(process.cwd(), "content");

export interface Article {
  slug: string;
  categorie: string;
  title: string;
  description: string;
  date: string;
  image?: string;
  featured?: boolean;
  content: string;
}

export interface ArticleMeta extends Omit<Article, "content"> {}

export function getAllArticles(): ArticleMeta[] {
  const categories = fs.readdirSync(contentDir).filter((f) =>
    fs.statSync(path.join(contentDir, f)).isDirectory()
  );

  const articles: ArticleMeta[] = [];

  for (const categorie of categories) {
    const catDir = path.join(contentDir, categorie);
    const files = fs.readdirSync(catDir).filter((f) => f.endsWith(".mdx"));

    for (const file of files) {
      const slug = file.replace(".mdx", "");
      const raw = fs.readFileSync(path.join(catDir, file), "utf-8");
      const { data } = matter(raw);

      articles.push({
        slug,
        categorie,
        title: data.title,
        description: data.description,
        date: data.date,
        image: data.image,
        featured: data.featured ?? false,
      });
    }
  }

  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticle(categorie: string, slug: string): Article | null {
  const filePath = path.join(contentDir, categorie, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    categorie,
    title: data.title,
    description: data.description,
    date: data.date,
    image: data.image,
    featured: data.featured ?? false,
    content,
  };
}

export function getArticlesByCategorie(categorie: string): ArticleMeta[] {
  return getAllArticles().filter((a) => a.categorie === categorie);
}

export const CATEGORIES: Record<string, { label: string; Icon: LucideIcon; description: string }> = {
  bibles:  { label: "Bibles",             Icon: BookOpen, description: "Bibles d'etude, pour enfants, comparatifs des editions" },
  livres:  { label: "Livres Chretiens",   Icon: Heart,    description: "Livres inspirants, developpement spirituel, temoignages" },
  cadeaux: { label: "Cadeaux",            Icon: Gift,     description: "Cadeaux bapteme, communion, confirmation, Noel chretien" },
  anges:   { label: "Anges & Spirituel",  Icon: Sparkles, description: "Anges gardiens, archanges, protection spirituelle" },
  objets:  { label: "Objets de Devotion", Icon: Church,   description: "Chapelets, croix, medailles, icones, bougies" },
  priere:  { label: "Priere",             Icon: Flame,    description: "Guides de priere, meditation chretienne, neuvaines" },
};
