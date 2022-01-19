const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM customer', (err,customer)=>{
            if(err){
                res.json(err)
            }
            console.log(customer);
            res.render('customer',{
                data:customer
            });
        });
    });
};

controller.save = (req,res)=>{
    const data = req.body;

    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO customer SET ?',[data] ,(err, customers)=>{
            if(err)res.send(err);
            res.redirect('/');
        });
    });
};

module.exports = controller;