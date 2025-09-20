# ChefBot ChefBot — AI Recipe Generator
ChefBot is a lightweight React web app that turns your leftover ingredients into complete recipes. Enter 4 or more ingredients, and the app uses a Mistral instruction-tuned model (served via Hugging Face Inference Endpoints) to generate a step-by-step recipe with title, servings, cook time, instructions, and helpful tips.

## Features
### Ingredient-to-Recipe Generation:
Type at least 4 ingredients and get a coherent, cooking-ready recipe.

### Model-powered creativity: 
Uses a Mistral-based generative model via Hugging Face (e.g., mistralai/Mistral-7B-Instruct or equivalent endpoint).

## How It Works
#### User enters ≥4 ingredients (e.g., “eggs, flour, sugar, butter”) and optionally tags (“cake”, “vegan”, etc.).
#### Frontend sends a prompt to your Hugging Face Inference Endpoint with the selected Mistral model.
#### The model returns structured text; the app formats it into a recipe card (title, yield, time, ingredients, steps, tips).
#### Users can copy, save, or regenerate variations.


## 🚀 Getting Started
##### npm install
##### npm run dev


## Preview ChefBot AI app
![image alt](https://github.com/LeartIstrefaj/ChefBot/blob/588587e4afbd612799e83110d750ed44afc6c2f0/img1.png)
![image alt](https://github.com/LeartIstrefaj/ChefBot/blob/588587e4afbd612799e83110d750ed44afc6c2f0/img2.png)

