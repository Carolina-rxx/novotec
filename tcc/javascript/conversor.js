function convert() {
    const value = parseFloat(document.getElementById('value').value);
    const unitFrom = document.getElementById('unitFrom').value;
    let result;

    switch (unitFrom) {
        case 'cup':
            result = {
                tablespoons: value * 16,
                ml: value * 240
            };
            break;
        case 'tablespoon':
            result = {
                cups: value / 16,
                ml: value * 15
            };
            break;
        case 'ml':
            result = {
                cups: value / 240,
                tablespoons: value / 15
            };
            break;
        default:
            result = {};
    }

    document.getElementById('result').innerHTML = `
        ${value} ${unitFrom === 'cup' ? 'xícaras' : unitFrom === 'tablespoon' ? 'colheres de sopa' : 'mililitros'} =
        ${result.cups ? result.cups.toFixed(2) + ' xícaras' : ''}
        ${result.tablespoons ? result.tablespoons.toFixed(2) + ' colheres de sopa' : ''}
        ${result.ml ? result.ml.toFixed(2) + ' mililitros' : ''}
    `;
}
