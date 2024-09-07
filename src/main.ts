import { extraLine, quitProgram, welcomeUser } from './functionFile';
const { input } = require('@inquirer/prompts')

welcomeUser()
const exitWords =["Quit", "q", "Q", "Ends"]

class shopItem {
    itemName: string;
    itemNumber: number;


constructor(itemName: string, itemNumber: number) {
    this.itemName = itemName;
    this.itemNumber = itemNumber;
}
}
const productArray: shopItem[]= [
    {
        itemName: 'Banana', itemNumber: 6,
    },
    {   
        itemName: 'Grapes', itemNumber: 34,
    },
    {   
        itemName: 'Avocado', itemNumber: 8,
    },
]
console.log(productArray)
extraLine()

async function getInput(){
    while(true){
        let itemQ = await input({ message: `What ite would you like to purchase today?`})
        if(exitWords.includes(itemQ)){
           quitProgram() 
           return;
        }
        let itemRequest = itemQ.split(" ")
        //check fucntion with console.log
        console.log(itemRequest)

        function inStock(itemIndex) {
            return itemIndex.itemName === itemRequest[0];
        }
        
        const x = productArray.findIndex(inStock)

        if (x <= -1){
            console.log(`this item isnot available - please reload the program`)
            continue;
        }

        if (itemRequest[1] <= productArray[x].itemNumber && itemRequest[1] > 0){
            console.log(`this itemis in stock`)
            extraLine()
            console.log(`there is ${productArray[x].itemNumber - itemRequest[1]} left in stock`)
        }else {
            console.log(`this quantaty is not available - please try again`)
            continue;
        }

        productArray[x].itemNumber = productArray[x].itemNumber - itemRequest[1];

        console.log(`Please find below our updated item list`)
        console.log(productArray)
        }
}
getInput()