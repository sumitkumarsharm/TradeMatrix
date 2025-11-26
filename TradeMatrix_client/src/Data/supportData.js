// src/data/supportData.js
export const sections = [
  {
    title: "Account Opening",
    id: "account-opening",
    items: [
      "Resident individual",
      "Minor",
      "Non Resident Indian (NRI)",
      "Company, Partnership, HUF and LLP",
      "Glossary",
    ],
  },
  {
    title: "Your Zerodha Account",
    id: "your-account",
    items: [
      "Your Profile",
      "Account modification",
      "Client Master Report (CMR) and Depository Participant (DP)",
      "Nomination",
      "Transfer and conversion of securities",
      "IPO",
      "Trading FAQs",
      "Margin Trading Facility (MTF) and Margins",
      "Charts and orders",
      "Alerts and Nudges",
      "General",
      "Add money",
      "Withdraw money",
      "Add bank accounts",
      "eMandates",
      "Portfolio",
      "Corporate actions",
      "Funds statement",
      "Reports",
      "Profile",
      "Segments",
      "Mutual funds",
      "National Pension Scheme (NPS)",
      "Features on Coin",
      "Payments and Orders",
      "General",
    ],
  },
  {
    title: "Kite",
    id: "kite",
    items: [
      "Resident individual",
      "Minor",
      "Non Resident Indian (NRI)",
      "Company, Partnership, HUF and LLP",
      "Glossary",
    ],
  },
  {
    title: "Funds",
    id: "funds",
    items: [
      "Resident individual",
      "Minor",
      "Non Resident Indian (NRI)",
      "Company, Partnership, HUF and LLP",
      "Glossary",
    ],
  },
  {
    title: "Console",
    id: "console",
    items: [
      "Resident individual",
      "Minor",
      "Non Resident Indian (NRI)",
      "Company, Partnership, HUF and LLP",
      "Glossary",
    ],
  },
  {
    title: "Coin",
    id: "coin",
    items: [
      "Resident individual",
      "Minor",
      "Non Resident Indian (NRI)",
      "Company, Partnership, HUF and LLP",
      "Glossary",
    ],
  },
];

export const quickLinks = [
  "Track account opening",
  "Track segment activation",
  "Intraday margins",
  "Kite user manual",
  "Learn how to create a ticket",
];

export const notices = [
  "Rights Entitlements listing in November 2025",
  "Surveillance measure on scrips - November 2025",
];

/**
 * Flattened searchable list with a pointer (type + id) so clicking can scroll.
 * Each entry: { label, type: 'section'|'item'|'quick'|'notice', sectionId (optional) }
 */
export const searchable = (() => {
  const list = [];
  sections.forEach((s) => {
    list.push({ label: s.title, type: "section", sectionId: s.id });
    s.items.forEach((it) =>
      list.push({ label: it, type: "item", sectionId: s.id })
    );
  });
  quickLinks.forEach((q) => list.push({ label: q, type: "quick" }));
  notices.forEach((n) => list.push({ label: n, type: "notice" }));
  return list;
})();
