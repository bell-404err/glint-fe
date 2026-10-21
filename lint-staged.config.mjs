const config = {
  '*.{ts,tsx,mjs,mts}': ['eslint --fix', 'prettier --write'],
  '*.{json,md,yml,yaml,css}': 'prettier --write',
};

export default config;
