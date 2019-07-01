const db = require('../../db/index')
const sql = require('sql-template-strings')

module.exports = async (req, res) => {
  const [profile] = await db.query(sql`
    SELECT *
    FROM profiles
    WHERE id = ${req.query.id}
  `)
  console.log(profile);
  res.status(200).json({ profile })
}