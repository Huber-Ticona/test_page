/* var c = document.getElementById("slider");
var minPriceElement = document.getElementById("slider-min-price");
var maxPriceElement = document.getElementById("slider-max-price");
noUiSlider.create(c, {
    start: [300000, 1500000],
    connect: [false, true, false],
    range: {
        min: [0],
        max: [2000000],
    },
    // margin: 0, // MARGEN ENTRE AMBOS PUNTOS
    // step:10,   // PASOS
});
c.noUiSlider.on("update", function (values, handle) {
    var min = parseInt(values[0])
        .toLocaleString(undefined, {
            useGrouping: true,
        })
        .replace(/,/g, ".");
    var max = parseInt(values[1])
        .toLocaleString(undefined, {
            useGrouping: true,
        })
        .replace(/,/g, ".");
    minPriceElement.textContent = "$" + min;
    maxPriceElement.textContent = "$" + max;
}); */
/* var f = [0, 0];
var g = [0, 0];
$(document).ready(function () {
    if ($("#input-slider-range-md")[0]) {
        var c = document.getElementById("input-slider-range-md"),
            d = document.getElementById("input-slider-range-md-value-low"),
            e = document.getElementById("input-slider-range-md-value-high");
        f = [d, e];
        noUiSlider.create(c, {
            start: [
                parseInt(d.getAttribute("data-range-value-low")),
                parseInt(e.getAttribute("data-range-value-high")),
            ],
            connect: !0,
            range: {
                min: parseInt(c.getAttribute("data-range-value-min")),
                max: parseInt(c.getAttribute("data-range-value-max")),
            },
        }),
            c.noUiSlider.on("update", function (a, b) {
                //SINCRONIZA SLIDER MD y LG
                console.log("SLIDER MD: ", a, b);
                $("#input-slider-range-md-min").val(a);
                $("#input-slider-range-md-max").val(b);
                g[b].textContent = a[b];
                f[b].textContent = a[b];
            });
    } */
var sliders = document.getElementsByClassName("input-slider-range");
var sliders_low = document.getElementsByClassName(
    "input-slider-range-value-low"
);
var sliders_high = document.getElementsByClassName(
    "input-slider-range-value-high"
);

var range_spans_low_high = [];

for (let i = 0; i < sliders.length; i++) {
    var slider = sliders[i];
    var minPriceElement = sliders_low[i];
    var maxPriceElement = sliders_high[i];

    var span_min_max = [minPriceElement, maxPriceElement];

    range_spans_low_high.push(span_min_max);

    noUiSlider.create(slider, {
        start: [
            parseInt(span_min_max[0].getAttribute("data-range-value-low")),
            parseInt(span_min_max[1].getAttribute("data-range-value-high")),
        ],
        connect: true,
        range: {
            min: parseInt(slider.getAttribute("data-range-value-min")),
            max: parseInt(slider.getAttribute("data-range-value-max")),
        },
    });

    slider.noUiSlider.on("update", function (values, handle) {
        console.log("i: ", i);
        console.log("range_spans_low_high:", range_spans_low_high);
        console.log("handle:", handle);
        var min = parseInt(values[0]);
        var max = parseInt(values[1]);
        let aux = range_spans_low_high[i];
        console.log("aux", aux);
        aux[handle].textContent = values[handle];
    });
}

// Si se especificó el otro slider, actualiza sus valores
console.log("----------------------");

const elements = document.getElementsByClassName("test");

for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = "Hola";
}

//
