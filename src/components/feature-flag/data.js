

const dummyApiResponse = {
    showLightAndDarkMode : true,
    showTicTacToeBoard : true,
    showRandomColorGenerator : true,
    showAccordion : false,
    showTreeView : true
}

function featureFlagsDataServiceCall(){

    return new Promise((resolve, reject) => {
        if(dummyApiResponse)setTimeout(resolve(dummyApiResponse), 500)
        else reject('Some error occured! Please try again later')
    })
}

export default featureFlagsDataServiceCall