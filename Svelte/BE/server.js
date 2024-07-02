const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const pool = new Pool({
  user: 'yourusername',
  host: 'localhost',
  database: 'yourdatabase',
  password: 'yourpassword',
  port: 5432,
});

async function getDealsStatus() {
  const client = await pool.connect();
  try {
    const res = await client.query(`
      SELECT name, last_contacted, sales, status, value 
      FROM sales_data
    `);
    return res.rows;
  } finally {
    client.release();
  }
}

app.get('/api/dealsStatus', async (req, res) => {
  try {
    const dealsStatus = await getDealsStatus();
    res.json(dealsStatus);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
