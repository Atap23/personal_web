function soyMuyRecursivo(elArray, unObjeto) {
    var elObjeto = (unObjeto) ? unObjeto : {};
    var objetoAux = {}
    var raizAux = '';
    debugger;

    for (var x = 0; x < elArray.length; x++) {
        var valorSpliteado = elArray[x].split('/');

        if (valorSpliteado.length > 1) {

            raizAux = valorSpliteado.shift();
            if (!elObjeto[raizAux]) {
                elObjeto[raizAux] = {};
            }
            soyMuyRecursivo([valorSpliteado.join('/')], elObjeto[raizAux]);

        } else if (valorSpliteado.length === 1) {
            unObjeto[valorSpliteado[0]] = {};
            raizActual = valorSpliteado[0];
        }
    }

    return elObjeto;
}

var a = ["a", "a/b", "a/b/c", "a1", "a1/b1", "a1/b1/c1", "a2", "a2/b2"];
var b = '';
var c = {};

console.log(soyMuyRecursivo(a, c));