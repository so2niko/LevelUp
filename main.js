const link = 'https://ip-api.com/json/?fields=61439';

fetch(link).then(r => r.json()).then(d => {
    console.log(d);
    document.body.innerHTML = `
    <div> IP - ${d.query}</div>
    <div> city - ${d.city}</div>
    <div> country - ${d.country}</div>
    <div> lat - ${d.lat}</div>
    <div> lon - ${d.lon}</div>`
});
