function convert() {
    const value = parseFloat(document.getElementById('value').value);
    const unitFrom = document.getElementById('unitFrom').value;
    let result;

    switch (unitFrom) {
        case 'cup':
            result = {
                tablespoons: value * 16,
                ml: value * 240,
                grams: value * 120, // Exemplo, ajuste conforme necessário
                kilos: value * 0.12  // Exemplo, ajuste conforme necessário
            };
            break;
        case 'tablespoon':
            result = {
                cups: value / 16,
                ml: value * 15,
                grams: value * 8, // Exemplo, ajuste conforme necessário
                kilos: value * 0.008 // Exemplo, ajuste conforme necessário
            };
            break;
        case 'ml':
            result = {
                cups: value / 240,
                tablespoons: value / 15,
                grams: value * 1, // Exemplo, ajuste conforme necessário
                kilos: value / 1000 // Exemplo, ajuste conforme necessário
            };
            break;
        case 'grams':
            result = {
                cups: value / 120, // Exemplo, ajuste conforme necessário
                tablespoons: value / 8, // Exemplo, ajuste conforme necessário
                ml: value / 1, // Exemplo, ajuste conforme necessário
                kilos: value / 1000
            };
            break;
        case 'kilos':
            result = {
                cups: value * 8.33, // Exemplo, ajuste conforme necessário
                tablespoons: value * 66.67, // Exemplo, ajuste conforme necessário
                ml: value * 1000 // Exemplo, ajuste conforme necessário
            };
            break;
        default:
            result = {};
    }

    document.getElementById('result').innerHTML = `
        ${value} ${unitFrom === 'cup' ? 'xícaras' : unitFrom === 'tablespoon' ? 'colheres de sopa' : unitFrom === 'grams' ? 'gramas' : unitFrom === 'kilos' ? 'quilos' : 'mililitros'} =
        ${result.cups ? result.cups.toFixed(2) + ' xícaras' : ''} 
        ${result.tablespoons ? result.tablespoons.toFixed(2) + ' colheres de sopa' : ''} 
        ${result.ml ? result.ml.toFixed(2) + ' mililitros' : ''} 
        ${result.grams ? result.grams.toFixed(2) + ' gramas' : ''} 
        ${result.kilos ? result.kilos.toFixed(2) + ' quilos' : ''}
    `;
}
