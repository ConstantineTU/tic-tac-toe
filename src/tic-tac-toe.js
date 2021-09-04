class TicTacToe {
    constructor() {
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ]
        this.currentPlayerSymbol = 'x'
        this.winner = null
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol
    }

    nextTurn(r, c) {
        let player = this.currentPlayerSymbol

        if (this.field[r][c] === null) {
            this.field[r][c] = player
            if (this.field[0][c] == player && this.field[1][c] == player && this.field[2][c] == player) {
                this.winner = player
            }
            if (this.field[r][0] == player && this.field[r][1] == player && this.field[r][2] == player) {
                this.winner = player
            }
            if ((this.field[0][0] == player && this.field[1][1] == player && this.field[2][2] == player) ||
                (this.field[2][0] == player && this.field[1][1] == player && this.field[0][2] == player)) {
                this.winner = player
            }
            if (this.field[2][0] == player && this.field[1][1] == player && this.field[0][2] == player) {
                this.winner = player
            }
            if (this.field[0][0] == player && this.field[1][1] == player && this.field[2][2] == player) {
                this.winner = player
            }
            if (this.currentPlayerSymbol == 'x') {
                this.currentPlayerSymbol = 'o'
            } else {
                this.currentPlayerSymbol = 'x'
            }
        }
    }

    isFinished() {
        if (this.winner || this.noMoreTurns()) {
            return true
        }
        return false

    }

    getWinner() {
        return this.winner
    }

    noMoreTurns() {
        let result = true
        for (let x in this.field) {
            for (let y in this.field[x]) {
                if (this.field[x][y] === null) {
                    result = false
                }
            }
        }
        return result
    }

    isDraw() {
        if (this.winner === null && this.noMoreTurns()) {
            return true
        } else {
            return false
        }
    }

    getFieldValue(r, c) {
        return this.field[r][c]
    }
}

module.exports = TicTacToe