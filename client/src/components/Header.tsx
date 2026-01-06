import { Coffee } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-primary to-accent/50 text-white py-6 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-white rounded-full p-2">
            <Coffee className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Starbucks Calorie Calculator</h1>
            <p className="text-sm opacity-90">Make informed choices about your drink</p>
          </div>
        </div>
      </div>
    </header>
  );
}
