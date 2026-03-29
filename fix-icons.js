import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function walk(dir, callback) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walk(filePath, callback);
    } else if (filePath.endsWith('.tsx')) {
      callback(filePath);
    }
  }
}

walk(path.join(__dirname, 'src'), (file) => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('iconify-icon')) {
    // Replace <iconify-icon => <Icon
    content = content.replace(/<iconify-icon/g, '<Icon');
    content = content.replace(/<\/iconify-icon>/g, '</Icon>');
    content = content.replace(/class=/g, 'className=');
    content = content.replace(/ \/\/\s*@ts-ignore/g, '');
    content = content.replace(/{\/\*\s*@ts-ignore\s*\*\/}/g, '');
    
    if (!content.includes("@iconify/react")) {
       const importStatement = "import { Icon } from '@iconify/react';\n";
       if (content.includes("'use client';")) {
          content = content.replace("'use client';", "'use client';\n" + importStatement);
       } else {
          content = importStatement + content;
       }
    }
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
