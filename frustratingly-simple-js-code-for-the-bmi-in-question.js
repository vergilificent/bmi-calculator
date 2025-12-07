const ageInput = document.getElementById("age-input");
const genderInputs = document.getElementsByName("gender");
const heightInput = document.getElementById("height-input");
const weightInput = document.getElementById("weight-input");
const button = document.getElementById("button");

const calculateBMI = (height, weight) => {
    return weight / (height ** 2);
}

function getSelectedGender () {
    for (let i = 0; i < genderInputs.length; i++) {
        if (genderInputs[i].checked) {
            return genderInputs[i].value;
        }
    }
    return null;
}

button.addEventListener("click", function (e) {
    e.preventDefault();

    const age = parseInt(ageInput.value);
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);
    const gender = getSelectedGender();

    if(!age || !height || !weight || !gender) {
        alert("Fill out all fields before submitting.");
        return;
    }

const BMI = calculateBMI(height, weight);
document.getElementById("result").innerText = `Your BMI is ${BMI.toFixed(2)}`;

});
