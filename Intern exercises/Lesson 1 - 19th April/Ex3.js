const Ex3 = (n) => {
    if (n <= 10 && n >= 5){
        let i = 10
        const interval = setInterval(() => {
            console.log(i)
            i--
        },1000)
        setTimeout(()=> {
            clearInterval(interval)
            console.log("Happy new year")
        }, 12000)
    }else {
        console.error("Error")
    }
}

Ex3(5)