const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;

// Thiết lập kết nối tới PostgreSQL
const pool = new Pool({
  user: 'yourusername',
  host: 'localhost',
  database: 'testDemo',
  password: '123456',
  port: 5432,
});

// Truy vấn dữ liệu từ PostgreSQL
async function getDealsStatus() {
  const client = await pool.connect();
  try {
    const res = await client.query('SELECT name, last_contacted, sales, status, value FROM sales_data');
    return res.rows;
  } finally {
    client.release();
  }
}

// Route chính để hiển thị dữ liệu
app.get('/', async (req, res) => {
  try {
    const dealsStatus = await getDealsStatus();
    res.render('DealsStatus', { data: { dealsStatus } });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
