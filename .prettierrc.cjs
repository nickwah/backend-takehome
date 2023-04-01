module.exports = {
  singleQuote: true,
  trailingComma: "all",
  importOrder: [
    "^node:(.*)$",
    "^@nestjs/(.*)$",
    "<THIRD_PARTY_MODULES>",
    "^(../)+",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
  importOrderParserPlugins: ["typescript", "decorators-legacy"],
  plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
};
