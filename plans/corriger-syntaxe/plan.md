# Corriger les erreurs de syntaxe

**Branch:** `corriger-syntaxe`
**Description:** Ajouter les corrections de configuration et exclusions pour résoudre les erreurs de résolution d'import et éviter l'analyse des fichiers de design.

## Goal
Corriger les erreurs de syntaxe/résolution liées aux imports aliasés (`@/`) et éviter que TypeScript/ESLint n'analyse des fichiers non‑sources (dossiers `design/`). Cela permettra au projet de compiler et à l'IDE d'indexer correctement le code.

## Implementation Steps

### Step 1: Ajouter `baseUrl` dans `tsconfig.json`
**Files:** `tsconfig.json`
**What:** Ajouter `"baseUrl": "."` dans `compilerOptions` pour que l'alias `@/` soit résolu correctement par TypeScript/IDE/ESLint.
**Testing:** Lancer `npx tsc --noEmit` et vérifier la disparition des erreurs d'import `@/...`.

### Step 2: Exclure le dossier `design` de l'analyse TypeScript
**Files:** `tsconfig.json`
**What:** Étendre la section `exclude` (ex. ajouter `"design/**"`) pour empêcher TypeScript d'analyser les fichiers de design contenant des espaces/apostrophes.
**Testing:** Relancer `npx tsc --noEmit` et vérifier qu'aucun fichier de `design/` n'est analysé.

### Step 3: Ajouter `.eslintignore`
**Files:** `.eslintignore` (nouveau)
**What:** Créer `.eslintignore` et y ajouter `design/` et autres dossiers non‑sources afin d'empêcher ESLint de signaler ces fichiers.
**Testing:** Lancer `npx eslint .` et vérifier l'absence d'avertissements provenant de `design/`.

### Step 4: Vérification locale (non‑modificatrice)
**Files:** aucun (commande)
**What:** Exécuter `npm run build` ou `next build` / `npx tsc --noEmit` pour confirmer que la compilation réussit.
**Testing:** `next build` se termine sans erreurs.

### Step 5: Renommage facultatif des dossiers de design [NEEDS CLARIFICATION]
**Files:** `design/*` (noms de dossiers contenant espaces/apostrophes)
**What:** Proposer de renommer les dossiers problématiques pour enlever espaces/apostrophes (ex. `à_propos_-_le_rucher_d'ahmed` → `a-propos-le-rucher-dahmed`). Ceci est disruptif et nécessite validations/MISE A JOUR des références.
**Testing:** Vérifier que les scripts et liens internes fonctionnent après renommage; exécuter `git mv` et `next build`.

## Notes
- Priorité : Step 1 (baseUrl) puis Step 2/3. Ces corrections résolvent la majorité des erreurs de résolution d'import.
- Le renommage des dossiers `design/` est facultatif mais recommandé pour robustesse CI/OS.
- Merci de confirmer si vous autorisez les renommages et si je dois appliquer directement les patches pour `tsconfig.json` et `.eslintignore`.
