import { Metadata } from "next"
import { CalculatorGrid } from "@/components/calculator-grid"
import { SearchBar } from "@/components/search-bar"

export const metadata: Metadata = {
  title: "Marketing Calculators",
  description: "Professional marketing calculators for ROI, CTR, CPC, and more",
}

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Marketing Calculators
      </h1>
      <SearchBar />
      <CalculatorGrid />
    </div>
  )
}
