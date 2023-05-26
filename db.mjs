import mysql from "mysql2";

var connection = mysql.createConnection({
    host: "localhost",
    port:3306,
    user: "root",
    password: "root",
    database: "urgeapp",
  });



/*TABLAS*/

    var sql = `CREATE TABLE IF NOT EXISTS
            users(
                id INT, 
                name VARCHAR(255), 
                email VARCHAR(255), 
                contrasena VARCHAR (255)
        )`

        connection.query(sql, function (err, result) {
            if (err) {
              console.log(err);
            }
            console.log("New table created");
});
        



    sql = `CREATE TABLE IF NOT EXISTS 
             establecimientos (
                id INT, 
                name VARCHAR(255),
                email VARCHAR(255), 
                direccion VARCHAR (255),
                telefono VARCHAR (255)
                )`

                connection.query(sql, function (err, result) {
                    if (err) {
                      console.log(err);
                    }
                    console.log("New table created");
        });
      
    sql = `CREATE TABLE IF NOT EXISTS 
            valoraciones (
                id INT, 
                puntuacion INT
                )`

                connection.query(sql, function (err, result) {
                    if (err) {
                      console.log(err);
                    }
                    console.log("New table created");
        });
     




const insertarUsuario = "INSERT INTO users (name, email, contrasena) VALUES (?, ?, ?)";
connection.query(insertarUsuario, ['Ivan', 'ivan@gmail.com', '123erg']);
const insertarEstablecemento = "INSERT INTO establecimientos (id, name, email, direccion, telefono) VALUES ('2', 'bichos', 'hagb dek', 'fnvnfur', '6847363')";
connection.query(insertarEstablecemento);
const insertarValoracions = "INSERT INTO valoraciones (id, puntuacion) VALUES ('3', '5')"; 
connection.query(insertarValoracions);

export default connection

export {
  insertarUsuario,
  insertarEstablecemento,
  insertarValoracions
}



