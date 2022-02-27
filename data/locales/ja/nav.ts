import {
  IconAllTools,
  IconBase64,
  IconChecksum,
  IconConverters,
  IconEncodersDecoders,
  IconFormatters,
  IconGenerators,
  IconGZip,
  IconHash,
  IconHtml,
  IconJson,
  IconJWT,
  IconLoremIpsum,
  IconNumberBase,
  IconSettings,
  IconSql,
  IconUrl,
  IconUuid,
  IconXml,
} from "../../icon";
import { Nav } from "../types";

const localePath = "/ja";

export const nav: Nav = [
  {
    title: "すべてのツール",
    href: `${localePath}/`,
    icon: IconAllTools,
  },
  {
    title: "変換",
    href: `${localePath}/converters`,
    icon: IconConverters,
    items: [
      {
        title: "JSON <> YAML",
        longTitle: "JSON <> YAML 変換",
        href: `${localePath}/converters/json-yaml`,
        icon: IconConverters,
        desc: "JSON と YAML を相互に変換する",
      },
      {
        title: "基数",
        longTitle: "基数変換",
        href: `${localePath}/converters/number-base`,
        icon: IconNumberBase,
        desc: "ある基数から別の基数に数値を変換する",
      },
    ],
  },
  {
    title: "エンコーダ / デコーダ",
    href: `${localePath}/encoders-decoders`,
    icon: IconEncodersDecoders,
    items: [
      {
        title: "HTML",
        longTitle: "HTML エンコーダ / デコーダ",
        href: `${localePath}/encoders-decoders/html`,
        icon: IconHtml,
        desc: "文字を対応する HTML エンティティにエンコード、デコードする",
      },
      {
        title: "URL",
        longTitle: "URL エンコーダ / デコーダ",
        href: `${localePath}/encoders-decoders/url`,
        icon: IconUrl,
        desc: "文字を対応する URL エンティティにエンコード、デコードする",
      },
      {
        title: "Base 64",
        longTitle: "Base 64 エンコーダ / デコーダ",
        href: `${localePath}/encoders-decoders/base64`,
        icon: IconBase64,
        desc: "Base64 データをエンコード、デコードする",
      },
      {
        title: "GZip",
        longTitle: "GZip 圧縮 / 展開",
        href: `${localePath}/encoders-decoders/gzip`,
        icon: IconGZip,
        desc: "文字列を圧縮、展開する",
      },
      {
        title: "JWT デコーダ",
        longTitle: "JWT デコーダ",
        href: `${localePath}/encoders-decoders/jwt-decoder`,
        icon: IconJWT,
        desc: "JWT ヘッダー、ペイロード、署名をデコードする",
      },
    ],
  },
  {
    title: "フォーマッタ",
    href: `${localePath}/formatters`,
    icon: IconFormatters,
    items: [
      {
        title: "JSON",
        longTitle: "JSON フォーマッタ",
        href: `${localePath}/formatters/json`,
        icon: IconJson,
        desc: "JSON データをインデントまたはミニファイする",
      },
      {
        title: "SQL",
        longTitle: "SQL フォーマッタ",
        href: `${localePath}/formatters/sql`,
        icon: IconSql,
        desc: "SQL クエリをインデントする",
      },
      {
        title: "XML",
        longTitle: "XML フォーマッタ",
        href: `${localePath}/formatters/xml`,
        icon: IconXml,
        desc: "XML データをインデントまたはミニファイする",
      },
    ],
  },
  {
    title: "生成",
    href: `${localePath}/generators`,
    icon: IconGenerators,
    items: [
      {
        title: "ハッシュ",
        longTitle: "ハッシュ生成",
        href: `${localePath}/generators/hash`,
        icon: IconHash,
        desc: "テキストデータから MD5、SHA1、SHA256、SHA512 のハッシュを計算する",
      },
      {
        title: "UUID",
        longTitle: "UUID 生成",
        href: `${localePath}/generators/uuid`,
        icon: IconUuid,
        desc: "バージョン 1、4 の UUID を生成する",
      },
      {
        title: "Lorem Ipsum",
        longTitle: "Lorem Ipsum 生成",
        href: `${localePath}/generators/lorem-ipsum`,
        icon: IconLoremIpsum,
        desc: "Lorem Ipsum テキストを生成する",
      },
      {
        title: "チェックサム",
        longTitle: "チェックサム生成",
        href: `${localePath}/generators/checksum`,
        icon: IconChecksum,
        desc: "Generate an hash with CheckSum based on a file",
      },
    ],
  },
  {
    title: "Text",
    href: `${localePath}/text`,
    items: [
      {
        title: "Markdown Preview",
        longTitle: "Markdown Preview",
        href: `${localePath}/text/markdown-preview`,
        desc: "Preview a Markdown document with a GitHub-like render",
      },
    ],
  },
  {
    title: "設定",
    href: `${localePath}/settings`,
    icon: IconSettings,
    desc: "DevToysWeb の見た目や使い勝手をカスタマイズする",
  },
];
