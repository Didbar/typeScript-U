class Account {
    nickname?: string

    constructor(public readonly id: number, public owner: string, private _balance: number) {}

    deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error('Invalid Amount')
        }
        this._balance += amount
    }

    get balance(): number {
        return this._balance
    }
}

class SeatAssignment {
    [seatNumber: string]: string
}

let account = new Account(1, 'David', 0)
account.deposit(10)
console.log(account instanceof Account)
console.log(account.balance)

let seats = new SeatAssignment()
seats.A1 = 'Kolia'
seats.A2 = 'David'
seats['Something fancy'] = 'some text'
console.log(seats)
