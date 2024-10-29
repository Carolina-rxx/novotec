function convert() {
    const value = parseFloat(document.getElementById('value').value);
    const unitFrom = document.getElementById('unitFrom').value;
    let result;

    switch (unitFrom) {
        case 'cup':
            result = {
                tablespoons: value * 16,
                ml: value * 240,
                grams: value * 120, 
                kilos: value * 0.12 
            };
            break;
        case 'tablespoon':
            result = {
                cups: value / 16,
                ml: value * 15,
                grams: value * 8, 
                kilos: value * 0.008 
            };
            break;
        case 'ml':
            result = {
                cups: value / 240,
                tablespoons: value / 15,
                grams: value * 1, 
                kilos: value / 1000 
            };
            break;
        case 'g':
            result = {
                cups: value / 120, 
                tablespoons: value / 8, 
                ml: value / 1, 
                kilos: value / 1000
            };
            break;
        case 'kg':
            result = {
                cups: value * 8.33, 
                tablespoons: value * 66.67, 
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
