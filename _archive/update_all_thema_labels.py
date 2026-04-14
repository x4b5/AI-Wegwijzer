#!/usr/bin/env python3
"""
Script om alle thema labels toe te voegen aan begrippen.html
"""

import re

# Mapping van begrippen naar hoofdthema's
thema_mapping = {
    # B - Basis (Wat is AI? Basisbegrippen)
    'artificiele-intelligentie': 'B - Basis',
    'ai-model': 'B - Basis', 
    'ai-geletterdheid': 'B - Basis',
    'ai-boom': 'B - Basis',
    'ai-effect': 'B - Basis',
    'chatbot': 'B - Basis',
    'chatgpt': 'B - Basis',
    'prompt': 'B - Basis',
    'user-interface': 'B - Basis',
    'machine-learning': 'B - Basis',
    'data-gedreven': 'B - Basis',
    'regelgebaseerd': 'B - Basis',
    'generatieve-ai': 'B - Basis',
    'discriminatieve-ai': 'B - Basis',
    
    # C - Werking (Hoe leren machines?)
    'deep-learning': 'C - Werking',
    'neuraal-netwerk': 'C - Werking',
    'transformer-architectuur': 'C - Werking',
    'deterministisch': 'C - Werking',
    'probabilistisch': 'C - Werking',
    'gpt': 'C - Werking',
    'llm': 'C - Werking',
    'foundation-model': 'C - Werking',
    'rag': 'C - Werking',
    'prompt-engineering': 'C - Werking',
    'hallucineren': 'C - Werking',
    'inference': 'C - Werking',
    
    # D - Toepassen (Praktisch gebruik)
    'ai-agent': 'D - Toepassen',
    'ai-assistent': 'D - Toepassen',
    'api': 'D - Toepassen',
    'api-integration': 'D - Toepassen',
    'direct-integration': 'D - Toepassen',
    'cloud': 'D - Toepassen',
    'edge': 'D - Toepassen',
    'on-premises': 'D - Toepassen',
    'multimodal': 'D - Toepassen',
    'modaliteit': 'D - Toepassen',
    'real-time-info': 'D - Toepassen',
    'web-search': 'D - Toepassen',
    'customization': 'D - Toepassen',
    'flexibility': 'D - Toepassen',
    'cost-effective': 'D - Toepassen',
    'higher-costs': 'D - Toepassen',
    'experimental-platform': 'D - Toepassen',
    'multi-model-platform': 'D - Toepassen',
    'openai': 'D - Toepassen',
    'claude': 'D - Toepassen',
    'mistral': 'D - Toepassen',
    'gemini': 'D - Toepassen',
    'open-source-models': 'D - Toepassen',
    'file-analysis': 'D - Toepassen',
    'code-execution': 'D - Toepassen',
    'specialized-features': 'D - Toepassen',
    'simplicity': 'D - Toepassen',
    
    # E - Impact (Maatschappelijke gevolgen)
    'agi': 'E - Impact',
    'ai-bias': 'E - Impact',
    'ai-productiviteitsparadox': 'E - Impact',
    'immersive-interfaces': 'E - Impact',
    'virtual-reality': 'E - Impact',
    'augmented-reality': 'E - Impact',
    'mixed-reality': 'E - Impact',
    'brain-computer-interface': 'E - Impact',
    'conversational-user-interface': 'E - Impact',
    'eliza': 'E - Impact',
    'eliza-effect': 'E - Impact',
    'joseph-weizenbaum': 'E - Impact',
    'ghost-mode': 'E - Impact',
    'encryptie': 'E - Impact',
    'ponskaarten': 'E - Impact',
}

# Kleuren voor de thema's
thema_colors = {
    'B - Basis': {'bg': '#fef3c7', 'text': '#92400e'},  # Geel
    'C - Werking': {'bg': '#d1fae5', 'text': '#065f46'},  # Groen
    'D - Toepassen': {'bg': '#f0f9ff', 'text': '#0369a1'},  # Blauw
    'E - Impact': {'bg': '#e8f4fd', 'text': '#1e40af'},  # Donkerblauw
}

def generate_thema_label(thema):
    """Genereer HTML voor thema label"""
    colors = thema_colors[thema]
    return f'<span class="thema-label" style="background: {colors["bg"]}; color: {colors["text"]}; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem; margin-left: 8px; font-weight: 500;">{thema}</span>'

def update_begrippen_file():
    """Update het begrippen.html bestand met thema labels"""
    
    # Lees het bestand
    with open('artikelen/begrippen.html', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Zoek naar alle begrip blokken en voeg thema labels toe
    updated_count = 0
    
    for begrip_id, thema in thema_mapping.items():
        # Zoek naar het begrip blok
        pattern = rf'(<div class="content-block trivia" id="{re.escape(begrip_id)}".*?<div class="trivia-toggle" onclick="toggleTrivia\(this\)">\s*<strong>[^<]+</strong>\s*<span style="color: #666; font-size: 0\.9rem;">\(klik om te lezen\)</span>)(\s*<span class="trivia-toggle-icon">▶</span>)'
        
        # Controleer of er al een thema label is
        begrip_start = content.find(f'id="{begrip_id}"')
        if begrip_start != -1 and 'thema-label' not in content[begrip_start:begrip_start+2000]:
            # Vervang de pattern
            replacement = r'\1\n            ' + generate_thema_label(thema) + r'\2'
            new_content = re.sub(pattern, replacement, content, flags=re.DOTALL)
            
            if new_content != content:
                content = new_content
                updated_count += 1
                print(f"Updated: {begrip_id} -> {thema}")
    
    # Schrijf het bijgewerkte bestand terug
    with open('artikelen/begrippen.html', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"\nTotaal bijgewerkt: {updated_count} begrippen")

if __name__ == "__main__":
    update_begrippen_file()
