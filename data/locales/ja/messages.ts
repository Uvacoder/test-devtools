import { FormatOptions } from "sql-formatter";

export const t = {
  common: {
    configTitle: "設定",
    inputTitle: "入力",
    outputTitle: "出力",
    copyTitle: "コピー",
    pasteTitle: "貼り付け",
    clearTitle: "クリア",
    openFiletitle: "ファイルを開く",
  },
  base64: {
    title: "Base 64 エンコーダ / デコーダ",
    conversionTitle: "変換",
    conversionSubtitle: "使用する変換方法を選択してください",
    encodeDesc: "入力をエンコードする",
    encodeText: "エンコード",
    decodeText: "デコード",
  },
  checksum: {
    title: "チェックサム",
  },
  gzip: {
    title: "GZip 圧縮 / 展開",
    compressTitle: "GZip 圧縮/展開",
    compressDesc: "入力を圧縮するか、展開するか選択してください",
    compressText: "圧縮",
    decompressText: "展開",
  },
  hash: {
    title: "ハッシュ生成",
    uppercaseTitle: "大文字の使用",
    uppercaseDesc: "出力を大文字に変換する",
    md5Title: "MD5",
    sha1Title: "SHA1",
    sha256Title: "SHA256",
    sha512Title: "SHA512",
  },
  html: {
    title: "HTML エンコーダ / デコーダ",
    conversionTitle: "変換",
    conversionSubtitle: "使用する変換方法を選択してください",
    encodeDesc: "入力をエンコードする",
    encodeText: "エンコード",
    decodeText: "デコード",
  },
  json: {
    title: "JSON フォーマッタ",
    indentTitle: "インデント",
    indentOptions: [
      { name: "2 スペース", value: "  " },
      { name: "4 スペース", value: "    " },
      { name: "1 タブ", value: "\t" },
      { name: "ミニファイ", value: undefined },
    ],
  },
  jsonYaml: {
    title: "JSON <> YAML 変換",
    conversionTitle: "変換",
    conversionSubtitle: "使用する変換方法を選択してください",
    conversionOptions: [
      { name: "JSON から YAML", value: "json-to-yaml" },
      { name: "YAML から JSON", value: "yaml-to-json" },
    ],
    indentTitle: "インデント",
    indentOptions: [
      { name: "2 スペース", value: 2 },
      { name: "4 スペース", value: 4 },
    ],
  },
  jwtDecoder: {
    title: "JWT デコーダ",
    jwtTokenTitle: "JWT トークン",
    headerTitle: "ヘッダー",
    payloadTitle: "ペイロード",
  },
  loremIpsum: {
    title: "Lorem Ipsum 生成",
    typeTitle: "種別",
    typeSubtitle: "Lorem Ipsum の単語、文、または段落を生成する",
    lengthTitle: "長さ",
    lengthSubtitle: "生成する単語、文、または段落の数",
    typeOptions: [
      { name: "単語", value: "words" },
      { name: "文", value: "sentences" },
      { name: "段落", value: "paragraphs" },
    ],
  },
  numberBase: {
    title: "基数変換",
    formatNumberTitle: "数字のフォーマット",
    formatNumberDesc: "数字のフォーマット",
    inputTypeTitle: "入力タイプ",
    inputTypeSubtitle: "使用する入力タイプを選択してください",
    hexTitle: "16 進数",
    decimalTitle: "10 進数",
    octalTitle: "8 進数",
    binaryTitle: "2 進数",
    baseOptions: [
      { name: "8 進数", value: 8 },
      { name: "2 進数", value: 2 },
      { name: "10 進数", value: 10 },
      { name: "16 進数", value: 16 },
    ],
  },
  settings: {
    title: "設定",
    languageTitle: "言語",
    languageOptions: [
      { name: "English", value: "en" },
      { name: "日本語", value: "ja" },
    ],
    themeTitle: "アプリのテーマ",
    themeSubtitle: "アプリで使用するテーマを選択してください",
    themeOptions: [
      { name: "ライト", value: "light" },
      { name: "ダーク", value: "dark" },
    ],
  },
  sql: {
    title: "SQL フォーマッタ",
    languageTitle: "言語",
    languageOptions: [
      { name: "Db2", value: "db2" },
      { name: "MariaDB", value: "mariadb" },
      { name: "MySQL", value: "mysql" },
      { name: "N1QL", value: "n1ql" },
      { name: "PL/SQL", value: "plsql" },
      { name: "PostgreSQL", value: "postgresql" },
      { name: "AmazonRedshift", value: "redshift" },
      { name: "Spark SQL", value: "spark" },
      { name: "Standard SQL", value: "sql" },
      { name: "Transact-SQL", value: "tsql" },
    ] as { name: string; value: FormatOptions["language"] }[],
    indentTitle: "インデント",
    indentOptions: [
      { name: "2 スペース", value: "  " },
      { name: "4 スペース", value: "    " },
    ],
  },
  url: {
    title: "URL エンコーダ / デコーダ",
    conversionTitle: "変換",
    conversionSubtitle: "使用する変換方法を選択してください",
    encodeDesc: "入力をエンコードする",
    encodeText: "エンコード",
    decodeText: "デコード",
  },
  uuid: {
    title: "UUID 生成",
    hyphenateTitle: "ハイフン",
    hyphenateDesc: "出力にハイフンを付ける",
    uppercaseTitle: "大文字",
    uppercaseDesc: "出力を大文字に変換する",
    uuidVersionTitle: "UUID のバージョン",
    uuidVersionSubtitle: "生成する UUID のバージョンを選択してください",
    generateTitle: "生成",
    generateButtonText: "UUID を生成する",
    versionOptions: [
      { name: "1", value: 1 },
      { name: "4 (GUID)", value: 4 },
    ],
  },
  xml: {
    title: "XML フォーマッタ",
    indentTitle: "インデント",
    indentOptions: [
      { name: "2 スペース", value: "  " },
      { name: "4 スペース", value: "    " },
    ],
  },
};
