/// SO my menu is going to be a soda order for a restaruant
class Drink {
    constructor(brand, location) {
        this.brand = brand;
        this.location = location;
    }
    describe() {
        return `${this.brand} is bought from ${this.location}.`;
    }
}
class restaruant {
    constructor(name) {
        this.name = name;
        this.soda = [];
    }
    addDrink(drink) {
        if (drink instanceof drink) {
            this.drink.push(drink);
        } else {
            throw new Error(`You can only add instance of drink. Argument is not a drink: ${drink}`);
        }
    }
    describe() {
        return `${this.name} needs ${this.drink.length}.`;
    }
}

class menu {
    constructor() {
        this.restaruant = [];
        this.selectedRestaruant = null;
    }
    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createRestaraunt();
                    break;
                case '2':
                    this.viewRestaraunt();
                    break;
                case '3':
                    this.deleteRestaraunt();
                    break;
                case '4':
                    this.displayRestaraunts();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('goodbye!:)')
    }
    showMainMenuOptions() {
        return prompt(`
           0) Exit 
           1) create restaraunt 
           2) view restaraunt 
           3) delete restaraunt
           4) display all restaraunts    
        `);
    }

    showRestarauntMenuOptions(restarauntInfo) {
        return prompt(`
        0) back
        1) create drink
        2) delete drink
        ----------------
        ${restarauntInfo}
        `);

    }

    displayRestaraunts() {
        let restarauntString = '';
        for (let i = 0; i < this.restaruant.length; i++) {
            restarauntString += i + `)` +
                this.restaruant[i].name + '/n';
        }
        alert(restarauntString);
    }
    createRestaraunt() {
        let name = prompt('Enter name for new restaraunt:');
        this.restaruant.push(new restaruant(name));
    }
    viewRestaraunt() {
        let index = ('enter the index of the restaraunt you wish to view');
        if (index > -1 && index < this.restaruant.length) {
            this.selectedRestaruant = this.restaruant[index];
            let description = 'Restaraunt Name: ' + this.selectedRestaruant.name + '/n';

            for (let i = 0; i < this.selectedRestaruant.drink.lenght; i++) {
                description += i + `)` + this.selectedRestaruant.drink[i].name + '-' + this.selectedRestaruant.drink[i].location + '/n';
            }
            let selection = this.showRestarauntMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createDrink();
                    break;
                case '2':
                    this.deleteDrink();
            }
        }
    }
}

let menu = new Menu();
menu.start();
