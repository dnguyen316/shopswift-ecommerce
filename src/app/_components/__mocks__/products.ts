export const productItem: ProductType[] = [
  {
    _id: "1",
    name: "Canon EOS 250D DSLR Camera",
    thumb: "eos-250d-03-500x500_1_vhhygy",
    description:
      "A compact, lightweight DSLR with a powerful 24.1MP sensor and 4K video recording.",
    slug: "canon-eos-250d-dslr-camera",
    price: 549.99,
    quantity: 30,
    discount: 10, // 10% discount
    shop: {
      name: "CameraWorld",
      location: "321 Photography Lane, New York, NY",
      rating: 4.8,
    },
    type: "Electronics",
    attributes: {
      brand: "Canon",
      model: "EOS 250D",
      resolution: "24.1 MP",
      video: "4K",
      weight: "449g",
    },
    ratings_avg: 4.7,
    variations: [
      {
        color: "Black",
        lens: "18-55mm",
      },
      {
        color: "White",
        lens: "18-55mm",
      },
    ],
    isDraft: false,
    isPublished: true,
  },
  {
    _id: "2",
    name: "DeepCool GAMMAXX L240 ARGB Liquid Cooler",
    thumb: "/mnt/data/gammaxx-l240-argb-1-500x500 1.png",
    description:
      "Efficient liquid cooling solution with vibrant ARGB lighting and dual 120mm fans.",
    slug: "deepcool-gammaxx-l240-argb-cooler",
    price: 89.99,
    quantity: 100,
    discount: 15, // 15% discount
    shop: {
      name: "TechGear",
      location: "789 Gaming Avenue, San Francisco, CA",
      rating: 4.6,
    },
    type: "Electronics",
    attributes: {
      brand: "DeepCool",
      model: "GAMMAXX L240",
      fanSize: "120mm",
      lighting: "ARGB",
      compatibility: "Intel/AMD",
    },
    ratings_avg: 4.8,
    variations: [
      {
        color: "Black",
        fan: "120mm",
      },
    ],
    isDraft: false,
    isPublished: true,
  },
  {
    _id: "3",
    name: "Reversible Quilted Satin Jacket",
    thumb:
      "698717_Z8A1X_3475_001_100_0000_Light-Reversible-quilted-satin-jacket_1_b3ddxz",
    description:
      "Luxurious satin jacket with a reversible design, perfect for a stylish look.",
    slug: "reversible-quilted-satin-jacket",
    price: 1499.99,
    quantity: 20,
    discount: 20, // 20% discount
    shop: {
      name: "FashionLux",
      location: "456 Luxury Blvd, Paris, France",
      rating: 4.9,
    },
    type: "Clothing",
    attributes: {
      brand: "Gucci",
      material: "Satin",
      reversible: true,
      color: "Green/Orange",
      size: "M",
    },
    ratings_avg: 4.7,
    variations: [
      {
        color: "Green/Orange",
        size: "M",
      },
      {
        color: "Black/Red",
        size: "L",
      },
    ],
    isDraft: false,
    isPublished: true,
  },
  {
    _id: "4",
    name: "Lenovo IdeaPad Gaming 3i",
    thumb: "ideapad-gaming-3i-01-500x500_1_vli8wd",
    description:
      "Powerful gaming laptop with Intel i7 processor and NVIDIA GTX 1650 graphics.",
    slug: "lenovo-ideapad-gaming-3i",
    price: 799.99,
    quantity: 50,
    discount: 5, // 5% discount
    shop: {
      name: "LaptopWorld",
      location: "123 Tech Hub, Austin, TX",
      rating: 4.5,
    },
    type: "Electronics",
    attributes: {
      brand: "Lenovo",
      model: "IdeaPad Gaming 3i",
      processor: "Intel i7",
      graphics: "NVIDIA GTX 1650",
      display: "15.6 inch",
    },
    ratings_avg: 4.6,
    variations: [
      {
        color: "Black",
        storage: "512GB SSD",
      },
      {
        color: "Gray",
        storage: "1TB SSD",
      },
    ],
    isDraft: false,
    isPublished: true,
  },
  {
    _id: "5",
    name: "Gucci Savoy Medium Duffle Bag",
    thumb:
      "547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag_1_gjvacv",
    description:
      "Luxury duffle bag with iconic Gucci design, perfect for travel.",
    slug: "gucci-savoy-medium-duffle-bag",
    price: 1999.99,
    quantity: 15,
    discount: 25, // 25% discount
    shop: {
      name: "LuxuryBags",
      location: "789 Luxury Street, Milan, Italy",
      rating: 4.9,
    },
    type: "Clothing",
    attributes: {
      brand: "Gucci",
      material: "Canvas/Leather",
      size: "Medium",
      color: "Beige/Green/Red",
    },
    ratings_avg: 2,
    variations: [
      {
        color: "Beige/Green/Red",
        size: "Medium",
      },
      {
        color: "Black/Gray",
        size: "Large",
      },
    ],
    isDraft: false,
    isPublished: true,
  },
  {
    _id: "6",
    name: "The North Face x Gucci Coat",
    thumb:
      "672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat_1_qjnnym",
    description:
      "Collaborative coat combining outdoor performance with high fashion design.",
    slug: "north-face-x-gucci-coat",
    price: 2499.99,
    quantity: 10,
    discount: 30, // 30% discount
    shop: {
      name: "OutdoorLux",
      location: "456 Adventure Way, Denver, CO",
      rating: 4.8,
    },
    type: "Clothing",
    attributes: {
      brand: "The North Face x Gucci",
      material: "Water-resistant",
      color: "Pink",
      size: "L",
    },
    ratings_avg: 3,
    variations: [
      {
        color: "Pink",
        size: "L",
      },
      {
        color: "Blue",
        size: "M",
      },
    ],
    isDraft: false,
    isPublished: true,
  },
  {
    _id: "7",
    name: "Ergonomic Fabric Chair",
    thumb: "sam-moghadam-khamseh-kvmdsTrGOBM-unsplash_1_frlrsu",
    description:
      "Comfortable ergonomic chair with fabric upholstery, ideal for home offices.",
    slug: "ergonomic-fabric-chair",
    price: 129.99,
    quantity: 75,
    discount: 10, // 10% discount
    shop: {
      name: "FurnitureMart",
      location: "321 Comfort Lane, Chicago, IL",
      rating: 4.7,
    },
    type: "Furniture",
    attributes: {
      brand: "HomeComfort",
      material: "Fabric/Wood",
      color: "Gray",
      dimensions: "40 x 24 x 24 inches",
    },
    ratings_avg: 4.6,
    variations: [
      {
        color: "Gray",
        material: "Fabric",
      },
      {
        color: "Beige",
        material: "Leather",
      },
    ],
    isDraft: false,
    isPublished: true,
  },
  {
    _id: "8",
    name: "MSI Optix G27CQ4 Curved Gaming Monitor",
    thumb: "g27cq4-500x500_1_voc34e",
    description:
      "27-inch curved gaming monitor with 165Hz refresh rate and 1ms response time.",
    slug: "msi-optix-g27cq4-gaming-monitor",
    price: 349.99,
    quantity: 40,
    discount: 20, // 20% discount
    shop: {
      name: "GameWorld",
      location: "101 Gaming Blvd, Los Angeles, CA",
      rating: 4.8,
    },
    type: "Electronics",
    attributes: {
      brand: "MSI",
      model: "Optix G27CQ4",
      refreshRate: "165Hz",
      responseTime: "1ms",
      resolution: "2560x1440",
    },
    ratings_avg: 4.7,
    variations: [
      {
        size: "27-inch",
        color: "Black",
      },
      {
        size: "32-inch",
        color: "Black",
      },
    ],
    isDraft: false,
    isPublished: true,
  },
  {
    _id: "9",
    name: "Mechanical RGB Gaming Keyboard",
    thumb: "ak-900-01-500x500_1_wm4wxu",
    description:
      "High-performance mechanical keyboard with customizable RGB lighting.",
    slug: "mechanical-rgb-gaming-keyboard",
    price: 129.99,
    quantity: 120,
    discount: 15, // 15% discount
    shop: {
      name: "GamerTech",
      location: "123 eSports Avenue, Las Vegas, NV",
      rating: 4.6,
    },
    type: "Electronics",
    attributes: {
      brand: "HyperX",
      switches: "Cherry MX Red",
      lighting: "RGB",
      connectivity: "Wired",
    },
    ratings_avg: 4.8,
    variations: [
      {
        switches: "Cherry MX Red",
        color: "Black",
      },
      {
        switches: "Cherry MX Blue",
        color: "White",
      },
    ],
    isDraft: false,
    isPublished: true,
  },
];
