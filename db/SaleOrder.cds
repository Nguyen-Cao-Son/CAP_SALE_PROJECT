using { cuid , managed , sap.common.CodeList , sap.common.Currencies } from '@sap/cds/common'; 

namespace SD.SaleOrder ; 


entity SaleOrderN { 
  
  key SOnumber : String(10) ; 
     
      customerID : Association to Customer  ; 
      NetAmount : Integer ;  
}  

entity Customer  { 
       customerID : String(8) ; 
       customerName : String(50) ; 
       toSaleOrder : Association to one SaleOrderN on toSaleOrder.customerID = $self ;  

 } 

entity Student : managed { 
  key Id : UUID ; 
      FristName : String(50) ;   
      LastName  : String(50) ;
      Age       : Int16 ; 
      Course    : String(50) ; 
      CourseDuration ; Init16 ; 
      Gender :  Boolean ; 
      Dob    : Date  ; 


 }

type Currency :  Association to Currencies ;


