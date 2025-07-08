
// AI Integration Utilities
// This file contains functions for integrating with various AI APIs

interface AIResponse {
  text: string;
  error?: string;
}

// Demo AI Response Generator (Replace with real API integration)
export const generateDemoResponse = async (message: string): Promise<AIResponse> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
  
  const responses = [
    "That's a fascinating question! Let me help you with that.",
    "I understand what you're asking. Here's my perspective...",
    "Great point! Based on my knowledge...",
    "Thanks for that question. Let me think about it...",
    "I'd be happy to help you explore that topic further."
  ];
  
  return {
    text: responses[Math.floor(Math.random() * responses.length)] + ` You mentioned: "${message}". Could you elaborate on what you'd like to know?`
  };
};

// OpenAI API Integration (Template - requires API key)
export const generateOpenAIResponse = async (
  message: string, 
  apiKey: string
): Promise<AIResponse> => {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful AI assistant created by Esther Nyambura Kariuki, a software engineer from Kenya.'
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 150,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    return {
      text: data.choices[0]?.message?.content || 'Sorry, I couldn\'t generate a response.'
    };
  } catch (error) {
    console.error('OpenAI API Error:', error);
    return {
      text: 'I apologize, but I\'m having trouble connecting to the AI service right now.',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};

// Hugging Face API Integration (Template - requires API key)
export const generateHuggingFaceResponse = async (
  message: string,
  apiKey: string
): Promise<AIResponse> => {
  try {
    const response = await fetch('https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: message,
        parameters: {
          max_length: 100,
          temperature: 0.7,
        }
      }),
    });

    if (!response.ok) {
      throw new Error(`Hugging Face API error: ${response.status}`);
    }

    const data = await response.json();
    return {
      text: data[0]?.generated_text || 'Sorry, I couldn\'t generate a response.'
    };
  } catch (error) {
    console.error('Hugging Face API Error:', error);
    return {
      text: 'I apologize, but I\'m having trouble connecting to the AI service right now.',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};

// Local Storage utilities for conversation history
export const saveConversation = (messages: any[]) => {
  try {
    localStorage.setItem('ai_chat_history', JSON.stringify(messages));
  } catch (error) {
    console.error('Error saving conversation:', error);
  }
};

export const loadConversation = () => {
  try {
    const saved = localStorage.getItem('ai_chat_history');
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error('Error loading conversation:', error);
    return [];
  }
};

export const clearConversation = () => {
  try {
    localStorage.removeItem('ai_chat_history');
  } catch (error) {
    console.error('Error clearing conversation:', error);
  }
};
