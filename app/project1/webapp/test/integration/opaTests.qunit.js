sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'project1/test/integration/FirstJourney',
		'project1/test/integration/pages/SaleOrderList',
		'project1/test/integration/pages/SaleOrderObjectPage'
    ],
    function(JourneyRunner, opaJourney, SaleOrderList, SaleOrderObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('project1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheSaleOrderList: SaleOrderList,
					onTheSaleOrderObjectPage: SaleOrderObjectPage
                }
            },
            opaJourney.run
        );
    }
);