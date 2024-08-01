let total = 10; // globale scope
// 1 
let f = () => {
    let total=100
    [3, 4, 3].map((n) => {
         let x=100
        // total += n;
    });
}
// 2
console.log(f())
console.log(total)


// calc(3)

n=3: n > 100  false (calc (n*2) calc(6))
n=6: n > 100  false (calc (n*2) calc(12))
n=12: n > 100  false (calc (n*2) calc(24))
n=24: n > 100  false (calc (n*2) calc(48))
n=48: n > 100  false (calc (n*2) calc(96))
n=96: n > 100  false (calc (n*2) calc(192))
n=192: n > 100 true return 100