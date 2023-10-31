/* 
    JS is single-threaded (runs on a main thread)

    over a network
    buffer, ex email (SMTP)
    database
    cron jobs (in node)
    file system
    user input

    solution 1: callback
    cons: callback hell

    solution 2: promises
    states: 
        -pending
        -fulfilled
            -resolved
            -rejected
    cons: readability, pyramid of doom 

    solution 3: async/await
    

*/
/* 
new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            throw Error
            resolve("promise good")
        } catch (error) {
            reject("no good")
        }
    }, 3000)
    
})
.then((message) => console.log(message))
.catch((error) => console.log(error)) */


/* function myPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve("something good")
            } catch (error) {
                reject("something bad")
            }
        }, 2000)
        
    })
} */
 

function myPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            try {
                throw "Something bad"
                resolve("something good")
            } catch (error) {
                reject(error)
                
            }
           
        }, 2000)
        
    })
} 

myPromise()
.then((message) => console.log(message))
.catch((message) => console.log(message))

function myFetch(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve({
                    json: () =>  new Promise((resolve, reject) => resolve({data: "Cat noise"}))
                })
                
            } catch (error) {
                reject({data: "error"})
            }

        }, 2000)

    })
}

myFetch()
.then((response) => response.json())
.then((result) => console.log(result))
.catch((response) => console.log(response))

async function main(){

    const response = await myFetch()
    const result = await response.json()
    console.log(result)
}

(async function IIFE(){
    try {
        const result = await myPromise()
        console.log(result)
    } catch (error) {
        console.log(error)
    }
})()



main()

async function handleAllPromises(){
    const results = await Promise.all([myPromise, myFetch])
    console.log(results)
}

handleAllPromises()