import DailyContent from "@/components/DailyContent";
import { Cross } from "lucide-react";

export default function PriereDuJour() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <Cross size={48} className="text-amber-500 mx-auto mb-4" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Priere du <span className="text-amber-600">Jour</span>
        </h1>
        <p className="text-gray-500 max-w-lg mx-auto">
          Chaque jour, une priere, un verset biblique et un saint pour accompagner votre journee dans la foi.
        </p>
      </div>

      {/* Contenu quotidien */}
      <DailyContent />

      {/* Liens utiles */}
      <div className="mt-12 pt-8 border-t border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Pour aller plus loin</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <a href="/categorie/priere" className="card-article p-5 group">
            <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition">Guides de priere</h3>
            <p className="text-sm text-gray-500 mt-1">Methodes, livres et ressources pour approfondir votre priere</p>
          </a>
          <a href="/categorie/bibles" className="card-article p-5 group">
            <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition">Bibles d&apos;etude</h3>
            <p className="text-sm text-gray-500 mt-1">Trouvez la Bible qui vous accompagnera au quotidien</p>
          </a>
        </div>
      </div>
    </div>
  );
}
