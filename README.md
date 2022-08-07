# TypeScript Empty Project

[![PullRequest](https://github.com/davidjenni/TypeScriptEmptyProj/actions/workflows/PullRequest.yml/badge.svg)](https://github.com/davidjenni/TypeScriptEmptyProj/actions/workflows/PullRequest.yml)

Template project for TypeScript, containing basic npm run scripts to transpile src and test trees and run jest tests

The contents of this repo can be used to green-field populate your own TS based project;
it provides out of the box (after an initial `npm ci` call to restore the depencencies):

- CI (`npm run ci`): rebuild, test (with code coverage), lint the code base
- build (`npm run build`): transpiles all TS sources and tests into /dist folder
- test (`npm test` or `npm run test`): run all tests
- lint (`npm run lint`): check for problematic code patterns using eslint
- check: (`npm run check`): check for consistent source formatting, using prettier
- prettier (`npm run prettier`): re-format all sources to address issues found with `npm run check`.
  Note that by default, VSCode will run the same formatting rules, see: `.vscode/settings.json` to disable that
- Tests can be debugged via `F5` from within an individual .test.ts file
- A Github Workflow is setup as PR loop

## Setting Up Dev Environment

Windows, macOS or Linux:

- [Node.js LTS (currently v16)](https://nodejs.org/en/download/)
- [git](https://git-scm.com/downloads)
- [VS Code](https://code.visualstudio.com/Download) or your different favorite editor
- recommended VSCode extensions:
  - [EditorConfig for VS Code (editorconfig.editorconfig)](https://github.com/editorconfig/editorconfig-vscode)
  - [ESLint (dbaeumer.vscode-eslint)](https://github.com/Microsoft/vscode-eslint)
  - [markdownlint (davidanson.vscode-markdownlint)](https://github.com/DavidAnson/vscode-markdownlint)
  - [Prettier - Code formatter (esbenp.prettier-vscode)](https://github.com/prettier/prettier-vscode)

## Getting Started

Clone, restore modules, build and run:

```bash
git clone https://github.com/davidjenni/TypeScriptEmptyProj.git
cd TypeScriptEmptyProj
npm ci
npm run ci
```
