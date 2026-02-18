import { useLanguage } from "./LanguageContext";
import { translations } from "./translation";

/**
 * Custom hook to get translations for a specific page
 * @param {string} page - The page name (e.g., 'home')
 * @returns {object} - The translations for the current language
 */
export function useTranslation(page) {
  const { language } = useLanguage();

  if (!translations[page]) {
    console.warn(`No translations found for page: ${page}`);
    return {};
  }

  return translations[page][language] || translations[page]["ar"];
}

/**
 * Get a specific translation value by path
 * @param {object} t - The translation object
 * @param {string} path - Dot-separated path to the translation (e.g., 'hero.title')
 * @returns {any} - The translation value
 */
export function getTranslation(t, path) {
  return path.split(".").reduce((obj, key) => obj?.[key], t);
}
