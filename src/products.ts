import type { CopyKey } from "./copy";
export type ProductId =
  | "linkit"
  | "cybion"
  | "normai"
  | "ctx"
  | "firma"
  | "midas"
  | "exchange"
  | "hit";
export type ProductView = "ai" | "fund" | "shared";
export type ProductFilter = "all" | ProductView;
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
    role: "normai.role",
    title: "normai.title",
    description: "normai.description",
    detail: "normai.detail",
    features: ["normai.f1", "normai.f2", "normai.f3"],
  },
  {
    id: "ctx",
    name: "CTX",
    views: ["ai"],
    domain: "ctx.ntnl.io",
    accent: "#f1a7b7",
    role: "ctx.role",
    title: "ctx.title",
    description: "ctx.description",
    detail: "ctx.detail",
    features: ["ctx.f1", "ctx.f2", "ctx.f3"],
  },
  {
    id: "firma",
    name: "Firma",
    views: ["fund"],
    domain: "firma.ntnl.io",
    accent: "#a8d6ef",
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
    role: "hit.role",
    title: "hit.title",
    description: "hit.description",
    detail: "hit.detail",
    features: ["hit.f1", "hit.f2", "hit.f3"],
    note: "hit.risk",
  },
];
export const productById = Object.fromEntries(
  products.map((product) => [product.id, product]),
) as Record<ProductId, Product>;

export function productsForView(view: ProductFilter): Product[] {
  return view === "all"
    ? products
    : products.filter((product) => product.views.includes(view));
}
