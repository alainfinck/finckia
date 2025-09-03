// API endpoint pour le chatbot Mistral
export async function GET() {
  // Test de diagnostic
  const MISTRAL_API_KEY = process.env.MISTRAL_API_KEY || import.meta.env.MISTRAL_API_KEY;
  
  console.log('GET /api/chat - Diagnostic');
  console.log('MISTRAL_API_KEY exists:', !!MISTRAL_API_KEY);
  console.log('MISTRAL_API_KEY length:', MISTRAL_API_KEY ? MISTRAL_API_KEY.length : 0);
  
  return new Response(JSON.stringify({ 
    status: 'API accessible',
    hasApiKey: !!MISTRAL_API_KEY,
    apiKeyLength: MISTRAL_API_KEY ? MISTRAL_API_KEY.length : 0,
    env: process.env.NODE_ENV,
    processEnv: !!process.env.MISTRAL_API_KEY,
    importMetaEnv: !!import.meta.env.MISTRAL_API_KEY
  }), { 
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function POST({ request }) {
  try {
    console.log('POST /api/chat - Début de la requête');
    
    const { message, systemPrompt } = await request.json();
    console.log('Message reçu:', message);
    console.log('System prompt:', systemPrompt);
    
    // Récupérer la clé API depuis les variables d'environnement
    const MISTRAL_API_KEY = process.env.MISTRAL_API_KEY || import.meta.env.MISTRAL_API_KEY;
    console.log('MISTRAL_API_KEY exists:', !!MISTRAL_API_KEY);
    
    if (!MISTRAL_API_KEY) {
      console.log('Erreur: Clé API Mistral non configurée');
      return new Response(JSON.stringify({ 
        error: 'Clé API Mistral non configurée' 
      }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    console.log('Appel à l\'API Mistral...');
    
    // Appel à l'API Mistral
    const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${MISTRAL_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'mistral-large-latest',
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 1000,
        temperature: 0.7,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
      })
    });

    console.log('Réponse Mistral status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.log('Erreur API Mistral:', errorText);
      throw new Error(`Erreur API Mistral: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log('Données Mistral reçues:', !!data);
    
    const aiResponse = data.choices[0]?.message?.content || 'Désolé, je n\'ai pas pu générer de réponse.';
    console.log('Réponse générée:', aiResponse.substring(0, 100) + '...');

    return new Response(JSON.stringify({ 
      response: aiResponse 
    }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Erreur chatbot API:', error);
    
    return new Response(JSON.stringify({ 
      error: 'Erreur interne du serveur',
      details: error.message 
    }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}


