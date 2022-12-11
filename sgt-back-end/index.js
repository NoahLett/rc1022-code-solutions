const pg = require('pg');
const express = require('express');
const app = express();
app.use(express.json());

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res, next) => {
  const sql = `
      select *
        from "grades"
    `;
  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.status(200).json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred in our server.' });
    });
});

app.post('/api/grades', (req, res, next) => {
  const obj = req.body;
  const scoreFigure = Number(req.body.score);
  if (!Object.hasOwn(obj, 'name') || !Object.hasOwn(obj, 'course') || !Object.hasOwn(obj, 'score')) {
    res.status(400).json({ error: 'Please make sure your request includes the name, course, and score properties.' });
    // eslint-disable-next-line no-useless-return
    return;
  } else if (!Number.isInteger(scoreFigure) || scoreFigure < 0 || scoreFigure > 100) {
    res.status(400).json({ error: 'The score value is invalid. Please use a whole number between 0 and 100.' });
    // eslint-disable-next-line no-useless-return
    return;
  } else {
    const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *
    `;
    const params = [obj.name, obj.course, scoreFigure];
    db.query(sql, params)
      .then(result => {
        const grade = result.rows[0];
        res.status(201).json(grade);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred in our server.' });
        // eslint-disable-next-line no-useless-return
        return;
      });
  }
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const obj = req.body;
  const gradeId = Number(req.params.gradeId);
  const scoreFigure = Number(req.body.score);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: 'The "gradeId" must be a positive integer.' });
    // eslint-disable-next-line no-useless-return
    return;
  } else if (!Object.hasOwn(obj, 'name') || !Object.hasOwn(obj, 'course') || !Object.hasOwn(obj, 'score')) {
    res.status(400).json({ error: 'Please ensure your replacement grade includes a name, course, and score property with legitimate values.' });
    // eslint-disable-next-line no-useless-return
    return;
  } else if (!Number.isInteger(scoreFigure) || scoreFigure < 0 || scoreFigure > 100) {
    res.status(400).json({ error: 'The score value is invalid.Please use a whole number between 0 and 100.' });
    // eslint-disable-next-line no-useless-return
    return;
  } else {
    const sql = `
      update "grades"
        set "name" = $2,
            "course" = $3,
            "score" = $4
        where "gradeId" = $1
      returning *
      `;
    const params = [gradeId, obj.name, obj.course, scoreFigure];
    db.query(sql, params)
      .then(result => {
        const grade = result.rows[0];
        if (!grade) {
          res.status(404).json({ error: 'The server cannot find a grade with that "gradeId".' });
          // eslint-disable-next-line no-useless-return
          return;
        } else {
          res.status(200).json(grade);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred in our server.' });
        // eslint-disable-next-line no-useless-return
        return;
      });
  }
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: 'The "gradeId" must be a positive integer.' });
    // eslint-disable-next-line no-useless-return
    return;
  } else {
    const sql = `
      delete
        from "grades"
        where "gradeId" = $1
      returning *
    `;
    const params = [gradeId];
    db.query(sql, params)
      .then(result => {
        const grade = result.rows[0];
        if (!grade) {
          res.status(404).json({ error: 'The server cannot find a grade with that gradeId.' });
          // eslint-disable-next-line no-useless-return
          return;
        } else {
          res.sendStatus(204);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred in our server.' });
      });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000.');
});
