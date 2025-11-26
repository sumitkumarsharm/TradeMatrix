// src/components/SupportHero.jsx
import React, { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import { searchable } from "../../Data/supportData";

const SupportHero = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setOpen(false);
      setActiveIndex(-1);
      return;
    }

    const q = query.trim().toLowerCase();
    // simple fuzzy: includes, but prioritize startsWith
    const starts = [];
    const contains = [];
    for (const item of searchable) {
      const label = item.label.toLowerCase();
      if (label.startsWith(q)) starts.push(item);
      else if (label.includes(q)) contains.push(item);
    }
    const merged = [...starts, ...contains].slice(0, 8); // limit suggestions
    setResults(merged);
    setOpen(merged.length > 0);
    setActiveIndex(-1);
  }, [query]);

  // keyboard navigation
  const onKeyDown = (e) => {
    if (!open) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0) selectResult(results[activeIndex]);
    } else if (e.key === "Escape") {
      setOpen(false);
      setActiveIndex(-1);
    }
  };

  const selectResult = (res) => {
    setQuery(res.label);
    setOpen(false);
    setActiveIndex(-1);
    // try to scroll to matching section if exists
    if (res.sectionId) {
      const el = document.getElementById(res.sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        // small offset for fixed header
        window.scrollBy(0, -80);
      }
    }
  };

  // click outside to close
  useEffect(() => {
    const handler = (e) => {
      if (!listRef.current) return;
      if (
        !listRef.current.contains(e.target) &&
        e.target !== inputRef.current
      ) {
        setOpen(false);
        setActiveIndex(-1);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <section className="w-full bg-gray-50 border-b py-10 pt-28">
      <div className="max-w-7xl mx-auto px-5">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <h1 className="text-3xl font-semibold text-gray-900">
            Support Portal
          </h1>
          <button className="px-4 py-2 bg-blue-600 text-white  shadow hover:bg-blue-700 transition">
            My tickets
          </button>
        </div>

        <div className="mt-6 relative w-full ">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            type="text"
            placeholder="Eg: How do I open my account, How do I activate F&O…"
            className="w-full pl-12 pr-4 py-3 border bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            onFocus={() => {
              if (results.length) setOpen(true);
            }}
          />

          {/* Suggestions dropdown */}
          <div
            ref={listRef}
            className={`absolute z-50 left-0 right-0 mt-2 bg-white shadow-lg rounded-md overflow-hidden transition-all ${
              open
                ? "opacity-100 translate-y-0"
                : "opacity-0 pointer-events-none -translate-y-2"
            }`}
          >
            <ul className="max-h-64 overflow-auto">
              {results.map((r, idx) => (
                <li
                  key={r.label + idx}
                  onMouseDown={(e) => {
                    // prevent input blur before click
                    e.preventDefault();
                    selectResult(r);
                  }}
                  className={`px-4 py-3 cursor-pointer flex justify-between items-start gap-4 hover:bg-gray-50 ${
                    idx === activeIndex ? "bg-gray-50" : ""
                  }`}
                >
                  <div>
                    <div className="text-sm text-gray-900">{r.label}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      {r.type === "section"
                        ? "Section"
                        : r.type === "item"
                        ? "Help topic"
                        : r.type === "quick"
                        ? "Quick link"
                        : "Notice"}
                    </div>
                  </div>

                  {r.sectionId && (
                    <span className="text-xs text-blue-600">Go</span>
                  )}
                </li>
              ))}
              {results.length === 0 && open && (
                <li className="px-4 py-3 text-sm text-gray-500">No results</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportHero;
