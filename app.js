let btn = document.querySelector(".joke-btn");
let jokePera = document.querySelector(".joke");
let URL = "https://icanhazdadjoke.com/";

const fetchData = () => {
    fetch(URL , {
        headers:{
            Accept: "application/json",
        }
    }).then((response) => {
        let data = response.json();
        return data;
    }).then((newData) => {
        jokePera.innerText = newData.joke;
    }).catch((error) => {
        jokePera.innerText = error;
    });
};

// fetchData();

// async / await

const fetchData2 = async () => {
    try {
        let response = await fetch(URL , {
            headers:{
                Accept: "application/json",
            },
        });
        let data = await response.json();
        jokePera.innerText = data.joke;    
    } catch (error) {
        jokePera.innerText = error;    
    }
    
};

fetchData2();

btn.addEventListener("click" , fetchData2);