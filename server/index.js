import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use((req, res) => {
  res.json({
    status: 400,
    message: 'Your request could not be processed. Please try again.'
  });
});

app.listen(PORT, () => {
  console.log(
    `Listening on port ${PORT}. Visit http://localhost:${PORT}/ in ssssyour browser.`
  );
});
