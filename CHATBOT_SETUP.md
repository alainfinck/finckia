# Configuration du Chatbot IA

## Configuration de la clé API Mistral

Pour que le chatbot IA fonctionne, vous devez configurer votre clé API Mistral :

1. Créez un fichier `.env.local` à la racine du projet
2. Ajoutez votre clé API Mistral :

```
MISTRAL_API_KEY=votre_cle_api_mistral_ici
```

## Obtention d'une clé API Mistral

1. Rendez-vous sur [https://console.mistral.ai/](https://console.mistral.ai/)
2. Créez un compte ou connectez-vous
3. Allez dans la section "API Keys"
4. Créez une nouvelle clé API
5. Copiez la clé et ajoutez-la dans votre fichier `.env.local`

## Fonctionnalités du Chatbot

- Interface moderne et responsive
- Réponses basées sur l'API Mistral Large
- Connaissance spécialisée sur les services Finckia
- Gestion des erreurs et fallback
- Animation de chargement
- Design cohérent avec le site

## Sécurité

- La clé API n'est jamais exposée côté client
- Toutes les requêtes passent par l'API route sécurisée
- Validation des entrées utilisateur
- Gestion d'erreur robuste


