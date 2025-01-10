"use client"

import { useState } from "react"
import { Calculator } from "@/config/calculators"
import { CalculatorCard } from "./calculator-card"
import { CalculatorModal } from "./calculator-modal"

export function CalculatorGrid() {
  const [selectedCalculator, setSelectedCalculator] = useState<Calculator | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {calculators.map((calculator) => (
          <CalculatorCard
            key={calculator.id}
            calculator={calculator}
            onSelect={() => setSelectedCalculator(calculator)}
          />
        ))}
      </div>

      <CalculatorModal
        calculator={selectedCalculator}
        open={!!selectedCalculator}
        onClose={() => setSelectedCalculator(null)}
      />
    </>
  )
}
