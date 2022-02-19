import { NextPage } from "next";
import { useState } from "react";

import SectionContainer from "../../components/SectionContainer";
import SectionHeader from "../../components/SectionHeader";
import { VSpacerM, VSpacerS } from "../../components/Spacer";
import SplitEditor from "../../components/SplitEditor";
import { useLocale } from "../../hooks/useLocale";
import MainLayout from "../../layouts/MainLayout";
import { toYaml } from "../../lib/convert";

const JsonYaml: NextPage = () => {
  const { t } = useLocale();

  const [input, setInput] = useState("");
  // TODO: implemet
  const [from, setFrom] = useState();
  const [indent, setIndent] = useState();

  const output = toYaml(input, 2);

  return (
    <MainLayout title={t.jsonYaml.title}>
      <SectionContainer>
        <SectionHeader title={t.common.configTitle} />
        <VSpacerS />
      </SectionContainer>

      <VSpacerM />
      <SectionContainer className="grow">
        <SplitEditor
          input={input}
          setInput={setInput}
          output={output}
          inputLanguage="json"
          outputLanguage="yaml"
        />
      </SectionContainer>
    </MainLayout>
  );
};

export default JsonYaml;
