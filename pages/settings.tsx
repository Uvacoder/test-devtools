import { NextPage } from "next";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

import { Select } from "../components/io";
import { Configuration, SectionMain } from "../components/section";
import { VSpacerS } from "../components/Spacer";
import { IconI18n, IconTheme } from "../data/icon";
import { useLocale } from "../hooks/useLocale";
import MainLayout from "../layouts/MainLayout";

const languageOptions = [
  { name: "English", value: "en" },
  { name: "日本語", value: "ja" },
];

const Settings: NextPage = () => {
  const { t, locale } = useLocale();
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  const { themeOptions } = t.settings;
  const language = languageOptions.find((l) => l.value === locale);
  const currentTheme = themeOptions.find((t) => t.value === theme);

  return (
    <MainLayout title={t.settings.title}>
      <SectionMain>
        <Configuration icon={IconI18n} title={t.settings.languageTitle}>
          <div className="w-36">
            {language && (
              <Select
                options={languageOptions}
                value={language}
                onChange={(l) => {
                  router.push("/", "/", { locale: l.value });
                }}
              />
            )}
          </div>
        </Configuration>
      </SectionMain>
      <VSpacerS />
      <SectionMain>
        <Configuration
          icon={IconTheme}
          title={t.settings.themeTitle}
          desc={t.settings.themeSubtitle}
        >
          <div className="w-24">
            <Select
              options={themeOptions}
              value={currentTheme || themeOptions[0]}
              onChange={(t) => {
                setTheme(t.value);
              }}
            />
          </div>
        </Configuration>
      </SectionMain>
    </MainLayout>
  );
};

export default Settings;
