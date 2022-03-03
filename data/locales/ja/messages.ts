import { FormatOptions } from "sql-formatter";

import { optionValues } from "../../optionValues";

export const t = {
  common: {
    allToolsTitle: "すべてのツール",
    configTitle: "設定",
    inputTitle: "入力",
    outputTitle: "出力",
    copyTitle: "コピー",
    pasteTitle: "貼り付け",
    clearTitle: "クリア",
    openFiletitle: "ファイルを開く",
    previewTitle: "プレビュー",
    notFoundTitle: "見つかりませんでした",
    notFoundDesc: "あなたが探しているページは存在しません。",
    orText: "または",
    browseFilesText: "ファイルを開く",
  },
  base64: {
    title: "Base 64 エンコーダ / デコーダ",
    conversionTitle: "変換",
    conversionSubtitle: "使用する変換方法を選択する",
    encodeDesc: "入力をエンコードする",
    encodeText: "エンコード",
    decodeText: "デコード",
  },
  checksum: {
    title: "チェックサム生成",
    uppercaseTitle: "大文字の使用",
    uppercaseDesc: "出力を大文字に変換する",
    hashingAlgorithmTitle: "ハッシュアルゴリズム",
    hachingAlgorithmDesc: "使用するハッシュアルゴリズムを選択する",
    hashingAlgorithmOptions: [
      { name: "MD5", value: optionValues.checksum.hashingAlgorithm.md5 },
      { name: "SHA1", value: optionValues.checksum.hashingAlgorithm.sha1 },
      { name: "SHA256", value: optionValues.checksum.hashingAlgorithm.sha256 },
      { name: "SHA384", value: optionValues.checksum.hashingAlgorithm.sha384 },
      { name: "SHA512", value: optionValues.checksum.hashingAlgorithm.sha512 },
    ],
    dragAndDropTitle: "ここにファイルをドラッグ & ドロップする",
  },
  gzip: {
    title: "GZip 圧縮 / 展開",
    compressTitle: "GZip 圧縮/展開",
    compressDesc: "入力を圧縮するか、展開するか選択する",
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
    conversionSubtitle: "使用する変換方法を選択する",
    encodeDesc: "入力をエンコードする",
    encodeText: "エンコード",
    decodeText: "デコード",
  },
  json: {
    title: "JSON フォーマッタ",
    indentTitle: "インデント",
    indentOptions: [
      { name: "2 スペース", value: optionValues.json.indent.twoSpaces },
      { name: "4 スペース", value: optionValues.json.indent.fourSpaces },
      { name: "1 タブ", value: optionValues.json.indent.oneTab },
      { name: "ミニファイ", value: optionValues.json.indent.minify },
    ],
  },
  jsonYaml: {
    title: "JSON <> YAML 変換",
    conversionTitle: "変換",
    conversionSubtitle: "使用する変換方法を選択する",
    conversionOptions: [
      {
        name: "JSON から YAML",
        value: optionValues.jsonYaml.conversion.jsonToYaml,
      },
      {
        name: "YAML から JSON",
        value: optionValues.jsonYaml.conversion.yamlToJson,
      },
    ],
    indentTitle: "インデント",
    indentOptions: [
      { name: "2 スペース", value: optionValues.jsonYaml.indent.twoSpaces },
      { name: "4 スペース", value: optionValues.jsonYaml.indent.fourSpaces },
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
      { name: "単語", value: optionValues.loremIpsum.type.words },
      { name: "文", value: optionValues.loremIpsum.type.sentences },
      { name: "段落", value: optionValues.loremIpsum.type.paragraphs },
    ],
  },
  markdownPreview: {
    title: "Markdown プレビュー",
    themeTitle: "テーマ",
    themeSubtitle: "Markdown のプレビューに使用するテーマを選択する",
    themeOptions: [
      { name: "ライト", value: "light" },
      { name: "ダーク", value: "dark" },
    ],
  },
  numberBase: {
    title: "基数変換",
    formatNumberTitle: "数字のフォーマット",
    formatNumberDesc: "数字のフォーマット",
    inputTypeTitle: "入力タイプ",
    inputTypeSubtitle: "使用する入力タイプを選択する",
    hexTitle: "16 進数",
    decimalTitle: "10 進数",
    octalTitle: "8 進数",
    binaryTitle: "2 進数",
    baseOptions: [
      { name: "8 進数", value: optionValues.numberBase.base.octal },
      { name: "2 進数", value: optionValues.numberBase.base.binary },
      { name: "10 進数", value: optionValues.numberBase.base.decimal },
      { name: "16 進数", value: optionValues.numberBase.base.hex },
    ],
  },
  regexTester: {
    title: "Regex Tester",
    regularExpressionTitle: "正規表現",
    textTitle: "テキスト",
  },
  search: {
    resultTitle: "「{{0}}」の検索結果",
    noResultTitle: "見つかりませんでした",
    inputPlaceholder: "ツールを検索する...",
  },
  settings: {
    title: "設定",
    languageTitle: "言語",
    themeTitle: "アプリのテーマ",
    themeSubtitle: "アプリで使用するテーマを選択する",
    themeOptions: [
      { name: "ライト", value: optionValues.settings.theme.light },
      { name: "ダーク", value: optionValues.settings.theme.dark },
    ],
    textEditorTitle: "テキストエディタ",
    wrapWordTitle: "折り返し",
    lineNumbersTitle: "行番号",
    lineNumbersDesc: "テキストエディタに行番号を表示する",
    highlightCurrentLineTitle: "選択中の行のハイライト",
    highlightCurrentLineDesc: "選択中の行の背景色を変更して見やすくする",
    renderWhiteSpaceTitle: "空白の表示",
  },
  sql: {
    title: "SQL フォーマッタ",
    languageTitle: "言語",
    languageOptions: [
      { name: "Db2", value: optionValues.sql.language.db2 },
      { name: "MariaDB", value: optionValues.sql.language.mariadb },
      { name: "MySQL", value: optionValues.sql.language.mysql },
      { name: "N1QL", value: optionValues.sql.language.n1ql },
      { name: "PL/SQL", value: optionValues.sql.language.plsql },
      { name: "PostgreSQL", value: optionValues.sql.language.postgresql },
      { name: "AmazonRedshift", value: optionValues.sql.language.redshift },
      { name: "Spark SQL", value: optionValues.sql.language.spark },
      { name: "Standard SQL", value: optionValues.sql.language.standard },
      { name: "Transact-SQL", value: optionValues.sql.language.tsql },
    ] as { name: string; value: FormatOptions["language"] }[],
    indentTitle: "インデント",
    indentOptions: [
      { name: "2 スペース", value: optionValues.sql.indent.twoSpaces },
      { name: "4 スペース", value: optionValues.sql.indent.fourSpaces },
    ],
  },
  url: {
    title: "URL エンコーダ / デコーダ",
    conversionTitle: "変換",
    conversionSubtitle: "使用する変換方法を選択する",
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
    uuidVersionSubtitle: "生成する UUID のバージョンを選択する",
    generateTitle: "生成",
    generateButtonText: "UUID を生成する",
    versionOptions: [
      { name: "1", value: optionValues.uuid.version.v1 },
      { name: "4 (GUID)", value: optionValues.uuid.version.v4 },
    ],
  },
  xml: {
    title: "XML フォーマッタ",
    indentTitle: "インデント",
    indentOptions: [
      { name: "2 スペース", value: optionValues.xml.indent.twoSpaces },
      { name: "4 スペース", value: optionValues.xml.indent.fourSpaces },
    ],
  },
};
