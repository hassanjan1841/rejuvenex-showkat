import asset1 from "@/assets/products/asset 1.webp";
import asset2 from "@/assets/products/asset 2.webp";
import asset3 from "@/assets/products/asset 3.webp";
import asset4 from "@/assets/products/asset 4.webp";

export const categories = [
  "Skin Health and Anti-Aging",
  "Energy and Vitality",
  "Hormonal and Reproductive Support",
  "Cognitive and Neuroprotective Benefits",
  "Weight Management and Metabolic Health",
  "Muscle and Bone Health",
];

export const products = [
  {
    id: "semax",
    name: "SEMAX",
    price: 50.0,
    image: "src/assets/products/asset 1.webp",
    images: [asset1, asset2, asset3, asset4],
    category: "Cognitive and Neuroprotective Benefits",
    description:
      "SEMAX is a nootropic and neuroprotective peptide that enhances memory, focus, and cognitive function. It helps protect brain cells and promotes neurogenesis.",
    dosage: "5MG",
    sku: "RJX-SM-001",
    tags: ["Nootropic", "Cognitive", "Focus", "Memory"],
  },
  {
    id: "ace-031",
    name: "ACE-031",
    price: 50.0,
    image: "/images/ace-031.png",
    images: [
      "/images/ace-031.png",
      "/images/ace-031-2.png",
      "/images/ace-031-3.png",
      "/images/ace-031-4.png",
    ],
    category: "Muscle and Bone Health",
    description:
      "ACE-031 is an inhibitor of myostatin and other naturally occurring proteins that restrict muscle growth. It helps increase muscle mass and strength while improving bone density.",
    dosage: "5MG",
    sku: "RJX-ACE-031",
    tags: ["Muscle Growth", "Strength", "Bone Health"],
  },
  {
    id: "hcg",
    name: "HCG (HUMAN CHORIONIC GONADOTROPIN)",
    price: 50.0,
    image: "/images/hcg.png",
    images: [
      "/images/hcg.png",
      "/images/hcg-2.png",
      "/images/hcg-3.png",
      "/images/hcg-4.png",
    ],
    category: "Hormonal and Reproductive Support",
    description:
      "HCG is a hormone that supports reproductive health and hormone balance. It can help with fertility and hormone optimization.",
    dosage: "5MG",
    sku: "RJX-HCG-001",
    tags: ["Hormone", "Fertility", "Reproductive Health"],
  },
  {
    id: "bpc-157",
    name: "BPC-157",
    price: 55.0,
    image: "/images/bpc-157.png",
    images: [
      "/images/bpc-157.png",
      "/images/bpc-157-2.png",
      "/images/bpc-157-3.png",
      "/images/bpc-157-4.png",
    ],
    category: "Muscle and Bone Health",
    description:
      "BPC-157 is a body protection compound that accelerates healing of many different wounds, including tendon-to-bone healing and superior healing of damaged ligaments.",
    dosage: "5MG",
    sku: "RJX-BPC-157",
    tags: ["Healing", "Recovery", "Injury", "Inflammation"],
  },
  {
    id: "tb-500",
    name: "TB-500",
    price: 60.0,
    image: "/images/tb-500.png",
    images: [
      "/images/tb-500.png",
      "/images/tb-500-2.png",
      "/images/tb-500-3.png",
      "/images/tb-500-4.png",
    ],
    category: "Muscle and Bone Health",
    description:
      "TB-500 is a synthetic version of Thymosin Beta-4, which is known for its ability to promote healing, reduce inflammation, and improve flexibility and range of motion.",
    dosage: "5MG",
    sku: "RJX-TB-500",
    tags: ["Healing", "Flexibility", "Inflammation", "Recovery"],
  },
  {
    id: "ghrp-6",
    name: "GHRP-6",
    price: 45.0,
    image: "/images/ghrp-6.png",
    images: [
      "/images/ghrp-6.png",
      "/images/ghrp-6-2.png",
      "/images/ghrp-6-3.png",
      "/images/ghrp-6-4.png",
    ],
    category: "Weight Management and Metabolic Health",
    description:
      "GHRP-6 stimulates the release of growth hormone, which can help with fat loss, muscle growth, and overall metabolic health.",
    dosage: "5MG",
    sku: "RJX-GHRP-6",
    tags: ["Growth Hormone", "Fat Loss", "Metabolism", "Muscle Growth"],
  },
  {
    id: "melanotan-2",
    name: "Melanotan-2",
    price: 55.0,
    image: "/images/melanotan-2.png",
    images: [
      "/images/melanotan-2.png",
      "/images/melanotan-2-2.png",
      "/images/melanotan-2-3.png",
      "/images/melanotan-2-4.png",
    ],
    category: "Skin Health and Anti-Aging",
    description:
      "Melanotan-2 stimulates melanin production, which can help achieve a tan without excessive sun exposure. It also has effects on appetite and libido.",
    dosage: "10MG",
    sku: "RJX-MT2-001",
    tags: ["Tanning", "Skin", "Melanin", "UV Protection"],
  },
  {
    id: "cjc-1295",
    name: "CJC-1295",
    price: 65.0,
    image: "/images/cjc-1295.png",
    images: [
      "/images/cjc-1295.png",
      "/images/cjc-1295-2.png",
      "/images/cjc-1295-3.png",
      "/images/cjc-1295-4.png",
    ],
    category: "Energy and Vitality",
    description:
      "CJC-1295 is a growth hormone releasing hormone (GHRH) analog that stimulates the release of growth hormone and IGF-1, promoting fat loss, muscle growth, and improved recovery.",
    dosage: "5MG",
    sku: "RJX-CJC-1295",
    tags: ["Growth Hormone", "Recovery", "Energy", "Fat Loss"],
  },
];
