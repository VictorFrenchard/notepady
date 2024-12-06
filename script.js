
let usd, eur, lsh, sub;
var plsh, slsh;
const flsh = 4.474;

function fetchData() {

    const url = "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL";

    fetch(url) 
        .then(response => response.json()) 
    
        .then(data => {
        
            usd = parseFloat(data.USDBRL.ask);
            eur = parseFloat(data.EURBRL.ask);
        
            updateValues();

            // --------------------- Date settings --------------------------

            const date = data.USDBRL.create_date;

            const current_date = new Date(date);

            const date_settings = {  
                day: 'numeric',
                month: 'short', 
                hour: 'numeric', 
                minute: 'numeric', 
                second: 'numeric', 
                hour12: false 
            };

            const styled_date = current_date.toLocaleString('pt-BR', date_settings); 
            document.getElementById("current_date").innerHTML = styled_date;

            //document.getElementById("ult_fecht").textContent = flsh;

            // ----------------------------------------------------------------------------------
        })

        .catch(error => { 
            console.error('Erro ao buscar os dados:', error); 
        });

}


function updateValues() { 
    
    sub = Math.abs(usd - eur); 
    lsh = (usd + eur) * sub;
    slsh = (lsh - flsh);
    calclsh = (slsh * 100) / flsh

    if (calclsh < 0) {
        document.getElementById("svgnm").classList.add("nmmh3");
        
        document.getElementById("pth1").classList.add("nshw");

        document.getElementById("pth2").classList.add("shw");

        document.getElementById("spnprct").classList.add("nwy-n");

        document.getElementById("spnnzq").classList.add("nz-n");

        document.getElementById("sign_nl").textContent = "";

    }

    else {
        document.getElementById("pth1").classList.add("shw");

        document.getElementById("pth2").classList.add("nshw");

    }

    acs = slsh.toFixed(3).replace('.', ',');
    document.getElementById("acsts").textContent = acs;

    plsh = calclsh.toFixed(3).replace('.', ',').replace('-', '');
    document.getElementById("perct").textContent = plsh;

    let styled_lsh = lsh.toFixed(3).replace('.', ','); 
    window.requestAnimationFrame(() => { 
        document.getElementById('lsh').textContent = styled_lsh; 
    });

    document.getElementById("altac").textContent = styled_lsh;

}

setInterval(fetchData, 5000);

fetchData();


