import { MouseEvent, useCallback, useState } from "react";
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { useLanguageContext } from "@/context/language";
import type { Language } from "@/types";

export const LanguagesMenu: React.FC = () => {
  const {
    languages,
    language: selectedLanguage,
    setLanguage,
  } = useLanguageContext();
  const [languagesElement, setLanguagesElement] = useState<HTMLElement | null>(
    null
  );

  const openLanguagesMenu = (event: MouseEvent<HTMLElement>) => {
    setLanguagesElement(event.currentTarget);
  };

  const closeLanguagesMenu = useCallback(() => {
    setLanguagesElement(null);
  }, []);

  const selectLanguage = useCallback(
    (language: Language) => {
      setLanguage(language);
      closeLanguagesMenu();
    },
    [closeLanguagesMenu, setLanguage]
  );

  return (
    <>
      <IconButton onClick={openLanguagesMenu} aria-label="language">
        <LanguageIcon />
      </IconButton>
      <Menu
        anchorEl={languagesElement}
        open={!!languagesElement}
        onClose={closeLanguagesMenu}
        aria-label="languages-menu"
      >
        {languages.map((language) => (
          <MenuItem
            key={language.value}
            onClick={() => selectLanguage(language)}
            disabled={language === selectedLanguage}
          >
            <Typography>{language.display}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
