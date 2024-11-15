 
const SaleRecord = [
      { SOnumber: '3000005', NetAmount: 123456  },
      { SOnumber: '3000006', NetAmount: 1321244 },
      { SOnumber: '3000007', NetAmount: 1321244 },
      { SOnumber: '3000008', NetAmount: 1321245 }, 
      { SOnumber: '3000009', NetAmount: 1322365 },
    ] ; 

 async function ReadSO( Object ) { 
      // Read data form entity SaleOrder       
      const { SaleOrder } = Object.entities ; 
      const Sale = await SELECT.from( SaleOrder ).where() ; 
      return Sale
} ;

async function INSERTSO( Object ) { 

    const { SaleOrder } = Object.entities ; 
    console.log( Object.entities) ; 
     await INSERT.into( SaleOrder ).entries(
        SaleRecord
    ) ; 
}
// around function js. 
const DELETESO = async ( Object ) => { 
   const { SaleOrder } = Object?.entities ;  
   await DELETE.from( SaleOrder ).where({ SOnumber : { in : SaleRecord.map( order => order.SOnumber ) }  }   )
}  

const UPDATESO = async ( Object ) => { 
  
} 

module.exports = { ReadSO , INSERTSO , DELETESO , UPDATESO  }   ; 