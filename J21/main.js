function ajax(url, callback){
    const aj = new XMLHttpRequest();
    aj.onload = () => {
        callback(aj.responseText);
    }

    aj.open('GET', url);

    aj.send();
}

const CSV_LINK = 'https://so2niko-students.github.io/FE22-1/data/POPPROJ_18102022173124332.csv';

ajax(CSV_LINK, parser);

function parser(d){

    const ticksReplacer = '"';
    const rowSeparator = '\n';
    const comaSeparator = ',';
    const dWithoutTicks = d.replaceAll(ticksReplacer, '');
    const data = dWithoutTicks.split(rowSeparator).map(r => r.split(comaSeparator));
    const names = data.shift();
    const formatData = data.map(el => {
        return names.reduce((acc, name, i) => {
            acc[name] = el[i];
            return acc;
        }, {});
    });

    console.log(formatData);
 
}

document.body.innerHTML = '<table><tr><td>1</td></tr></table>'

