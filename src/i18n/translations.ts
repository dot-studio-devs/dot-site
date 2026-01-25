export const translations = {
  es: {
    nav: {
      services: "Servicios",
      projects: "Proyectos",
      contact: "Contacto",
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
      contact: "Contact",
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
