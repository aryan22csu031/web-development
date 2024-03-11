let buttons = document.querySelectorAll("button")
let inputHead = document.querySelector(".result h1");
let prevHead = document.querySelector(".result h3");
let a = "";
let b = "";
let c = " ";
let d = "";
function pressNum(num) {
    inputHead.innerHTML += num;
    if (c === " ") {
        a = a + num;
    } else {
        b = b + num;
    }
    return num;
}
function operator(opr) {
    inputHead.innerHTML += opr;
    c = opr;
    return opr;
}
function press1() {
    if (c === " ") {
        a = a + pressNum(1);
    } else {
        b = b + pressNum(1);
    }
}
function press2() {
    if (c === " ") {
        a = a + pressNum(2);
    } else {
        b = b + pressNum(2);
    }
}
function press3() {
    if (c === " ") {
        a = a + pressNum(3);
    } else {
        b = b + pressNum(3);
    }
}
function press4() {
    if (c === " ") {
        a = a + pressNum(4);
    } else {
        b = b + pressNum(4);
    }
}
function press5() {
    if (c === " ") {
        a = a + pressNum(5);
    } else {
        b = b + pressNum(5);
    }
}
function press6() {
    if (c === " ") {
        a = a + pressNum(6);
    } else {
        b = b + pressNum(6);
    }
}
function press7() {
    if (c === " ") {
        a = a + pressNum(7);
    } else {
        b = b + pressNum(7);
    }
}
function press8() {
    if (c === " ") {
        a = a + pressNum(8);
    } else {
        b = b + pressNum(8);
    }
}
function press9() {
    if (c === " ") {
        a = a + pressNum(9);
    } else {
        b = b + pressNum(9);
    }
}
function press0() {
    if (c === " ") {
        a = a + pressNum(0);
    } else {
        b = b + pressNum(0);
    }
}
function multiply() {
    operator("x");
    d = a;
    a = " ";
    a = d;
    console.log("b is " + b);
    console.log("a is" + a);
}
function divide() {
    operator("÷");
    d = a;
    a = " ";
    a = d;
}
function plus() {
    operator("+");
    d = a;
    a = " ";
    a = d;
}
function minus() {
    operator("-");
    d = a;
    a = " ";
    a = d;
}
function remainder() {
    operator("%");
    d = a;
    a = " ";
    a = d;
}
function logbase10() {
    operator("log(")
    d = a;
    a = " ";
    a = d;
}
function logbaseE() {
    operator("loge(")
    d = a;
    a = " ";
    a = d;
}
function eulerNum() {
    operator("e^")
    d = a;
    a = " ";
    a = d;
}
function sinh() {
    operator("sin(")
    d = a;
    a = " ";
    a = d;
}
function cosh() {
    operator("cos(")
    d = a;
    a = " ";
    a = d;
}
function tanh() {
    operator("tan(")
    d = a;
    a = " ";
    a = d;
}
function sqroot() {
    operator("(2)√")
    d = a;
    a = " ";
    a = d;
}
function cuberoot() {
    operator("(3)√")
    d = a;
    a = " ";
    a = d;
}
buttons[48].addEventListener("click", () => {
    switch (c) {
        case "÷":
            inputHead.innerHTML = parseInt(a) / parseInt(b);
            prevHead.innerHTML = `${a}÷${b}`;
            a = "";
            b = "";
            c = " ";
            break;
        case "-":
            inputHead.innerHTML = parseInt(a) - parseInt(b);
            prevHead.innerHTML = `${a}-${b}`;
            a = "";
            b = "";
            c = " ";
            break;
        case "+":
            inputHead.innerHTML = parseInt(a) + parseInt(b);
            prevHead.innerHTML = `${a}+${b}`;
            a = "";
            b = "";
            c = " ";
            break;
        case "x":
            inputHead.innerHTML = parseInt(a) * parseInt(b);
            prevHead.innerHTML = `${a}x${b}`;
            a = "";
            b = "";
            c = " ";
            break;
        case "%":
            inputHead.innerHTML = parseInt(a) % parseInt(b);
            prevHead.innerHTML = `${a}%${b}`;
            a = "";
            b = "";
            c = " ";
            break;
        case "log(":
            inputHead.innerHTML = Math.log10(parseInt(b));
            prevHead.innerHTML = `log(${b})`;
            a = "";
            b = "";
            c = " ";
            break;
        case "loge(":
            inputHead.innerHTML = Math.log(parseInt(b));
            prevHead.innerHTML = `loge(${b})`;
            a = "";
            b = "";
            c = " ";
            break;
        case "e^":
            inputHead.innerHTML = Math.exp(parseInt(b));
            prevHead.innerHTML = `e^${b}`;
            a = "";
            b = "";
            c = " ";
            break;
        case "sin(":
            inputHead.innerHTML = Math.sin(parseInt(b));
            prevHead.innerHTML = `sin(${b})`;
            a = "";
            b = "";
            c = " ";
            break;
        case "cos(":
            inputHead.innerHTML = Math.cos(parseInt(b));
            prevHead.innerHTML = `cos(${b})`;
            a = "";
            b = "";
            c = " ";
            break;
        case "tan(":
            inputHead.innerHTML = Math.tan(parseInt(b));
            prevHead.innerHTML = `tan(${b})`;
            a = "";
            b = "";
            c = " ";
            break;
        case "(2)√":
            inputHead.innerHTML = Math.sqrt(parseInt(b));
            prevHead.innerHTML = `√${b}`;
            a = "";
            b = "";
            c = " ";
            break;
        case "(3)√":
            inputHead.innerHTML = Math.cbrt(parseInt(b));
            prevHead.innerHTML = `(3)√${b}`;
            a = "";
            b = "";
            c = " ";
            break;
    }
})
buttons[6].addEventListener("click", () => {
    inputHead.innerHTML = " ";
    prevHead.innerHTML = " ";
    a = "";
    b = "";
    c = " ";
})
