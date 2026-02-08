import React, { FC } from "react";
import { ProjectItemCard } from "@/components/";
import { useTranslation } from "next-i18next";

const projects = [
  {
    title: "OrderNXT",
    description_en:
      "A shipping and logistics platform that helps businesses manage and optimize their shipping operations with smarter tools and streamlined workflows.",
    description_tr:
      "İşletmelerin kargo operasyonlarını akıllı araçlar ve optimize edilmiş iş akışlarıyla yönetmesini sağlayan bir nakliye ve lojistik platformu.",
    url: "https://ordernxt.com",
    tech: "Next.js · TypeScript · Redux/RTK · React Query · Sentry · GitHub Actions",
  },
  {
    title: "UpVisit",
    description_en:
      "AI-powered event app platform that enables organizers to create interactive experiences with matchmaking, 3D navigation maps, personalized agendas, gamification and analytics.",
    description_tr:
      "Organizatörlerin eşleştirme, 3D navigasyon haritaları, kişiselleştirilmiş ajandalar, oyunlaştırma ve analitik ile interaktif deneyimler oluşturmasını sağlayan AI destekli etkinlik uygulaması.",
    url: "https://www.upvisit.io",
    tech: "React Native · React · TypeScript · CMS · Sentry",
  },
  {
    title: "FruPro",
    description_en:
      "A B2B digital marketplace for the fresh produce industry. Connects producers, distributors, and retailers to streamline wholesale trading of fresh fruits and vegetables.",
    description_tr:
      "Taze meyve-sebze sektörüne yönelik B2B dijital pazar yeri. Üreticileri, dağıtıcıları ve perakendecileri bir araya getirerek toptan ticareti kolaylaştırır.",
    url: "https://www.frupro.com",
    tech: "React Native · React · TypeScript · Redux/RTK · React Query · Sentry",
  },
  {
    title: "BalloonScanner",
    description_en:
      "A booking platform that lets travelers compare and reserve hot air balloon rides across global destinations with real-time pricing, weather-based refunds, and direct operator partnerships.",
    description_tr:
      "Gezginlerin dünya genelinde sıcak hava balonu turlarını gerçek zamanlı fiyatlarla karşılaştırıp rezervasyon yapabildiği, hava durumuna bağlı iade ve doğrudan operatör ortaklıkları sunan bir platform.",
    url: "https://balloonscanner.com",
    tech: "Next.js (App Router) · TypeScript · SEO · React Native WebView",
  },
  {
    title: "Car Studio AI",
    description_en:
      "AI-powered platform that automatically transforms vehicle photographs into professional studio-quality images for automotive dealerships, manufacturers, and online marketplaces.",
    description_tr:
      "Araç fotoğraflarını otomatik olarak profesyonel stüdyo kalitesinde görsellere dönüştüren, otomotiv bayileri, üreticiler ve online pazar yerleri için AI destekli platform.",
    url: "https://carstudio.ai",
    tech: "React · React Native · TypeScript · MetaMask",
  },
];

const Projects: FC = () => {
  const { t, i18n } = useTranslation("common");
  const lang = i18n.language;

  return (
    <section className="projects">
      <h3 className="section-title">
        {t("myProjects")}
        <span data-number="05" className="divider"></span>
      </h3>

      <div className="flex flex-wrap -mx-4 mb-7">
        {projects.map((project, key) => (
          <div key={key} className="md:w-6/12 w-full px-4 mb-4">
            <ProjectItemCard
              title={project.title}
              description={
                lang === "tr" ? project.description_tr : project.description_en
              }
              url={project.url}
              tech={project.tech}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
