import type { CopyKey } from "./copy";
export type ProductId =
  | "linkit"
  | "cybion"
  | "normai"
  | "exe"
  | "firma"
  | "midas"
  | "exchange"
  | "hit"
  | "docs"
  | "tickets"
  | "meeting"
  | "autolabs";
export type ProductView = "ai" | "fund" | "shared";
export type ProductFilter = "all" | ProductView;
/**
 * The runtime a product is served from today. Two architectures exist across
 * the ecosystem: a long-running Rust server process, and a Cloudflare Workers
 * (serverless) deployment on the edge.
 */
export type ProductArchitecture = "rust-server" | "cf-workers";
export const architectureKeys: Record<ProductArchitecture, CopyKey> = {
  "rust-server": "architecture.rustServer",
  "cf-workers": "architecture.cfWorkers",
};
export const productViewKeys: Record<ProductView, CopyKey> = {
  ai: "products.ai",
  fund: "products.fund",
  shared: "products.shared",
};
export type Product = {
  id: ProductId;
  name: string;
  views: ProductView[];
  domain: string;
  accent: string;
  architecture: ProductArchitecture;
  /**
   * Featured products appear in the hero ring, the product strip and the open
   * network. Every product still has a card, a detail dialog and a footer link.
   */
  featured: boolean;
  role: CopyKey;
  title: CopyKey;
  description: CopyKey;
  detail: CopyKey;
  features: CopyKey[];
  note?: CopyKey;
};
export const products: Product[] = [
  {
    id: "linkit",
    name: "Linkit",
    views: ["ai", "fund", "shared"],
    domain: "linkit.ntnl.io",
    accent: "#b9a0ff",
    architecture: "rust-server",
    featured: true,
    role: "linkit.role",
    title: "linkit.title",
    description: "linkit.description",
    detail: "linkit.detail",
    features: ["linkit.f1", "linkit.f2", "linkit.f3"],
  },
  {
    id: "cybion",
    name: "Cybion",
    views: ["ai", "fund"],
    domain: "cybion.ntnl.io",
    accent: "#c4f780",
    architecture: "rust-server",
    featured: true,
    role: "cybion.role",
    title: "cybion.title",
    description: "cybion.description",
    detail: "cybion.detail",
    features: ["cybion.f1", "cybion.f2", "cybion.f3"],
  },
  {
    id: "normai",
    name: "NormAI",
    views: ["ai"],
    domain: "normai.ntnl.io",
    accent: "#89c8fa",
    architecture: "rust-server",
    featured: true,
    role: "normai.role",
    title: "normai.title",
    description: "normai.description",
    detail: "normai.detail",
    features: ["normai.f1", "normai.f2", "normai.f3"],
  },
  {
    id: "exe",
    name: "eXe",
    views: ["ai"],
    domain: "exe.ntnl.io",
    accent: "#c9a8f5",
    architecture: "cf-workers",
    featured: true,
    role: "exe.role",
    title: "exe.title",
    description: "exe.description",
    detail: "exe.detail",
    features: ["exe.f1", "exe.f2", "exe.f3"],
  },
  {
    id: "firma",
    name: "Firma",
    views: ["fund"],
    domain: "firma.ntnl.io",
    accent: "#a8d6ef",
    architecture: "rust-server",
    featured: true,
    role: "firma.role",
    title: "firma.title",
    description: "firma.description",
    detail: "firma.detail",
    features: ["firma.f1", "firma.f2", "firma.f3", "firma.f4"],
    note: "firma.availability",
  },
  {
    id: "midas",
    name: "Midas",
    views: ["ai", "fund", "shared"],
    domain: "midas.ntnl.io",
    accent: "#e8cc8c",
    architecture: "rust-server",
    featured: true,
    role: "midas.role",
    title: "midas.title",
    description: "midas.description",
    detail: "midas.detail",
    features: ["midas.f1", "midas.f2", "midas.f3"],
  },
  {
    id: "exchange",
    name: "1Exchange",
    views: ["fund"],
    domain: "1ex.ntnl.io",
    accent: "#90d9c5",
    architecture: "rust-server",
    featured: true,
    role: "exchange.role",
    title: "exchange.title",
    description: "exchange.description",
    detail: "exchange.detail",
    features: ["exchange.f1", "exchange.f2", "exchange.f3"],
  },
  {
    id: "hit",
    name: "HIT",
    views: ["fund"],
    domain: "hit.ntnl.io",
    accent: "#f5a383",
    architecture: "rust-server",
    featured: true,
    role: "hit.role",
    title: "hit.title",
    description: "hit.description",
    detail: "hit.detail",
    features: ["hit.f1", "hit.f2", "hit.f3"],
    note: "hit.risk",
  },
  {
    id: "docs",
    name: "Docs",
    views: ["ai"],
    domain: "docs.ntnl.io",
    accent: "#f1a7b7",
    architecture: "cf-workers",
    featured: false,
    role: "docs.role",
    title: "docs.title",
    description: "docs.description",
    detail: "docs.detail",
    features: ["docs.f1", "docs.f2", "docs.f3"],
  },
  {
    id: "tickets",
    name: "Tickets",
    views: ["ai"],
    domain: "tickets.ntnl.io",
    accent: "#f7c873",
    architecture: "rust-server",
    featured: false,
    role: "tickets.role",
    title: "tickets.title",
    description: "tickets.description",
    detail: "tickets.detail",
    features: ["tickets.f1", "tickets.f2", "tickets.f3"],
  },
  {
    id: "meeting",
    name: "Meeting",
    views: ["ai"],
    domain: "meeting.ntnl.io",
    accent: "#9ad7f5",
    architecture: "cf-workers",
    featured: false,
    role: "meeting.role",
    title: "meeting.title",
    description: "meeting.description",
    detail: "meeting.detail",
    features: ["meeting.f1", "meeting.f2", "meeting.f3"],
  },
  {
    id: "autolabs",
    name: "AutoLabs",
    views: ["ai"],
    domain: "autolabs.ntnl.io",
    accent: "#8ee6d8",
    architecture: "cf-workers",
    featured: false,
    role: "autolabs.role",
    title: "autolabs.title",
    description: "autolabs.description",
    detail: "autolabs.detail",
    features: ["autolabs.f1", "autolabs.f2", "autolabs.f3"],
  },
];
export const featuredProducts = products.filter((product) => product.featured);
export const productById = Object.fromEntries(
  products.map((product) => [product.id, product]),
) as Record<ProductId, Product>;
export function productsForView(view: ProductFilter): Product[] {
  return view === "all"
    ? products
    : products.filter((product) => product.views.includes(view));
}
