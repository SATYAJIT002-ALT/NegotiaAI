const fs = require('fs');
const path = require('path');

const directories = [
  'c:/Users/Satya/Downloads/NegotiaAI/frontend/src/pages',
  'c:/Users/Satya/Downloads/NegotiaAI/frontend/src/components'
];

const replaceMap = {
  // Backgrounds
  'bg-white': 'bg-[#0a0f0d]',
  'bg-slate-50': 'bg-[#0f1712]',
  'bg-slate-100': 'bg-[#131d17]',
  'bg-slate-200': 'bg-[#1a271f]',
  'hover:bg-slate-50': 'hover:bg-[#131d17]',
  'hover:bg-slate-100': 'hover:bg-[#1a271f]',
  'hover:bg-white': 'hover:bg-[#0f1712]',

  // Borders
  'border-slate-50': 'border-[#131d17]',
  'border-slate-100': 'border-[#1a271f]',
  'border-slate-200': 'border-[#22352a]',
  'border-slate-300': 'border-[#2a4234]',
  'border-white': 'border-[#0a0f0d]',
  'border-white/20': 'border-emerald-500/20',

  // Text colors
  'text-slate-900': 'text-emerald-50',
  'text-slate-800': 'text-emerald-100',
  'text-slate-700': 'text-emerald-200/80',
  'text-slate-600': 'text-emerald-300/70',
  'text-slate-500': 'text-emerald-400/60',
  'text-slate-400': 'text-emerald-500/50',
  'text-slate-300': 'text-emerald-600/40',
  'hover:text-slate-900': 'hover:text-emerald-50',
  
  // Specific dark elements (like dark buttons)
  'bg-slate-900': 'bg-emerald-600',
  'bg-slate-800': 'bg-emerald-700',
  'hover:bg-slate-800': 'hover:bg-emerald-500',
  'hover:bg-slate-900': 'hover:bg-emerald-600',
  'text-slate-900/80': 'text-emerald-50',
  
  // Mix-blend (important for dark mode product images)
  'mix-blend-multiply': 'mix-blend-screen',
};

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let original = content;
      
      for (const [key, value] of Object.entries(replaceMap)) {
        const regex = new RegExp(`(?<=[\\s"'\\\`])${key}(?=[\\s"'\\\`])`, 'g');
        content = content.replace(regex, value);
      }
      
      if (content !== original) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${file}`);
      }
    }
  }
}

for (const dir of directories) {
  processDirectory(dir);
}
console.log('Theme applied successfully.');
