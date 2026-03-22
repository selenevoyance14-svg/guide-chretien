import { getAllArticles, CATEGORIES } from "@/lib/articles";
import { Cross, Search, BookOpen, Heart } from "lucide-react";
import DailyContent from "@/components/DailyContent";

export default function HomePage() {
  const articles = getAllArticles();
  const recent = articles.slice(0, 6);

  return (
    <div>
      {/* HERO */}
      <section className="bg-gradient-to-br from-amber-50 to-yellow-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Cross size={48} className="text-amber-500 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Votre <span className="text-amber-600">Guide</span> Chretien
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Bibles, livres inspirants, cadeaux de bapteme, anges gardiens, objets de devotion...
            Tout pour nourrir votre foi au quotidien.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {Object.entries(CATEGORIES).map(([slug, cat]) => (
              <a key={slug} href={`/categorie/${slug}`} className="btn-gold flex items-center gap-2 text-sm">
                <cat.Icon size={16} /> {cat.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PRIERE DU JOUR */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Votre moment spirituel du jour</h2>
          <a href="/priere-du-jour" className="text-amber-600 text-sm font-semibold hover:underline">Voir la page &rarr;</a>
        </div>
        <DailyContent />
      </section>

      {/* CATEGORIES */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Nos categories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(CATEGORIES).map(([slug, cat]) => {
            const count = articles.filter((a) => a.categorie === slug).length;
            return (
              <a key={slug} href={`/categorie/${slug}`}
                className="card-article p-8 text-center group">
                <div className="flex justify-center mb-3 text-amber-500">
                  <cat.Icon size={40} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition">
                  {cat.label}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{cat.description}</p>
                <span className="badge">{count} guide{count > 1 ? "s" : ""}</span>
              </a>
            );
          })}
        </div>
      </section>

      {/* DERNIERS ARTICLES */}
      {recent.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 pb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Derniers guides</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recent.map((article) => {
              const cat = CATEGORIES[article.categorie];
              return (
                <a key={article.slug} href={`/categorie/${article.categorie}/${article.slug}`}
                  className="card-article group">
                  <div className="bg-amber-50 h-40 flex items-center justify-center text-amber-300">
                    {cat ? <cat.Icon size={48} /> : <Cross size={48} />}
                  </div>
                  <div className="p-5">
                    <span className="badge mb-2 inline-flex items-center gap-1">
                      {cat && <cat.Icon size={11} />} {cat?.label}
                    </span>
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2">{article.description}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      )}

      {/* POURQUOI NOUS FAIRE CONFIANCE */}
      <section className="bg-amber-50 py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Pourquoi nous faire confiance ?</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              { Icon: Search,   title: "Selection rigoureuse",    desc: "Chaque produit est analyse en detail : qualite, avis de la communaute chretienne, rapport qualite/prix." },
              { Icon: BookOpen, title: "Ancre dans la foi",        desc: "Notre selection respecte les valeurs chretiennes et met en avant des ouvrages et objets de qualite." },
              { Icon: Heart,    title: "Avec le coeur",            desc: "Nous choisissons chaque recommandation avec soin, pour vous aider a grandir dans votre vie spirituelle." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex justify-center mb-3 text-amber-500">
                  <item.Icon size={32} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
