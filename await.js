console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie= async () =>{
    const promiseWifeBringingTicket = new Promise((resolve, reject)=> {
        setTimeout(()=> {
            resolve('person3: shows ticket');
        }, 3000)
    })
    
    const getPopcorn = new Promise ((resolve, reject)=> resolve('Gotten popcorn'))

    const getButter = new Promise ((resolve, reject)=> resolve('Gotten butter'))

    const getColdDrinks = new Promise((resolve, reject) => resolve('gotten cold drinks'))
    let ticket= await promiseWifeBringingTicket;

    console.log(`Wife: I have the ticket`)
    console.log(`husband: okay lets go in`)
    console.log(`Wife: no m hungry`)

    let popcorn= await getPopcorn;

    console.log(`husband: I have ${popcorn}`)
    console.log(`husband: lets go in`)
    console.log(`Wife: no i want butter in it`)

    let butter = await getButter;

    console.log(`husband: I have ${butter}`)
    console.log(`husband: lets go in`)
    console.log(`Wife: but I feel a little thirsty lets get cold drinks too`)

    let coldDrinks = await getColdDrinks;

    console.log(`husband: I have ${coldDrinks}`)
    console.log(`husband: do you want anything else honey`)
    console.log(`Wife: no lets go or we are gonna be late`)

    return ticket;


}

preMovie().then((m)=> console.log(m))

console.log('person4: shows ticket');
console.log('person5: shows ticket');