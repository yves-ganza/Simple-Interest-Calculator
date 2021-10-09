
function compute()
{
    const principal = document.getElementById("principal").value;

    if(principal < 1){
        alert('Please enter an amount greater than 0');
        document.getElementById("principal").focus();
        return
    }
    const rate = document.getElementById("rate").value;
    const years = document.getElementById("years").value;
    const interest = principal * years * rate/100;
    const year = new Date().getFullYear() + parseInt(years);
    document.getElementById("result").innerHTML = `
        If you deposit <span class="bg-yellow">${principal}</span>,<br/>
        at an interest rate of <span class="bg-yellow">${rate}%</span>.<br/>
        You will receive an amount of <span class="bg-yellow">${interest}</span>,<br/>
        in the year <span class="bg-yellow">${year}</span><br/>
    `

    document.getElementById("principal").focus();
}

const updateRate = (e) => {
    document.getElementById("rate_val").innerText = e.target.value + "%";
}

document.getElementById("rate").addEventListener('input', updateRate);
document.getElementById("rate").addEventListener('change', updateRate);
document.getElementById("compute-btn").addEventListener('click', compute);

          
