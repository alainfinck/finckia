# Finckia - Chatbot IA

## 🚀 Installation et Configuration

### 1. Installation des dépendances
```bash
npm install
```

### 2. Configuration de la clé API Mistral

Créez un fichier `.env.local` à la racine du projet et ajoutez votre clé API Mistral :

```env
MISTRAL_API_KEY=votre_cle_api_mistral_ici
```

### 3. Obtention d'une clé API Mistral

1. Rendez-vous sur [https://console.mistral.ai/](https://console.mistral.ai/)
2. Créez un compte ou connectez-vous
3. Allez dans la section "API Keys"
4. Créez une nouvelle clé API
5. Copiez la clé et ajoutez-la dans votre fichier `.env.local`

## 🎯 Fonctionnalités du Chatbot

- **Interface moderne** : Design cohérent avec le site Finckia
- **Responsive** : Fonctionne sur tous les appareils
- **IA spécialisée** : Connaissance approfondie des services Finckia
- **Réponses intelligentes** : Basées sur l'API Mistral Large
- **Gestion d'erreurs** : Fallback en cas de problème technique
- **Animation de chargement** : Feedback visuel pendant les requêtes

## 🛠️ Technologies utilisées

- **Frontend** : Astro, Tailwind CSS, JavaScript vanilla
- **Backend** : API routes Astro
- **IA** : API Mistral Large
- **Serveur** : Node.js avec adaptateur Astro

## 📱 Utilisation

1. Le chatbot apparaît en bas à droite de la page d'accueil
2. Cliquez sur l'icône de chat pour l'ouvrir
3. Posez vos questions sur les services Finckia
4. L'IA répondra avec des informations spécialisées

## 🔧 Développement

### Mode développement
```bash
npm run dev
```

### Build de production
```bash
npm run build
```

### Preview de production
```bash
npm run preview
```

## 🔒 Sécurité

- La clé API n'est jamais exposée côté client
- Toutes les requêtes passent par l'API route sécurisée
- Validation des entrées utilisateur
- Gestion d'erreur robuste

## 📝 Questions fréquentes

Le chatbot peut répondre aux questions sur :
- Services de développement SaaS
- Intelligence artificielle et machine learning
- Consulting et formation
- Technologies utilisées (Django, Python, etc.)
- Processus de développement
- Tarifs et devis

## 🎨 Personnalisation

Le chatbot est entièrement personnalisable :
- Couleurs et design dans `src/components/Chatbot.astro`
- Logique métier dans le script JavaScript
- Prompt système dans l'API route
- Messages de bienvenue et d'erreur



