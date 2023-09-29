fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(data => handle(data))

function handle(inputData) {

    const headers = Object.keys(inputData.data[0]).toString();

    const main = inputData.data.map((item) => {
        return Object.values(item).toString();
    })

    const csv = [headers, ...main].join('\n');

    starCSVDownload(csv);
}    

 function starCSVDownload(input) {

    const blob = new Blob([input], { type: 'aplication/csv' });

    const url =  URL.createObjectURL(blob);
    
    document.getElementById('btn').addEventListener('click', () => {

        const a = document.createElement('a');
        a.download = 'test-csv.csv';
        a.href = url;
        a.style.display = 'none';
    
        document.body.appendChild(a);
    
        a.click();
    
        a.remove();
        URL.revokeObjectURL(url);


    })


 }   

