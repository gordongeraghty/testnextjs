# Create a new Next.js project
npx create-next-app@latest marketing-calculators --typescript --tailwind --eslint

# Navigate to project directory
cd marketing-calculators

# Install necessary dependencies
npm install @radix-ui/react-dialog @radix-ui/react-slot @radix-ui/react-toast
npm install class-variance-authority clsx tailwind-merge lucide-react
npm install @hookform/resolvers react-hook-form zod
npm install recharts

# Install shadcn/ui CLI
npx shadcn-ui@latest init
