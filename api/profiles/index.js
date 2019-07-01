const db = require('../../db/index')
const SQL = require('sql-template-strings')

module.exports = async (req, res) => {
  let page = parseInt(req.query.page) || 1
  const limit = parseInt(req.query.limit) || 9
  if (page < 1) page = 1
  const profiles = await db.query(SQL`
      SELECT *
      FROM profiles
      ORDER BY id
      LIMIT ${(page - 1) * limit}, ${limit}
    `)
  const count = await db.query(SQL`
      SELECT COUNT(*)
      AS profilesCount
      FROM profiles
    `)
  const { profilesCount } = count[0]
  const pageCount = Math.ceil(profilesCount / limit)
  res.status(200).json({ profiles, pageCount, page })
}
