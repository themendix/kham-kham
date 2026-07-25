# Guide complet — Configurer Git et GitHub dans Visual Studio Code (Windows)

> Manuel d'installation et de configuration, du zéro jusqu'au premier `push` sur GitHub, avec le workflow quotidien et un chapitre de dépannage. Chaque étape est expliquée (le *quoi*, le *pourquoi*, et *comment vérifier* que ça marche).

---

## Sommaire

1. Comprendre les trois briques (Git, GitHub, VS Code)
2. Prérequis et installations
3. Configurer l'identité Git (obligatoire, une seule fois)
4. Régler VS Code pour Git
5. S'authentifier auprès de GitHub depuis VS Code
6. Initialiser un dépôt local
7. Le fichier `.gitignore`
8. Premier commit
9. Publier le projet sur GitHub
10. Le workflow quotidien (commit / push / pull / branches)
11. (Optionnel) Authentification par clé SSH
12. Dépannage des erreurs les plus fréquentes
13. Aide-mémoire des commandes

---

## 1. Comprendre les trois briques

Avant de configurer, il faut distinguer clairement trois outils différents, souvent confondus :

- **Git** : le logiciel de gestion de versions installé **sur votre ordinateur**. Il enregistre l'historique de vos fichiers en local (les « commits »). Il fonctionne même sans Internet.
- **GitHub** : un **service en ligne** qui héberge des dépôts Git à distance (dans le « cloud »). Il sert à sauvegarder, partager et collaborer. C'est une entreprise ; il en existe d'autres (GitLab, Bitbucket).
- **VS Code** : votre **éditeur de code**. Il intègre une interface graphique (le panneau *Source Control*) qui pilote Git à votre place, sans avoir à tout taper en ligne de commande.

En résumé : Git versionne, GitHub héberge, VS Code orchestre. La configuration consiste à connecter ces trois éléments proprement.

---

## 2. Prérequis et installations

### 2.1 Installer Git

1. Téléchargez Git depuis le site officiel : **https://git-scm.com/download/win**.
2. Lancez l'installateur. Vous pouvez accepter les options par défaut ; deux écrans méritent attention :
   - **« Default editor used by Git »** : choisissez *Use Visual Studio Code as Git's default editor* (plus confortable que Vim).
   - **« Adjusting the name of the initial branch »** : cochez *Override the default branch name* et laissez **`main`** (standard moderne, aligné avec GitHub).
3. Terminez l'installation.

**Vérification.** Ouvrez un terminal (PowerShell ou l'invite de commandes) et tapez :

```bash
git --version
```

Vous devez voir quelque chose comme `git version 2.4x.x`. Si la commande n'est pas reconnue, redémarrez le terminal (ou l'ordinateur) pour que le `PATH` soit rechargé.

### 2.2 Installer / mettre à jour VS Code

Si ce n'est pas déjà fait, installez VS Code depuis **https://code.visualstudio.com**. Redémarrez VS Code après avoir installé Git pour qu'il le détecte.

### 2.3 Créer un compte GitHub

Si vous n'en avez pas, créez-en un sur **https://github.com** (gratuit). Notez bien votre **nom d'utilisateur** et l'**adresse e-mail** associée : ils serviront à l'étape suivante.

---

## 3. Configurer l'identité Git (obligatoire, une seule fois)

Chaque commit est signé avec un nom et un e-mail. Il faut donc les déclarer **une seule fois** au niveau global (valable pour tous vos projets). Ouvrez un terminal et exécutez :

```bash
git config --global user.name "Mamadou Mendy"
git config --global user.email "papemamadoumendy191@gmail.com"
```

