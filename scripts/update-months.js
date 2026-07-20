const fs = require('fs');
const path = require('path');

const months = {
    'february': 2, 'march': 3, 'april': 4, 'may': 5, 'june': 6,
    'july': 7, 'august': 8, 'september': 9, 'october': 10, 'november': 11, 'december': 12
};

const monthNames = {
    'february': 'February', 'march': 'March', 'april': 'April', 'may': 'May', 'june': 'June',
    'july': 'July', 'august': 'August', 'september': 'September', 'october': 'October', 'november': 'November', 'december': 'December'
};

const baseDir = path.join(__dirname, '..', 'pages', 'novena', 'monthly');

// Keep january as reference
Object.entries(months).forEach(([file, num]) => {
    const filePath = path.join(baseDir, file + '.html');
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        // Update month number in JS
        content = content.replace(/MONTHLY_NOVENAS\[1\]/g, `MONTHLY_NOVENAS[${num}]`);
        // Update title
        content = content.replace(/<title>January Novenas/g, `<title>${monthNames[file]} Novenas`);
        // Update meta description
        content = content.replace(/Novenas for January/g, `Novenas for ${monthNames[file]}`);
        // Update h1
        content = content.replace(/<h1>January Novenas<\/h1>/g, `<h1>${monthNames[file]} Novenas</h1>`);
        // Update breadcrumb
        content = content.replace(/<span>January<\/span>/g, `<span>${monthNames[file]}</span>`);
        // Update description
        content = content.replace(/the month of January/g, `the month of ${monthNames[file]}`);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${file}.html`);
    }
});
console.log('All monthly pages updated!');