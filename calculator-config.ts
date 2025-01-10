export interface CalculatorField {
  name: string
  label: string
  type: "number" | "text"
  placeholder?: string
  required?: boolean
}

export interface Calculator {
  id: string
  name: string
  description: string
  category: string
  fields: CalculatorField[]
  calculate: (values: Record<string, number>) => number
  formatResult: (result: number) => string
}

export const calculators: Calculator[] = [
  {
    id: "ctr",
    name: "Click-Through Rate (CTR)",
    description: "Calculate the percentage of people who click your ad after seeing it",
    category: "engagement",
    fields: [
      {
        name: "clicks",
        label: "Number of Clicks",
        type: "number",
        placeholder: "Enter total clicks",
        required: true,
      },
      {
        name: "impressions",
        label: "Number of Impressions",
        type: "number",
        placeholder: "Enter total impressions",
        required: true,
      },
    ],
    calculate: (values) => (values.clicks / values.impressions) * 100,
    formatResult: (result) => `${result.toFixed(2)}%`,
  },
  {
    id: "roi",
    name: "Return on Investment (ROI)",
    description: "Calculate the return on your marketing investment",
    category: "conversion",
    fields: [
      {
        name: "revenue",
        label: "Revenue",
        type: "number",
        placeholder: "Enter total revenue",
        required: true,
      },
      {
        name: "cost",
        label: "Cost",
        type: "number",
        placeholder: "Enter total cost",
        required: true,
      },
    ],
    calculate: (values) => ((values.revenue - values.cost) / values.cost) * 100,
    formatResult: (result) => `${result.toFixed(2)}%`,
  },
  // Add more calculators here
]

export const categories = [
  { id: "all", name: "All Calculators" },
  { id: "engagement", name: "Engagement Metrics" },
  { id: "conversion", name: "Conversion Metrics" },
  { id: "advertising", name: "Advertising Metrics" },
]
