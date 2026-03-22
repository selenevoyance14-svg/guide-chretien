import type { Metadata } from "next";
import "./globals.css";
import { BookOpen, Heart, Gift, Sparkles, Church, Flame, Cross, ShoppingBag } from "lucide-react";

export const metadata: Metadata = {
  title: "Guide Chretien — Foi, Livres, Cadeaux & Spiritualite",
  description: "Guides d'achat et comparatifs chretiens : bibles, livres inspirants, cadeaux de bapteme et communion, objets de devotion. Tout pour nourrir votre foi.",
  keywords: "bible etude, cadeau bapteme, livre chretien, chapelet, ange gardien, priere, meditation chretienne",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Guide Chretien — Foi, Livres & Spiritualite",
    description: "Comparatifs et guides d'achat pour les chretiens. Bibles, livres, cadeaux, objets de devotion.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        {/* HEADER */}
        <header className="sticky top-0 z-50 bg-white border-b border-amber-100 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <Cross size={22} className="text-amber-500" />
              <span className="text-xl font-bold text-amber-600">Guide</span>
              <span className="text-xl font-bold text-gray-800">Chretien</span>
            </a>
            <nav className="hidden md:flex items-center gap-5 text-sm font-medium">
              <a href="/categorie/bibles" className="flex items-center gap-1.5 text-gray-600 hover:text-amber-600 transition">
                <BookOpen size={15} /> Bibles
              </a>
              <a href="/categorie/livres" className="flex items-center gap-1.5 text-gray-600 hover:text-amber-600 transition">
                <Heart size={15} /> Livres
              </a>
              <a href="/categorie/cadeaux" className="flex items-center gap-1.5 text-gray-600 hover:text-amber-600 transition">
                <Gift size={15} /> Cadeaux
              </a>
              <a href="/categorie/anges" className="flex items-center gap-1.5 text-gray-600 hover:text-amber-600 transition">
                <Sparkles size={15} /> Anges
              </a>
              <a href="/categorie/objets" className="flex items-center gap-1.5 text-gray-600 hover:text-amber-600 transition">
                <Church size={15} /> Devotion
              </a>
              <a href="/categorie/priere" className="flex items-center gap-1.5 text-gray-600 hover:text-amber-600 transition">
                <Flame size={15} /> Priere
              </a>
              <a href="/priere-du-jour" className="flex items-center gap-1.5 text-amber-600 font-semibold hover:text-amber-700 transition">
                <Cross size={15} /> Du jour
              </a>
              <a href="/boutique" className="flex items-center gap-1.5 text-gray-600 hover:text-amber-600 transition">
                <ShoppingBag size={15} /> Boutique
              </a>
            </nav>
            <nav className="md:hidden flex items-center gap-3">
              <a href="/categorie/bibles" className="text-gray-600 hover:text-amber-600"><BookOpen size={20} /></a>
              <a href="/categorie/cadeaux" className="text-gray-600 hover:text-amber-600"><Gift size={20} /></a>
              <a href="/categorie/anges" className="text-gray-600 hover:text-amber-600"><Sparkles size={20} /></a>
              <a href="/categorie/priere" className="text-gray-600 hover:text-amber-600"><Flame size={20} /></a>
              <a href="/priere-du-jour" className="text-amber-600 hover:text-amber-700"><Cross size={20} /></a>
              <a href="/boutique" className="text-gray-600 hover:text-amber-600"><ShoppingBag size={20} /></a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        {/* FOOTER */}
        <footer className="bg-gray-50 border-t border-gray-100 mt-16">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Cross size={18} className="text-amber-500" />
                  <span className="font-bold text-amber-600">Guide Chretien</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Guides d&apos;achat et ressources pour les chretiens. Bibles, livres, cadeaux, objets de devotion et vie spirituelle.
                </p>
                <p className="text-xs text-gray-400 mt-3 italic">
                  En tant que partenaire Amazon, nous percevons une commission sur les achats qualifies, sans surcout pour vous.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Categories</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li><a href="/categorie/bibles" className="flex items-center gap-1.5 hover:text-amber-600 transition"><BookOpen size={13} /> Bibles</a></li>
                  <li><a href="/categorie/livres" className="flex items-center gap-1.5 hover:text-amber-600 transition"><Heart size={13} /> Livres Chretiens</a></li>
                  <li><a href="/categorie/cadeaux" className="flex items-center gap-1.5 hover:text-amber-600 transition"><Gift size={13} /> Cadeaux</a></li>
                  <li><a href="/categorie/anges" className="flex items-center gap-1.5 hover:text-amber-600 transition"><Sparkles size={13} /> Anges & Spirituel</a></li>
                  <li><a href="/categorie/objets" className="flex items-center gap-1.5 hover:text-amber-600 transition"><Church size={13} /> Objets de Devotion</a></li>
                  <li><a href="/categorie/priere" className="flex items-center gap-1.5 hover:text-amber-600 transition"><Flame size={13} /> Priere</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Informations</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li><a href="/mentions-legales" className="hover:text-amber-600 transition">Mentions legales</a></li>
                  <li><a href="/confidentialite" className="hover:text-amber-600 transition">Politique de confidentialite</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-200 mt-8 pt-6 text-center text-xs text-gray-400">
              &copy; 2026 Guide Chretien — Tous droits reserves
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
