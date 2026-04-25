import { ChevronRight, BookOpen, Search } from "lucide-react";
import { useState } from "react";

const theses = [
  {
    id: 1,
    title:
      "A Vector Autoregressive (VAR) Model for the Hourly Forecasting of Climatological Data in General Santos City",
    authors: "Quimosing, J., Into, F., et al.",
    year: "2025",
    department: "DMPCS",
  },
  {
    id: 2,
    title:
      "Spatial Analysis of Land Use Change and Its Impact on Biodiversity in the Mt. Apo Natural Park",
    authors: "Reyes, M., Santos, D., et al.",
    year: "2025",
    department: "CENG",
  },
  {
    id: 3,
    title:
      "Indigenous Knowledge Systems in Sustainable Agriculture Among B'laan Communities",
    authors: "Dela Cruz, A., Maambong, R.",
    year: "2025",
    department: "CA",
  },
  {
    id: 4,
    title:
      "Machine Learning Approaches for Early Detection of Rice Blast Disease Using Hyperspectral Imaging",
    authors: "Tan, B., Villanueva, K., et al.",
    year: "2025",
    department: "DMPCS",
  },
  {
    id: 5,
    title:
      "Physicochemical Characterization of Abaca Fiber Reinforced Polymer Composites for Structural Applications",
    authors: "Fernandez, L., Cruz, R.",
    year: "2025",
    department: "CENG",
  },
];

const colleges = [
  "All Colleges",
  "CA",
  "CENG",
  "CAS",
  "DMPCS",
  "CHK",
  "CMC",
];
const years = ["2025", "2024", "2023", "2022", "2021"];

export default function UndergraduateThesesPage() {
  const [selectedCollege, setSelectedCollege] = useState("All Colleges");
  const [selectedYear, setSelectedYear] = useState("2025");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = theses.filter(
    (t) =>
      (selectedCollege === "All Colleges" ||
        t.department === selectedCollege) &&
      t.year === selectedYear &&
      (searchQuery === "" ||
        t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.authors.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-white font-body">
      {/* Breadcrumb */}
      <div className="border-b border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center gap-1 text-xs text-gray-400">
          <a href="#" className="hover:text-maroon transition-colors">
            Home
          </a>
          <ChevronRight size={10} />
          <span className="text-gray-600">Undergraduate Theses</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main content */}
        <div className="lg:col-span-2">
          <h1 className="text-xs font-bold tracking-[0.2em] uppercase text-maroon border-b-2 border-maroon pb-1 mb-6 inline-block">
            Undergraduate Theses
          </h1>

          {/* Filters */}
          <div className="flex items-center gap-2 mb-6">
            <select
              value={selectedCollege}
              onChange={(e) => setSelectedCollege(e.target.value)}
              className="text-xs px-3 py-1.5 border border-gray-200 rounded-sm outline-none focus:border-maroon/50 bg-white text-gray-600"
            >
              {colleges.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="text-xs px-3 py-1.5 border border-gray-200 rounded-sm outline-none focus:border-maroon/50 bg-white text-gray-600"
            >
              {years.map((y) => (
                <option key={y}>{y}</option>
              ))}
            </select>
            <span className="text-xs text-gray-400 ml-auto">
              {filtered.length} result{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>

          <div className="space-y-3">
            {filtered.map((item) => (
              <article
                key={item.id}
                className="group border border-gray-100 rounded-sm p-4 hover:border-maroon/30 hover:shadow-sm transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <BookOpen
                    size={15}
                    className="mt-0.5 text-gray-300 group-hover:text-maroon/40 transition-colors flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-sm font-medium text-gray-800 group-hover:text-maroon leading-snug transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1.5">
                      {item.authors} ({item.year}){" "}
                      <span className="font-semibold text-gray-500 uppercase">
                        | {item.department}
                      </span>
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div>
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-maroon border-b-2 border-maroon pb-1 mb-5">
              Browse
            </h2>
            <ul className="space-y-1">
              {[
                "Undergraduate Theses",
                "Faculty Theses",
                "Capstones",
              ].map((cat) => (
                <li key={cat}>
                  <a
                    href="#"
                    className={`block px-3 py-2 text-sm rounded-sm transition-colors ${
                      cat === "Undergraduate Theses"
                        ? "text-maroon font-semibold bg-maroon/5"
                        : "text-gray-600 hover:text-maroon hover:bg-maroon/5"
                    }`}
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-maroon border-b-2 border-maroon pb-1 mb-5">
              Search
            </h2>
            <p className="text-xs text-gray-400 mb-3">Enter search terms:</p>
            <div className="flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Keywords..."
                className="flex-1 min-w-0 px-3 py-2 text-xs border border-gray-200 border-r-0 rounded-l-sm outline-none focus:border-maroon/50 transition-colors"
              />
              <button className="px-3 py-2 bg-maroon text-white rounded-r-sm border border-maroon">
                <Search size={12} />
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
