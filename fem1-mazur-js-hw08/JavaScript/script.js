const priceField = document.getElementById('priceField');

const emptyPriceField = () => {
    priceField.value = '';
    priceField.style.border = ('1px solid black');
    priceField.style.color = ('black');
};

const correctPriceAnswer = (price) => {

    let div = document.getElementById("correctPriceAnswer");
    let span = document.createElement("span");
    priceField.style.color = ('limegreen');

    if (div.innerText === '') {

        document.body.insertBefore(div, priceField);
        div.appendChild(span);
        span.innerText = `Price is $ ${Number(price)}`;
        span.style.marginRight = (`10px`);

        let button = document.createElement("button");
        div.appendChild(button);
        button.innerText = (`X`);
        button.id = ('buttonX');
    } else {
        div.innerText = '';
        correctPriceAnswer(price);
    }

    document.getElementById('buttonX').addEventListener("click", () => {
        div.innerText = '';
        emptyPriceField();
    });
};

const wrongPriceAnswer = () => {

    let span = document.createElement('span');

    span.innerText = (`Please enter correct price`);
    span.style.display = 'block';
    document.body.insertBefore(span, priceField.firstChild);
    priceField.style.border = (`2px solid red`);
    priceField.style.color = ('black');

    priceField.addEventListener("focus", () => {
        span.remove();
        priceField.style.border = (`2px solid limegreen`)
    });
};

const priceAnswer = (price) => {
    price = Number(priceField.value);
    if (price > 0) {
        correctPriceAnswer(price);
    } else if (price == '') {
        emptyPriceField ();
    } else {
        wrongPriceAnswer();
    }
};

priceField.addEventListener("focus", () => priceField.style.border = ('2px solid limegreen'));
priceField.addEventListener("blur", priceAnswer);
