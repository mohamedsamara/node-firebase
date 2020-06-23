import 'dotenv/config';
import path from 'path';
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/api/test', (req, res) => {
  res.send('hello from test!!!');
});

app.use(express.static(path.resolve(__dirname, '../client')));
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/index.html'));
  });
}

app.use((req, res) => {
  res.json({
    status: 400,
    message: 'Your request could not be processed. Please try again.'
  });
});

app.listen(PORT, () => {
  console.log(
    `Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`
  );
});
