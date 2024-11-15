using { API_BUSINESS_PARTNER as bupa} from '../srv/external/API_BUSINESS_PARTNER';
using { SD.SaleOrder as SD } from '../db/SaleOrder' ; 

service SaleOrderService {

    entity BusinessPartners as
        projection on bupa.A_BusinessPartner {
            key BusinessPartner          as ID,
                BusinessPartnerFullName  as fullName,
                BusinessPartnerIsBlocked as isBlocked,
        } ; 
    entity SaleOrder as projection on SD.SaleOrderN  ; 

    // entity Customer as projection on SD.Customer ; 
    
}


