//function runPythonScript() {
    // Get the path to the Python script 
    
//}

const form = document.querySelector("#hashForm");

async function sendData() {
    
    // Associate the FormData object with the form element 
    const formData = new FormData(form);

    try {
        const response = await fetch("file:///C:/Users/kacey/Documents/workspace/index.html", {
            method: "POST",
            body: formData,
        });
        console.log(await response.json());
    } catch (e) {
        console.error(e);
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    sendData();
})