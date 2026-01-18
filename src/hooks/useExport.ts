import { useCallback, useState } from "react";
import PptxGenJS from "pptxgenjs";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export const useExport = (totalSlides: number) => {
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);

  const slideContent = [
    { title: "FDI Sensitivity to Macroeconomic, Financial and Policy Variables", subtitle: "A Multi-Sector Econometric Model for India (2000–2024)" },
    { title: "Background & Motivation", bullets: ["India's FDI journey from $2.5B (2000) to $70B+ (2024)", "Post-1991 liberalization and structural reforms", "Research gap: Sector-level heterogeneity understudied"] },
    { title: "Research Objectives", bullets: ["Examine FDI sensitivity to macroeconomic variables", "Assess policy reform impacts (GST, Tax, PLI)", "Identify sector-specific response patterns"] },
    { title: "Literature Overview", bullets: ["Macro-FDI linkage studies (Chakraborty & Basu, 2002)", "Policy impact research (Dash & Parida, 2013)", "Gap: Limited sector-level analysis in Indian context"] },
    { title: "Data & Methodology", bullets: ["Panel data: 17 sectors × 25 years (2000-2024)", "Sources: DPIIT, RBI, World Bank, IMF", "Fixed Effects model with sector × policy interactions"] },
    { title: "Descriptive Analysis", bullets: ["Services sector dominates FDI inflows", "Manufacturing shows strong growth post-2014", "Significant sectoral variation in FDI patterns"] },
    { title: "Baseline Regression Results", bullets: ["GDP growth: Significant positive effect", "Exchange rate: Weak negative relationship", "Inflation: Marginally significant negative", "Repo rate: Insignificant"] },
    { title: "GST Policy Results", bullets: ["Services: Significant positive impact (+18%)", "Computer Software: Strong positive response", "Manufacturing: Mixed effects across sub-sectors"] },
    { title: "Corporate Tax Reform Results", bullets: ["Manufacturing: Strong positive response (+25%)", "Pharma sector: Significant beneficiary", "Services: Moderate positive effect"] },
    { title: "PLI Scheme Results", bullets: ["Electronics: Highly significant positive impact", "Automobiles: Strong positive response", "Pharma: Significant FDI increase"] },
    { title: "Robustness Checks", bullets: ["No sign reversal across specifications", "VIF values within acceptable range", "Clustered standard errors for robust inference"] },
    { title: "Discussion", bullets: ["Sectoral heterogeneity is key finding", "Policy reforms have differential impacts", "Macro variables less influential at sector level"] },
    { title: "Policy Implications", bullets: ["Sector-specific policy design recommended", "Continued focus on ease of doing business", "Targeted incentives for strategic sectors"] },
    { title: "Limitations & Future Scope", bullets: ["Limited to equity FDI data", "State-level analysis not included", "Future: Include qualitative factors"] },
    { title: "Conclusion", bullets: ["Sectoral heterogeneity in FDI response confirmed", "Policy reforms significantly impact FDI patterns", "Macro sensitivity varies across sectors"] },
    { title: "Thank You", subtitle: "Questions & Discussion" },
  ];

  const exportToPPTX = useCallback(async () => {
    setIsExporting(true);
    setExportProgress(0);

    try {
      const pptx = new PptxGenJS();
      
      pptx.author = "Pramit Datta & Sejal Roy";
      pptx.title = "FDI Sensitivity Analysis - India 2000-2024";
      pptx.subject = "Multi-Sector Econometric Model";
      pptx.company = "St. Xavier's College, Mumbai";

      pptx.defineSlideMaster({
        title: "MASTER_SLIDE",
        background: { color: "0A0F1A" },
        objects: [
          { rect: { x: 0, y: 0, w: "100%", h: "100%", fill: { color: "0A0F1A" } } },
        ],
      });

      for (let i = 0; i < slideContent.length; i++) {
        const content = slideContent[i];
        const slide = pptx.addSlide({ masterName: "MASTER_SLIDE" });

        // Add title
        slide.addText(content.title, {
          x: 0.5,
          y: i === 0 || i === slideContent.length - 1 ? 2.5 : 0.5,
          w: 9,
          h: 1,
          fontSize: i === 0 || i === slideContent.length - 1 ? 32 : 28,
          fontFace: "Arial",
          color: "D4AF37",
          bold: true,
          align: i === 0 || i === slideContent.length - 1 ? "center" : "left",
        });

        // Add subtitle if exists
        if (content.subtitle) {
          slide.addText(content.subtitle, {
            x: 0.5,
            y: i === 0 || i === slideContent.length - 1 ? 3.5 : 1.3,
            w: 9,
            h: 0.5,
            fontSize: 18,
            fontFace: "Arial",
            color: "94A3B8",
            align: i === 0 || i === slideContent.length - 1 ? "center" : "left",
          });
        }

        // Add bullets if exists
        if (content.bullets) {
          const bulletText = content.bullets.map((b) => ({
            text: b,
            options: { bullet: { type: "bullet" as const, color: "D4AF37" }, color: "E2E8F0", fontSize: 16 },
          }));

          slide.addText(bulletText, {
            x: 0.5,
            y: 1.8,
            w: 9,
            h: 4,
            fontFace: "Arial",
            valign: "top",
          });
        }

        // Add slide number
        slide.addText(`${i + 1} / ${slideContent.length}`, {
          x: 8.5,
          y: 5.2,
          w: 1,
          h: 0.3,
          fontSize: 10,
          color: "64748B",
          align: "right",
        });

        setExportProgress(Math.round(((i + 1) / slideContent.length) * 100));
      }

      await pptx.writeFile({ fileName: "FDI_Sensitivity_Analysis_India.pptx" });
    } catch (error) {
      console.error("Error exporting to PPTX:", error);
    } finally {
      setIsExporting(false);
      setExportProgress(0);
    }
  }, []);

  const exportToPDF = useCallback(async () => {
    setIsExporting(true);
    setExportProgress(0);

    try {
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [1280, 720],
      });

      const slideElements = document.querySelectorAll('[data-slide-content]');
      
      if (slideElements.length === 0) {
        // Fallback: create PDF from content data
        const pageWidth = 1280;
        const pageHeight = 720;

        for (let i = 0; i < slideContent.length; i++) {
          if (i > 0) pdf.addPage();
          
          const content = slideContent[i];
          
          // Background
          pdf.setFillColor(10, 15, 26);
          pdf.rect(0, 0, pageWidth, pageHeight, "F");

          // Title
          pdf.setTextColor(212, 175, 55);
          pdf.setFontSize(i === 0 || i === slideContent.length - 1 ? 48 : 36);
          pdf.setFont("helvetica", "bold");
          
          const titleY = i === 0 || i === slideContent.length - 1 ? 300 : 80;
          const titleX = i === 0 || i === slideContent.length - 1 ? pageWidth / 2 : 60;
          const align = i === 0 || i === slideContent.length - 1 ? "center" : "left";
          
          pdf.text(content.title, titleX, titleY, { align: align as any });

          // Subtitle
          if (content.subtitle) {
            pdf.setTextColor(148, 163, 184);
            pdf.setFontSize(24);
            pdf.setFont("helvetica", "normal");
            const subtitleY = i === 0 || i === slideContent.length - 1 ? 360 : 130;
            pdf.text(content.subtitle, titleX, subtitleY, { align: align as any });
          }

          // Bullets
          if (content.bullets) {
            pdf.setTextColor(226, 232, 240);
            pdf.setFontSize(20);
            pdf.setFont("helvetica", "normal");
            
            content.bullets.forEach((bullet, j) => {
              pdf.setTextColor(212, 175, 55);
              pdf.text("•", 60, 180 + j * 50);
              pdf.setTextColor(226, 232, 240);
              pdf.text(bullet, 90, 180 + j * 50);
            });
          }

          // Slide number
          pdf.setTextColor(100, 116, 139);
          pdf.setFontSize(14);
          pdf.text(`${i + 1} / ${slideContent.length}`, pageWidth - 60, pageHeight - 40, { align: "right" });

          setExportProgress(Math.round(((i + 1) / slideContent.length) * 100));
        }
      } else {
        // Use html2canvas for actual slide capture
        for (let i = 0; i < slideElements.length; i++) {
          if (i > 0) pdf.addPage();
          
          const canvas = await html2canvas(slideElements[i] as HTMLElement, {
            backgroundColor: "#0a0f1a",
            scale: 2,
            useCORS: true,
          });

          const imgData = canvas.toDataURL("image/jpeg", 0.95);
          pdf.addImage(imgData, "JPEG", 0, 0, 1280, 720);
          
          setExportProgress(Math.round(((i + 1) / slideElements.length) * 100));
        }
      }

      pdf.save("FDI_Sensitivity_Analysis_India.pdf");
    } catch (error) {
      console.error("Error exporting to PDF:", error);
    } finally {
      setIsExporting(false);
      setExportProgress(0);
    }
  }, []);

  return { exportToPPTX, exportToPDF, isExporting, exportProgress };
};