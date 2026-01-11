# Step 3 — Extraction et optimisation des images

Commit: `feat: extract and optimize design images`

Objectif
--------
Extraire les images des designs présents dans `design/`, les télécharger dans `public/images/` et organiser par catégorie. Préparer l'optimisation (WebP, compression) et fournir un script d'automatisation optionnel.

Structure cible
--------------
```
public/images/
├── hero/
│   ├── home-hero.jpg
│   └── bees-background.jpg
├── products/
│   ├── miel-acacia.jpg
│   ├── miel-chataignier.jpg
│   └── miel-lavande.jpg
├── apiaries/
│   ├── rucher-montagne.jpg
│   └── rucher-lavande.jpg
└── about/
    └── apiculteur.jpg
```

Fichiers à créer
-----------------
- `public/images/` et sous-dossiers
- `scripts/extract-images.js` (optionnel) : script Node pour parser les fichiers `design/*/code.html` et récupérer les URLs d'images

Optimisation
------------
- Utiliser un outil (squoosh, sharp, or imageoptim) pour créer des versions WebP et compresser les images.
- Conserver un fallback JPEG/PNG si nécessaire.

Tests rapides
-------------
- Vérifier que `next/image` peut charger les images locales
- Vérifier les tailles et formats WebP

Notes
-----
- Si les images proviennent de sources externes, télécharger localement et respecter les licences.
