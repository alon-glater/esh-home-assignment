import kebabCase from "lodash.kebabcase";
import type { Post, Language } from "../types";

const englishPosts: Array<Post> = [
  {
    title: "Post 1",
    id: kebabCase("Post 1"),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    published: new Date(),
    imageUrl:
      "https://images.unsplash.com/photo-1488998527040-85054a85150e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
  },
  {
    title: "Post 2",
    id: kebabCase("Post 2"),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    published: new Date(),
    imageUrl:
      "https://images.unsplash.com/photo-1551260627-fd1b6daa6224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2667&q=80",
  },
  {
    title: "Post 3",
    id: kebabCase("Post 3"),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    published: new Date(),
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1676782583940-633240617c78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80",
  },
];

const hebrewPosts: Array<Post> = [
  {
    title: "פוסט 1",
    id: "he-post-1",
    content:
      "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.",
    published: new Date(),
    imageUrl:
      "https://images.unsplash.com/photo-1488998527040-85054a85150e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
  },
  {
    title: "פוסט 2",
    id: "he-post-2",
    content:
      "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.",
    published: new Date(),
    imageUrl:
      "https://images.unsplash.com/photo-1551260627-fd1b6daa6224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2667&q=80",
  },
  {
    title: "פוסט 3",
    id: "he-post-3",
    content:
      "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.",
    published: new Date(),
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1676782583940-633240617c78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80",
  },
];

export const posts = new Map<Language["value"], Array<Post>>([
  ["en", englishPosts],
  ["he", hebrewPosts],
]);
