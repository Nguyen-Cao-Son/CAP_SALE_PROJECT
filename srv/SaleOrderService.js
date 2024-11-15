const cds = require("@sap/cds");  
const SO = require("./SaleAction") ;

 module.exports = cds.service.impl( async function() { 
    this.on('READ' , 'SaleOrder' , async (req) => {     
      // await SO.INSERTSO( this ) 
      const a = await SO.ReadSO( this ) ;    
      await SO.DELETESO( this ) ; 
        console.log( a )
      return a 
    } ) ; 
 }) 