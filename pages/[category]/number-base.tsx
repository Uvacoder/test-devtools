import { NextPage } from "next";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import MainLayout from "../../layouts/MainLayout";

const NumberBase: NextPage = () => {
  const [input, setInput] = useState("");

  const decimal = Number(input);
  const hex = Number(input).toString(16);
  const octal = Number(input).toString(8);
  const binary = Number(input).toString(2);

  return (
    <MainLayout title="Number Base Converter">
      <div>
        <label>
          Input
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Hexadecimal
          <input type="text" value={hex} readOnly />
        </label>
        <CopyToClipboard text={hex}>
          <button>Copy</button>
        </CopyToClipboard>
      </div>
      <div>
        <label>
          Decimal
          <input type="text" value={decimal} readOnly />
        </label>
        <CopyToClipboard text={decimal.toString()}>
          <button>Copy</button>
        </CopyToClipboard>
      </div>
      <div>
        <label>
          Octal
          <input type="text" value={octal} readOnly />
        </label>
        <CopyToClipboard text={octal}>
          <button>Copy</button>
        </CopyToClipboard>
      </div>
      <div>
        <label>
          Binary
          <input type="text" value={binary} readOnly />
        </label>
        <CopyToClipboard text={binary}>
          <button>Copy</button>
        </CopyToClipboard>
      </div>
    </MainLayout>
  );
};

export default NumberBase;
