# Nexus Shopify AI

Nexus is a JARVIS-inspired Shopify AI assistant for monitoring store health, forecasting demand, and guiding actions from a cyber command-center interface.

## Features
- Real-time Shopify KPI dashboard
- AI-powered store assistant
- Inventory and revenue insights
- Action recommendations
- JARVIS-inspired interface

## Quick start

1. Install dependencies:
   npm install
2. Copy the example env file:
   cp .env.example .env
3. Add your OpenRouter API key in `.env` if you want live AI responses.
4. Run the app:
   npm run dev

## Scripts
- `npm run dev` — starts Express and Vite together
- `npm run build` — builds the frontend
- `npm run start` — runs the server only

## Notes
Use a free model from OpenRouter, for example:
`meta-llama/llama-3.1-8b-instruct:free`

This project is intentionally designed as a strong prototype foundation for a real Shopify companion app.
