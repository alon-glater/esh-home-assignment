export type Post = {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  published: Date;
};

export type Language = {
  display: string;
  value: "en" | "he";
  appBarHomeButtonText: string;
  appBarBlogButtonText: string;
  privacyPolicyLinkText: string;
  accessibilityStatementLinkText: string;
  landingPageMessage: string;
  landingPageButtonText: string;
  errorPageTitle: string;
  errorPageMessage: string;
  errorPageButtonText: string;
};
