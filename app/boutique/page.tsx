import { BookOpen, Heart, Gift, Sparkles, Church, Flame, Cross, ShoppingBag } from "lucide-react";

const PRODUCTS = [
  {
    category: "Bibles",
    icon: BookOpen,
    items: [
      { name: "Bible de Jerusalem — Grand format", desc: "La reference pour l'etude biblique, notes completes", link: "https://www.amazon.fr/s?k=Bible+de+Jerusalem+grand+format+etude&tag=lebrunnathali-21" },
      { name: "Bible du Semeur", desc: "Traduction claire et accessible, ideale pour debuter", link: "https://www.amazon.fr/s?k=Bible+du+Semeur+etude&tag=lebrunnathali-21" },
      { name: "Bible pour enfants illustree", desc: "De belles illustrations pour transmettre la foi aux petits", link: "https://www.amazon.fr/s?k=Bible+enfants+illustree+cartonnee&tag=lebrunnathali-21" },
      { name: "ZeBible pour ados", desc: "La Bible pensee pour les adolescents, ton moderne", link: "https://www.amazon.fr/s?k=ZeBible+adolescents&tag=lebrunnathali-21" },
    ],
  },
  {
    category: "Livres Chretiens",
    icon: Heart,
    items: [
      { name: "L'Imitation de Jesus-Christ", desc: "Le livre spirituel le plus lu apres la Bible", link: "https://www.amazon.fr/s?k=Imitation+Jesus+Christ+Thomas+Kempis&tag=lebrunnathali-21" },
      { name: "Les Chroniques de Narnia — C.S. Lewis", desc: "Allegorie chretienne deguisee en aventure fantastique", link: "https://www.amazon.fr/s?k=Chroniques+Narnia+C.S.+Lewis+integrale&tag=lebrunnathali-21" },
      { name: "Histoire d'une ame — Sainte Therese", desc: "L'autobiographie de la petite Therese de Lisieux", link: "https://www.amazon.fr/s?k=Histoire+ame+Therese+Lisieux&tag=lebrunnathali-21" },
      { name: "La Raison est pour Dieu — Timothy Keller", desc: "Apologetique moderne, ideal pour les sceptiques", link: "https://www.amazon.fr/s?k=Timothy+Keller+raison+pour+Dieu&tag=lebrunnathali-21" },
    ],
  },
  {
    category: "Cadeaux Chretiens",
    icon: Gift,
    items: [
      { name: "Medaille de bapteme en argent", desc: "Vierge Marie ou Ange gardien, le classique du bapteme", link: "https://www.amazon.fr/s?k=medaille+bapteme+argent+Vierge+Marie&tag=lebrunnathali-21" },
      { name: "Gourmette de bapteme", desc: "Gourmette gravee en argent, le cadeau du parrain", link: "https://www.amazon.fr/s?k=gourmette+bapteme+argent+bebe+gravure&tag=lebrunnathali-21" },
      { name: "Coffret cadeau communion", desc: "Medaille, chapelet et missel dans un bel ecrin", link: "https://www.amazon.fr/s?k=coffret+cadeau+communion+chretien&tag=lebrunnathali-21" },
      { name: "Croix pendentif confirmation", desc: "Croix moderne en argent pour ados", link: "https://www.amazon.fr/s?k=croix+pendentif+confirmation+argent+ado&tag=lebrunnathali-21" },
    ],
  },
  {
    category: "Chapelets & Rosaires",
    icon: Church,
    items: [
      { name: "Chapelet bois d'olivier Terre Sainte", desc: "Le chapelet traditionnel, chaleureux et parfume", link: "https://www.amazon.fr/s?k=chapelet+bois+olivier+Terre+Sainte&tag=lebrunnathali-21" },
      { name: "Chapelet cristal Swarovski", desc: "Elegant et lumineux, ideal pour offrir", link: "https://www.amazon.fr/s?k=chapelet+cristal+Swarovski+religieux&tag=lebrunnathali-21" },
      { name: "Chapelet pierre naturelle", desc: "Agate, jaspe ou hematite, chaque grain est unique", link: "https://www.amazon.fr/s?k=chapelet+pierre+naturelle+agate&tag=lebrunnathali-21" },
      { name: "Dizainier bague", desc: "Chapelet de poche discret, se porte au doigt", link: "https://www.amazon.fr/s?k=dizainier+chapelet+bague+annulaire&tag=lebrunnathali-21" },
    ],
  },
  {
    category: "Medailles & Bijoux",
    icon: Sparkles,
    items: [
      { name: "Medaille Miraculeuse argent", desc: "La medaille de la rue du Bac, protection de Marie", link: "https://www.amazon.fr/s?k=medaille+miraculeuse+argent+Vierge+Marie&tag=lebrunnathali-21" },
      { name: "Medaille Saint Benoit", desc: "Protection contre le mal, priere d'exorcisme", link: "https://www.amazon.fr/s?k=medaille+Saint+Benoit+protection&tag=lebrunnathali-21" },
      { name: "Medaille Saint Christophe", desc: "Patron des voyageurs, pour la voiture ou le cou", link: "https://www.amazon.fr/s?k=medaille+Saint+Christophe+voyageur&tag=lebrunnathali-21" },
      { name: "Medaille Ange Gardien bapteme", desc: "Douce et protectrice, parfaite pour les bebes", link: "https://www.amazon.fr/s?k=medaille+ange+gardien+bapteme+bebe&tag=lebrunnathali-21" },
    ],
  },
  {
    category: "Decoration & Devotion",
    icon: Cross,
    items: [
      { name: "Crucifix mural bois et metal", desc: "Le classique pour le salon ou la chambre", link: "https://www.amazon.fr/s?k=crucifix+mural+bois+metal+Christ&tag=lebrunnathali-21" },
      { name: "Icone religieuse sur bois", desc: "Reproductions d'icones traditionnelles", link: "https://www.amazon.fr/s?k=icone+religieuse+orthodoxe+bois&tag=lebrunnathali-21" },
      { name: "Plaque murale verset biblique", desc: "Decorez avec la Parole de Dieu", link: "https://www.amazon.fr/s?k=plaque+murale+verset+biblique+bois&tag=lebrunnathali-21" },
      { name: "Bougie liturgique cire d'abeille", desc: "Pour le coin de priere, parfum naturel", link: "https://www.amazon.fr/s?k=bougie+liturgique+cire+abeille&tag=lebrunnathali-21" },
    ],
  },
  {
    category: "Priere & Meditation",
    icon: Flame,
    items: [
      { name: "Magnificat mensuel", desc: "Le compagnon quotidien de priere", link: "https://www.amazon.fr/s?k=Magnificat+mensuel+priere+quotidienne&tag=lebrunnathali-21" },
      { name: "Journal de priere", desc: "Carnet pour ecrire vos prieres et intentions", link: "https://www.amazon.fr/s?k=journal+priere+chretien+carnet&tag=lebrunnathali-21" },
      { name: "La Priere — Jacques Philippe", desc: "Le meilleur guide pratique de la priere", link: "https://www.amazon.fr/s?k=Jacques+Philippe+priere+livre&tag=lebrunnathali-21" },
      { name: "Recueil de neuvaines", desc: "Les neuvaines les plus priees, textes complets", link: "https://www.amazon.fr/s?k=plus+belles+neuvaines+recueil+prieres&tag=lebrunnathali-21" },
    ],
  },
];

export default function BoutiquePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-12">
        <ShoppingBag size={48} className="text-amber-500 mx-auto mb-4" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Notre <span className="text-amber-600">Boutique</span>
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Notre selection des plus beaux produits chretiens sur Amazon. Bibles, livres, bijoux, objets de devotion — tout pour nourrir votre foi.
        </p>
        <p className="text-xs text-gray-400 mt-3 italic">
          En tant que partenaire Amazon, nous percevons une commission sur les achats qualifies, sans surcout pour vous.
        </p>
      </div>

      {/* Categories de produits */}
      <div className="space-y-12">
        {PRODUCTS.map((section) => (
          <div key={section.category}>
            <div className="flex items-center gap-2 mb-6">
              <section.icon size={24} className="text-amber-500" />
              <h2 className="text-2xl font-bold text-gray-900">{section.category}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {section.items.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="product-card group hover:border-amber-300"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition text-sm leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-500 mb-4 leading-relaxed">{item.desc}</p>
                  <span className="btn-amazon text-xs">Voir sur Amazon</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
