const mysql = require('mysql2');
var connect = mysql.createConnection(
    {
    
       
        host: "by3qzj9jgslgwrukaiin-mysql.services.clever-cloud.com",
        database: "by3qzj9jgslgwrukaiin",
        user: "uioiyhqcsbdr9vh3",
        password: "vf8qolgVfWL0WQSlvOfp",
        port: 3306
       
        
    }
);
connect.connect((err)=>{
    if (!err) {
        console.log("Database connected");
    }else{
        console.log(err);
    }
});

module.exports = connect;   