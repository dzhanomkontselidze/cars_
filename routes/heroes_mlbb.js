import express from 'express';
const router = express.Router();
import db from '../db/connector.js'

router.get('/', async function(req, res, next) {
  const heroes = await db.query('SELECT * FROM heroes');

  const rowheroes = heroes.rows.map(w => {
    return {
      ...w,
      created_at: w.created_at.toLocaleDateString()
    }
  })
  res.render('herose_table', { heroes: rowheroes || [] });
});

export default router;
