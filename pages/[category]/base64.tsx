import { NextPage } from "next";
import { useState } from "react";

import ClearButton from "../../components/ClearButton";
import Configuration from "../../components/Configuration";
import CopyButton from "../../components/CopyButton";
import PasteButton from "../../components/PasteButton";
import SectionHeader from "../../components/SectionHeader";
import Select from "../../components/Select";
import Spacer from "../../components/Spacer";
import TextArea from "../../components/TextArea";
import { IconBeerMini } from "../../data/icon";
import MainLayout from "../../layouts/MainLayout";

const modes = [{ name: "Encode" }, { name: "Decode" }];

// https://stackoverflow.com/a/30106551/8448791

const encode = (str: string) => {
  return window.btoa(
    encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => {
      return String.fromCharCode(parseInt(p1, 16));
    })
  );
};

const decode = (str: string) => {
  return decodeURIComponent(
    Array.prototype.map
      .call(window.atob(str), (c) => {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
};

const Base64: NextPage = () => {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState(modes[0]);

  const output = mode.name === "Encode" ? encode(input) : decode(input);

  return (
    <MainLayout title="Base 64 Encoder / Decoder">
      <div>
        <SectionHeader title="Configuration" />
        <Spacer y={6} />
        <Configuration
          icon={IconBeerMini}
          title="Conversion"
          subtitle="Select which conversion mode you want to use"
        >
          <div className="w-28">
            <Select options={modes} value={mode} onChange={setMode} />
          </div>
        </Configuration>
      </div>
      <Spacer y={24} />
      <div>
        <SectionHeader title="Input">
          <div className="flex">
            <PasteButton setter={setInput} />
            <Spacer x={6} />
            <ClearButton setter={setInput} />
          </div>
        </SectionHeader>
        <Spacer y={6} />
        <TextArea value={input} onChange={setInput} rows={7} />
      </div>
      <Spacer y={12} />
      <div>
        <SectionHeader title="Output">
          <CopyButton text={output} />
        </SectionHeader>
        <Spacer y={6} />
        <TextArea value={output} rows={7} />
      </div>
    </MainLayout>
  );
};

export default Base64;
