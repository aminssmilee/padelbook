import { Award, Percent, Search, Calendar } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "REWARD POINTS",
    description: "Save your point by booking Padel court and get discount rate.",
  },
  {
    icon: Percent,
    title: "FIND PROMOTION",
    description: "PadelBook publish good Promotion info from Padel court",
  },
  {
    icon: Search,
    title: "SEARCH PADEL COURT",
    description: "Find Padel Court you like with search condition.",
  },
  {
    icon: Calendar,
    title: "BOOK PADEL COURT",
    description: "Pick Padel court you like and make a book easily by PadelBook.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-gray-700" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
