function index(req, res) {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM person', (err, person) => {
      if(err) {
        res.json(err);
      }
      res.render('person/index', { person });
    });
  });
}

function create(req, res) {

  res.render('person/create');
}

function store(req, res) {
  const data = req.body;

  req.getConnection((err, conn) => {
    conn.query('INSERT INTO person SET ?', [data], (err, rows) => {
      res.redirect('/person');
    });
  });
}

function destroy(req, res) {
  const id = req.body.id;

  req.getConnection((err, conn) => {
    conn.query('DELETE FROM person WHERE id = ?', [id], (err, rows) => {
      res.redirect('/person');
    });
  })
}

function edit(req, res) {
  const id = req.params.id;

  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM person WHERE id = ?', [id], (err, person) => {
      if(err) {
        res.json(err);
      }
      res.render('person/edit', { person });
    });
  });
}

function update(req, res) {
  const id = req.params.id;
  const data = req.body;

  req.getConnection((err, conn) => {
    conn.query('UPDATE person SET ? WHERE id = ?', [data, id], (err, rows) => {
      res.redirect('/person');
    });
  });
}


module.exports = {
  index: index,
  create: create,
  store: store,
  destroy: destroy,
  edit: edit,
  update: update,
}