import React, { Component } from 'react'

export default class Alerts extends Component {


    //todo config
    static pageSize = 2;


    //todo check json structure
    //sort by date desc
    //todo conversion UTC date so I can sort
    static alertsJson = [
        { id: 1, date: '2018-10-31T23:18:31.000Z', name: 'Joke', title: 'SUbmission ogf bla bla' },
        { id: 2, date: '2018-05-30T23:18:31.000Z', name: 'Mark', title: 'SUbmission cancelled' },
        { id: 3, date: '2018-10-29T23:18:31.000Z', name: 'Joke', title: 'SUbmission ogf bla bla' },
        { id: 4, date: '2018-05-29T23:18:31.000Z', name: 'Mark', title: 'SUbmission cancelled' }]



    //returns all alerts with headers max pagesize 
    displayPageWithDateHeadings() {

        const showAlerts = []
        alertsJson.map(alert => {
            showAlerts += <Alert />
            if (showAlerts.length === pageSize) {
                //stop

            }
        })


        return <div>{showAlerts}</div>
    }


    render() {
        return (<div>
            {this.displayPageWithDateHeadings()}
        </div >)
    }

}


function Alert() {
    return (
        <div>
            this is a Alert
    </div>
    )
}
