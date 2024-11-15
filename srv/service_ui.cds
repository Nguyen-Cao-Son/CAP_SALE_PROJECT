using { SaleOrderService as  Service } from './SaleOrderService' ; 

namespace SaleOrderService.ui ; 

annotate Service.SaleOrder with @( UI: { 
    DeleteHidden : true  ,
    HeaderInfo  :  {
        $Type : 'UI.HeaderInfoType',
        TypeName : 'SaleOrder_typeName',
        TypeNamePlural : 'Student Plural',
    }, 
    LineItem  : [ 
    { $Type : 'UI.DataField' , Value : SOnumber }  , 
    { $Type : 'UI.DataField' , Value : NetAmount }     
    ],
    Identification  : [ 
    { $Type : 'UI.DataField' ,  Value : SOnumber , Label : 'SO number'  } , 
    { $Type : 'UI.DataField' ,  Value : NetAmount , Label : 'Net Amount' }
    ] , 
    Facets  : [
    {  $Type : 'UI.ReferenceFacet'  }
    ],
    
}  , 
@Capabilities.SearchRestrictions


) ;


