var connection = require("../connection");

  function Todo() {
  this.get = res => {
    connection.acquire((err, con) => {
      con.query("select * from user", (err, results) => {
        //let json=JSON.parse(results)
        console.log('hello',(results))
        con.release();
        return res.send({ error: false, data:(results) , message: 'users list success.' });
      });
    });
  };
  this.read = (id, res) =>{
    if (!id) {
      return res.status(400).send({ error: true, message: 'Please provide user_id' });
     }
    
    //
    connection.acquire( (err, con) =>{
      con.query('select * from user where id=?', id,  (err, result) =>{
        con.release();
        res.send(result);
      });
    });
  };
  this.create =  (data, res) =>{
    if (!data) {
      return res.status(400).send({ error:true, message: 'Please provide user' });
    }
    connection.acquire( (err, con) =>{
      con.query('INSERT INTO user set ? ', [data], (err, results)=> {
      //con.query(`INSERT INTO user (email,pass)values('${data.email}','${data.pass}') `,  (err, results)=> {
        if(err)throw err;
        con.release();
        return res.send({ error: false, data: results, message: 'New user has been created successfully.'}) 
      });
    });
  };
  this.update =  (data, res)=> {
    let user_id = data.id;
  
    if (!user_id ) {
        return res.status(400).send({ error: user, message: 'Please provide user id' });
    }
    connection.acquire( (err, con) =>{
      con.query('update user set ? where id = ?', [data, data.id],  (err, results) =>{
        con.release();
        if (err) throw err;
        return res.send({ error: false, data: results, message: 'user has been updated successfully.' });
    
      });
    });
  };
 
  this.delete =  (id, res)=> { 
    if (!id) {
        return res.status(400).send({ error: true, message: 'Please provide user_id' });
    }
    connection.acquire( (err, con)=> {
      con.query('delete from user where id = ?', [id],  (err, results)=> {
        con.release(); 
        if (err) throw err;
        return res.send({ error: false, data: results, message: 'User has been updated successfully.' });
   
      });
    });
  };
}
module.exports = new Todo();
