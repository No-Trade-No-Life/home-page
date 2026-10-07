import type { CopyKey } from "./copy";
export type ProductId =
  "linkit" | "cybion" | "normai" | "ctx" | "midas" | "exchange" | "hit";
export type Category = "all" | "ai" | "value";
export type Product = {
  id: ProductId;
  name: string;
  category: Exclude<Category, "all">;
  domain: string;
  accent: string;
  role: CopyKey;
  title: CopyKey;
  description: CopyKey;
  detail: CopyKey;
  features: CopyKey[];
};
export const products: Product[] = [
  {
    id: "linkit",
    name: "Linkit",
    category: "ai",
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
    category: "ai",
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
    category: "ai",
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
    category: "ai",
    domain: "ctx.ntnl.io",
    accent: "#f1a7b7",
    role: "ctx.role",
    title: "ctx.title",
    description: "ctx.description",
    detail: "ctx.detail",
    features: ["ctx.f1", "ctx.f2", "ctx.f3"],
  },
  {
    id: "midas",
    name: "Midas",
    category: "value",
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
    category: "value",
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
    category: "value",
    domain: "hit.ntnl.io",
    accent: "#f5a383",
    role: "hit.role",
    title: "hit.title",
    description: "hit.description",
    detail: "hit.detail",
    features: ["hit.f1", "hit.f2", "hit.f3"],
  },
];
export const productById = Object.fromEntries(
  products.map((product) => [product.id, product]),
) as Record<ProductId, Product>;