> **Important :** utilisez la **même adresse e-mail** que celle de votre compte GitHub. Sinon, GitHub ne rattachera pas vos commits à votre profil (ils apparaîtront comme provenant d'un inconnu).

Réglages complémentaires recommandés :

```bash
# Nommer la branche par défaut "main" à chaque nouveau dépôt
git config --global init.defaultBranch main

# Utiliser VS Code comme éditeur par défaut de Git
git config --global core.editor "code --wait"

# Gérer proprement les fins de ligne sous Windows (évite des faux changements)
git config --global core.autocrlf true
```

**Vérification.** Affichez toute la configuration :

```bash
git config --global --list
```

Vous devez y retrouver `user.name`, `user.email`, `init.defaultbranch=main`, etc.

---

## 4. Régler VS Code pour Git

### 4.1 Le panneau Source Control

Dans la barre latérale gauche de VS Code, l'icône **Source Control** (trois points reliés par des lignes, raccourci `Ctrl+Shift+G`) est votre tableau de bord Git. C'est de là que vous ferez la plupart des opérations sans taper de commandes.

### 4.2 Extensions utiles (facultatif mais recommandé)

Ouvrez le panneau **Extensions** (`Ctrl+Shift+X`) et installez :

- **GitHub Pull Requests** (éditeur : GitHub) : gère l'authentification GitHub, les *pull requests* et les *issues* directement dans VS Code.
- **GitLens** (éditeur : GitKraken) : enrichit l'affichage de l'historique, montre qui a modifié chaque ligne (*blame*), etc. Très pédagogique pour comprendre Git.

### 4.3 Réglages de confort

Dans les paramètres (`Ctrl+,`), deux options rendent le quotidien plus fluide :

- **Git: Autofetch** → activez-la : VS Code récupère automatiquement les nouveautés du dépôt distant.
- **Git: Confirm Sync** → à votre goût (désactivée = moins de clics de confirmation).

---

## 5. S'authentifier auprès de GitHub depuis VS Code

Pour envoyer votre code vers GitHub, VS Code doit prouver que c'est bien vous. La méthode la plus simple (et recommandée pour débuter) passe par l'authentification intégrée.

1. En bas à gauche de VS Code, cliquez sur l'icône **Accounts** (silhouette).
2. Choisissez **Sign in with GitHub** (ou *Turn on Settings Sync…* puis GitHub).
3. VS Code ouvre votre navigateur sur une page GitHub : **connectez-vous** et cliquez sur **Authorize**.
4. Le navigateur vous propose de **rouvrir VS Code** : acceptez. Vous êtes connecté.

À partir de là, VS Code mémorise vos identifiants (via le *Windows Credential Manager*) et vous n'aurez plus à saisir de mot de passe à chaque `push`.

> **À savoir :** depuis 2021, GitHub **n'accepte plus le mot de passe du compte** en ligne de commande. Si un jour un terminal vous demande un mot de passe pour GitHub, il faut fournir un **jeton d'accès personnel** (*Personal Access Token*, voir §12.3), pas votre mot de passe habituel. L'authentification intégrée de VS Code gère cela pour vous automatiquement.

---

## 6. Initialiser un dépôt local

Il y a deux situations. Votre projet **Sankofa** (`C:\kham-kham`) sert d'exemple.

### Cas A — Vous partez d'un dossier déjà existant (votre cas)

1. Dans VS Code : **File → Open Folder…** et ouvrez `C:\kham-kham`.
2. Ouvrez le panneau **Source Control** (`Ctrl+Shift+G`).
3. Cliquez sur **Initialize Repository**.

Cela crée un sous-dossier caché `.git/` : votre dossier devient un dépôt Git. Équivalent en ligne de commande :

```bash
cd C:\kham-kham
git init
```

### Cas B — Vous récupérez un projet déjà sur GitHub

Utilisez **Clone** plutôt qu'`init` : `Ctrl+Shift+P` → *Git: Clone* → collez l'URL du dépôt. Ou en terminal :

```bash
git clone https://github.com/<votre-utilisateur>/<nom-du-repo>.git
```

**Vérification (les deux cas).** Le panneau Source Control affiche désormais la liste des fichiers, et la barre d'état en bas à gauche montre le nom de la branche (`main`).

---

## 7. Le fichier `.gitignore`

Certains fichiers ne doivent **jamais** être envoyés sur GitHub : dépendances volumineuses, fichiers générés, secrets. On les liste dans un fichier nommé `.gitignore` à la racine du projet.

Pour un projet **React + Vite + TypeScript** comme Sankofa, créez `C:\kham-kham\.gitignore` avec au minimum :

```gitignore
# Dépendances
node_modules/

# Build de production
dist/
dist-ssr/

# Logs
*.log
npm-debug.log*

# Variables d'environnement / secrets
.env
.env.local
.env.*.local

# Fichiers système et éditeur
.DS_Store
*.local
.vscode/*
!.vscode/extensions.json
```

> **Pourquoi c'est crucial :** `node_modules/` peut peser des centaines de Mo et se régénère avec `npm install` — inutile de le versionner. Et un fichier `.env` contient souvent des clés secrètes : le committer par erreur, c'est les publier au monde entier.

Si vous aviez déjà committé un fichier que vous voulez maintenant ignorer, ajoutez-le au `.gitignore` puis :

```bash
git rm -r --cached node_modules
```

---

## 8. Premier commit

Un **commit** est un instantané daté et signé de votre projet. On procède en deux temps : *stage* (choisir ce qu'on enregistre) puis *commit* (valider avec un message).

**Avec l'interface VS Code :**

1. Dans **Source Control**, chaque fichier modifié/nouveau apparaît sous *Changes*.
2. Survolez *Changes* et cliquez sur le **+** (*Stage All Changes*) pour tout ajouter. (Le **+** sur un seul fichier n'ajoute que celui-ci.)
3. En haut, dans la zone **Message**, écrivez un message clair, par exemple : `Initial commit — échafaudage Sankofa`.
4. Cliquez sur **✓ Commit** (ou `Ctrl+Enter`).

**Équivalent en ligne de commande :**

```bash
git add .
git commit -m "Initial commit — échafaudage Sankofa"
```

**Bonnes pratiques de message de commit :** court, à l'impératif, en décrivant *ce que fait* le commit (« Ajoute l'écran Profil », « Corrige le calcul de streak »), pas « modifs » ou « update ».

**Vérification.** L'historique se consulte avec `git log --oneline` en terminal, ou via GitLens dans VS Code.

---

## 9. Publier le projet sur GitHub

Votre historique est pour l'instant **uniquement local**. Il faut le pousser sur GitHub.

### Méthode simple — le bouton « Publish to Branch »

Après le premier commit, le panneau Source Control affiche un bouton **Publish Branch** (ou *Publish to GitHub*). En cliquant :

1. VS Code demande si le dépôt doit être **Public** ou **Private** (privé = visible par vous seul). Choisissez.
2. Il **crée automatiquement le dépôt sur GitHub** et **pousse** votre code. C'est tout.

Grâce à l'authentification faite au §5, aucun mot de passe n'est demandé.

### Méthode manuelle — en ligne de commande

Si vous préférez tout contrôler :

1. Sur **github.com**, cliquez sur **New repository**. Donnez un nom (ex. `sankofa`), choisissez Public/Private, **ne cochez pas** « Add a README » (le projet existe déjà), puis **Create**.
2. GitHub affiche les commandes à copier. Dans le terminal, à la racine du projet :

```bash
git remote add origin https://github.com/<votre-utilisateur>/sankofa.git
git branch -M main
git push -u origin main
```

- `git remote add origin …` relie votre dépôt local au dépôt distant (surnommé `origin`).
- `git push -u origin main` envoie la branche `main` et mémorise le lien (`-u`), pour que les prochains `git push` suffisent seuls.

**Vérification.** Rafraîchissez la page du dépôt sur GitHub : vos fichiers doivent y apparaître.

---

## 10. Le workflow quotidien

Une fois tout configuré, votre cycle de travail au jour le jour tient en quatre gestes.

**Récupérer les nouveautés (avant de commencer)**

```bash
git pull
```

Dans VS Code : bouton **Sync Changes** ou l'icône ↻ de la barre d'état. Indispensable si vous travaillez sur plusieurs machines ou à plusieurs.

**Enregistrer votre travail**

1. *Stage* les fichiers (§8).
2. *Commit* avec un message.

**Envoyer sur GitHub**

```bash
git push
```

Dans VS Code : **Sync Changes** (qui fait `pull` puis `push`), ou la petite flèche ↑ de la barre d'état indiquant le nombre de commits à envoyer.

**Travailler sur une branche (recommandé pour toute nouvelle fonctionnalité)**

Une branche isole un travail en cours sans toucher à `main` :

```bash
git checkout -b feature/nouvel-ecran   # crée et bascule sur la branche
# ... vous codez, commitez ...
git push -u origin feature/nouvel-ecran
```

Dans VS Code, cliquez sur le **nom de la branche** en bas à gauche pour en créer/changer. Une fois la fonctionnalité prête, vous ouvrez une **Pull Request** sur GitHub pour la fusionner dans `main`.

---

## 11. (Optionnel) Authentification par clé SSH

Alternative à HTTPS + jeton, appréciée des utilisateurs avancés : la clé SSH évite toute saisie d'identifiant.

1. Générez une paire de clés :

```bash
ssh-keygen -t ed25519 -C "papemamadoumendy191@gmail.com"
```

Appuyez sur Entrée pour accepter l'emplacement par défaut (`C:\Users\<vous>\.ssh\id_ed25519`) et, au choix, définissez une phrase secrète.

2. Copiez la **clé publique** dans le presse-papiers :

```bash
clip < ~/.ssh/id_ed25519.pub
```

3. Sur GitHub : **Settings → SSH and GPG keys → New SSH key**, collez, enregistrez.
4. Utilisez désormais l'URL SSH du dépôt (`git@github.com:...`) au lieu de l'URL HTTPS.

**Vérification :** `ssh -T git@github.com` doit répondre « Hi \<utilisateur\>! You've successfully authenticated ».

---

## 12. Dépannage des erreurs fréquentes

**12.1 `git` n'est pas reconnu comme commande.** Git n'est pas dans le `PATH`. Réinstallez-le en laissant l'option *Git from the command line…*, puis **redémarrez** le terminal et VS Code.

**12.2 VS Code affiche « Git not found ».** Même cause. Installez Git, redémarrez VS Code. Au besoin, indiquez le chemin dans les paramètres (`git.path`).

**12.3 GitHub refuse le mot de passe au `push`.** Normal : le mot de passe n'est plus accepté. Deux solutions : (a) laissez l'authentification intégrée de VS Code gérer (§5) ; (b) créez un **Personal Access Token** sur GitHub (*Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate*, portée `repo`) et collez-le **à la place du mot de passe** quand le terminal le demande.

**12.4 `failed to push … rejected (fetch first)`.** Le dépôt distant contient des commits que vous n'avez pas en local. Faites d'abord `git pull` (résolvez d'éventuels conflits), puis `git push`.

**12.5 Vos commits n'apparaissent pas sous votre nom sur GitHub.** L'e-mail de `git config user.email` ne correspond pas à celui du compte GitHub. Corrigez avec la commande du §3 (les commits futurs seront rattachés).

**12.6 `node_modules` a été poussé par erreur.** Ajoutez-le au `.gitignore`, puis `git rm -r --cached node_modules`, committez et poussez.

**12.7 Conflit de fusion (*merge conflict*).** VS Code surligne les zones en conflit avec des boutons *Accept Current / Incoming / Both*. Choisissez la bonne version, sauvegardez, puis committez la résolution.

---

## 13. Aide-mémoire des commandes

```bash
# Configuration (une seule fois)
git config --global user.name "Mamadou Mendy"
git config --global user.email "papemamadoumendy191@gmail.com"
git config --global init.defaultBranch main

# Démarrer un dépôt
git init                     # dossier existant
git clone <url>              # dossier depuis GitHub

# Cycle quotidien
git status                   # voir l'état des fichiers
git add .                    # stager tout
git commit -m "message"      # enregistrer
git pull                     # récupérer le distant
git push                     # envoyer le local

# Relier à GitHub (une fois)
git remote add origin <url>
git push -u origin main

# Branches
git checkout -b <branche>    # créer + basculer
git checkout main            # revenir sur main
git merge <branche>          # fusionner

# Historique
git log --oneline            # historique condensé
```

---

*Ordre conseillé pour la toute première fois : §2 (installer) → §3 (identité) → §5 (authentification GitHub) → §6 (init) → §7 (.gitignore) → §8 (premier commit) → §9 (publier). Ensuite, seul le §10 se répète chaque jour.*
