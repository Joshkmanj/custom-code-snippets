//------------- Example post route for an async money transfer ---------------
// Using async can be pretty helpful, it's usually paired with 'await's inside the function.
router.post('/', async (req,res) => {
  const personOneId = req.body.personOneId; // id of who it's going to
  const personTwoId = req.body.personTwoId;  // id of who it's coming from
  const transactionAmount = req.body.transactionAmount;  // transaction amount

  // WE NEED TO USE THE SAME CONNECTION FOR ALL QUERIES!!!!
  const connection = await pool.connect(); // THIS ISN'T JUST AN INSTANCE, YOU'RE MAKING A CONNECTION THAT HAS TO BE RELEASED EVENTUALLY!!

  // This is going to be basic javascript 'try'/'catch'
  try{
    await connection.query('BEGIN'); // Make sure you start with a 'BEGIN'
    const sqlText = `INSERT INTO 'register' (acct_id, amount) VALUES (personOneId,personTwoId)`;
    
    // use negative in front of the amount for withdrawal.
    await connection.query(sqlText, [personTwoId, -transactionAmount]);
    
    // the deposit
    await connection.query(sqlText, [personOneId, transactionAmount]);

    // Lastly we need code that says 'commit'
    await connection.query('COMMIT');

    res.sendStatus(200)
  } catch(error) {
    await connection.query('ROLLBACK');
    console.log('transaction error! Rolling back!', error);
    res.sendStatus(500);
  } finally {
    // 'Finally' always runs, both after a succesful try, and after a catch
    // This will put the client connection back in the pool.
    // THIS IS VERY IMPORTANT, OTHERWISE YOU WON'T BE ABLE TO MAKE ANY MORE QUERIES!!
    connection.release(); /// YOU HAVE TO RELEASE AFTER YOU'VE CONNECTED
  }
})// END POST request