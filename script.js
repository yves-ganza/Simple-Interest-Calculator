
function compute()
{
    const principal = document.getElementById("principal").value;
    const rate = document.getElementById("rate").value;
    const years = document.getElementById("years").value;
    const interest = principal * years * rate/100;
    const year = new Date().getFullYear() + parseInt(years);
    document.getElementById("result").innerText = `
        If you deposit ${principal},
        at an interest rate of ${rate}%.
        You will receive an amount of ${interest},
        in the year ${year}
    `

    document.getElementById("principal").focus = true;
}

const updateRate = (e) => {
    document.getElementById("rate_val").innerText = e.target.value + "%";
}

document.getElementById("rate").addEventListener('input', updateRate);
document.getElementById("rate").addEventListener('change', updateRate);
document.getElementById("compute-btn").addEventListener('click', compute);

          
