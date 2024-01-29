function a() {
    console.log("Executando a()")
}

function b() {
    console.log("Executbndo b()")
}

function c() {
    console.log("Executcndo c()")
    a()
    b()
}

c()