import { openDb } from '../configDB.js'

export async function createTableIncome() {
  openDb().then(db => {
    db.exec(`
      CREATE TABLE IF NOT EXISTS Income (
        id INTEGER PRIMARY KEY, amount REAL,ncategoryId TEXT, date TEXT, notes TEXT
      )
    `)
  })
}
