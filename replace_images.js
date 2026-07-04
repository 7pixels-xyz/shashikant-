const fs = require('fs');
const path = require('path');

const localImages = [
    '/images/hero_interior.png',
    '/images/commercial_boutique.png',
    '/images/zen_bedroom.png',
    '/images/luxury_kitchen.png',
    '/images/spa_bathroom.png',
    '/images/minimalist_hallway.png'
];

let currentIndex = 0;

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let hasChanges = false;

            const regex = /https:\/\/images\.unsplash\.com\/[^"'\s\)\`\}]+/g;

            content = content.replace(regex, (match) => {
                hasChanges = true;
                const replacement = localImages[currentIndex % localImages.length];
                currentIndex++;
                return replacement;
            });

            if (hasChanges) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated images in ${fullPath}`);
            }
        }
    }
}

try {
    processDir(path.join(__dirname, 'app'));
    processDir(path.join(__dirname, 'components'));
    console.log("Image replacement sequence complete.");
} catch (e) {
    console.error(e);
}
