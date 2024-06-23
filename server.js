// Importiamo il modulo express
const express = require("express");

// Creiamo un'applicazione Express
const server = express();

// Definiamo la porta su cui il server ascolterà
const port = 3001;

// Creiamo un'istanza del router
const router = express.Router();

// Gestire le richieste GET a "/"
router.get("/", (req, res) => {
  // `req` rappresenta l'oggetto della richiesta HTTP che contiene informazioni inviate dal client
  // `res` rappresenta l'oggetto di risposta HTTP che usiamo per inviare dati di ritorno al client
  res.send("📥 GET richiesta alla root del router");
});

// Gestire le richieste GET a "/:id"
router.get("/:id", (req, res) => {
  // `req.params.id` contiene il valore dell'ID passato come parametro nell'URL
  const id = req.params.id;
  res.send(`📥 GET richiesta con ID: ${id}`);
});

// Gestire le richieste POST a "/"
router.post("/", (req, res) => {
  // `req.body` contiene i dati inviati nel corpo della richiesta POST, interpretati come JSON grazie a `express.json()`
  const data = req.body;
  res.send(`📤 POST inviata con dati: ${JSON.stringify(data)}`);
});

// Gestire le richieste PUT a "/:id"
router.put("/:id", (req, res) => {
  // `req.params.id` contiene il valore dell'ID passato come parametro nell'URL
  // `req.body` contiene i dati inviati nel corpo della richiesta PUT, interpretati come JSON grazie a `express.json()`
  const id = req.params.id;
  const data = req.body;
  res.send(`🧖‍♀️ PUT inviata con ID: ${id} e dati: ${JSON.stringify(data)}`);
});

// Gestire le richieste DELETE a "/:id"
router.delete("/:id", (req, res) => {
  // `req.params.id` contiene il valore dell'ID passato come parametro nell'URL
  const id = req.params.id;
  res.send(`🚧 DELETE inviata con ID: ${id}`);
});

// Usare il middleware express.json() per gestire i dati JSON
server.use(express.json());

// Collegare il router all'app principale
// L'endpoint principale a cui è collegato il router è "/",
// quindi tutte le rotte definite nel router saranno relative a "/"
server.use("/", router);

// Iniziamo il server e lo facciamo ascoltare sulla porta definita
server.listen(port, () => {
  console.log(`🚀 Server partito sulla porta: ${port}`);
});
