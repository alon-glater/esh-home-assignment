import type { Language } from "../types";

export const languages: Array<Language> = [
  {
    display: "English",
    value: "en",
    appBarHomeButtonText: "Home",
    appBarBlogButtonText: "Blog",
    privacyPolicyLinkText: "Privacy Policy",
    accessibilityStatementLinkText: "Accessibility Statement",
    landingPageMessage: "A new bank is coming",
    landingPageButtonText: "Read Latest Updates",
    errorPageTitle: "Not Found",
    errorPageMessage: "Could not find the requested post.",
    errorPageButtonText: "Go Back To Home Page",
  },
  {
    display: "עברית",
    value: "he",
    rtl: true,
    appBarHomeButtonText: "בית",
    appBarBlogButtonText: "בלוג",
    privacyPolicyLinkText: "מדיניות פרטיות",
    accessibilityStatementLinkText: "הצהרת נגישות",
    landingPageMessage: "בנק חדש נולד",
    landingPageButtonText: "לעדכונים האחרונים",
    errorPageTitle: "לא נמצא",
    errorPageMessage: "לא נמצא הפוסט המבוקש.",
    errorPageButtonText: "חזור לדף הבית",
  },
];
