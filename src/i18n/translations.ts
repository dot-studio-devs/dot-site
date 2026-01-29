export const translations = {
  es: {
    nav: {
      services: "Servicios",
      projects: "Proyectos",
      market: "Marketplace",
      contact: "Contacto",
    },
    market: {
      title: "Marketplace",
      subtitle: "Plantillas premium de alto rendimiento",
      buyNow: "Comprar ahora",
      postPaymentTitle: "Instrucciones Post-Pago",
      postPaymentDesc:
        "Tras el pago, envía el comprobante a dot_studio_dev@gmail.com o franespindola71@gmail.com adjuntando tu email de GitHub, nombre de usuario y link al perfil para darte acceso.",
      cryptoTitle: "Pago con Cripto (Polygon)",
      cryptoDesc: "Envía USDT o USDC vía Red Polygon a:",
      aboutTitle: "Sobre la plantilla",
      topicsTitle: "Tecnologías",
      items: {
        landing: {
          name: "Landing Template",
          priceARS: "35.000 ARS",
          priceUSD: "30 USD",
          aboutDesc:
            "Una plantilla de Landing Page profesional y de alto rendimiento construida con Astro 5, Tailwind CSS 4 y Framer Motion. Diseñada bajo Arquitectura Hexagonal para máxima mantenibilidad y escalabilidad.",
        },
        blog: {
          name: "Blog Template",
          priceARS: "47.500 ARS",
          priceUSD: "45 USD",
          aboutDesc:
            "Una plantilla de Blog profesional y moderna diseñada para el alto rendimiento y SEO. Incluye sistema de contenidos dinámico, animaciones fluidas y una experiencia de lectura premium.",
        },
      },
    },
    hero: {
      tagline: "Desarrollo Web Profesional",
      title: "Transformamos ideas en experiencias digitales",
      subtitle:
        "Creamos sitios web a medida que impulsan tu negocio. Desde landing pages hasta plataformas e-commerce complejas.",
      cta: "Iniciar proyecto",
      ctaSecondary: "Ver proyectos",
    },
    services: {
      title: "Servicios",
      subtitle: "Soluciones digitales adaptadas a tus necesidades",
      landing: {
        title: "Landing Pages",
        description:
          "Páginas de alto impacto diseñadas para convertir visitantes en clientes. Optimizadas para SEO y rendimiento.",
      },
      web: {
        title: "Sitios Web",
        description:
          "Plataformas web completas con diseño personalizado, sistemas de gestión de contenido y funcionalidades avanzadas.",
      },
      ecommerce: {
        title: "E-commerce",
        description:
          "Tiendas online robustas con pasarelas de pago, gestión de inventario y experiencia de compra optimizada.",
      },
    },
    projects: {
      title: "Proyectos",
      subtitle: "Algunos de nuestros trabajos recientes",
    },
    contact: {
      title: "Contacto",
      subtitle: "Iniciemos tu próximo proyecto",
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      send: "Enviar mensaje",
    },
    footer: {
      rights: "Todos los derechos reservados",
    },
  },
  en: {
    nav: {
      services: "Services",
      projects: "Projects",
      market: "Marketplace",
      contact: "Contact",
    },
    market: {
      title: "Marketplace",
      subtitle: "High-performance premium templates",
      buyNow: "Buy Now",
      postPaymentTitle: "Post-Payment Instructions",
      postPaymentDesc:
        "After payment, send the receipt to dot_studio_dev@gmail.com or franespindola71@gmail.com including your GitHub email, username, and profile link to get access.",
      cryptoTitle: "Crypto Payment (Polygon)",
      cryptoDesc: "Send USDT or USDC via Polygon Network to:",
      aboutTitle: "About this template",
      topicsTitle: "Technologies",
      items: {
        landing: {
          name: "Landing Template",
          priceARS: "35,000 ARS",
          priceUSD: "30 USD",
          aboutDesc:
            "A professional, high-performance landing page template built with Astro 5, Tailwind CSS 4, and Framer Motion. Designed with a Hexagonal Architecture approach to ensure maximum maintainability.",
        },
        blog: {
          name: "Blog Template",
          priceARS: "47,500 ARS",
          priceUSD: "45 USD",
          aboutDesc:
            "A professional and modern Blog template designed for high performance and SEO. Features a dynamic content system, smooth animations and a premium reading experience.",
        },
      },
    },
    hero: {
      tagline: "Professional Web Development",
      title: "We transform ideas into digital experiences",
      subtitle:
        "We create custom websites that drive your business. From landing pages to complex e-commerce platforms.",
      cta: "Start project",
      ctaSecondary: "View projects",
    },
    services: {
      title: "Services",
      subtitle: "Digital solutions tailored to your needs",
      landing: {
        title: "Landing Pages",
        description:
          "High-impact pages designed to convert visitors into customers. Optimized for SEO and performance.",
      },
      web: {
        title: "Websites",
        description:
          "Complete web platforms with custom design, content management systems and advanced features.",
      },
      ecommerce: {
        title: "E-commerce",
        description:
          "Robust online stores with payment gateways, inventory management and optimized shopping experience.",
      },
    },
    projects: {
      title: "Projects",
      subtitle: "Some of our recent work",
    },
    contact: {
      title: "Contact",
      subtitle: "Let's start your next project",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send message",
    },
    footer: {
      rights: "All rights reserved",
    },
  },
};

export type Lang = "es" | "en";
export type Translations = typeof translations.es;
