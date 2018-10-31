import React, { Component } from 'react'
import { Alert } from './Alert'
import _ from 'lodash'

//todo implement pagezise configuration settinf
const pageSize = 3;

//todo check json structure
//sort by date desc
//todo conversion UTC date so I can sort
//the API json response from server
const allAlerts  = [
    { id: 1, date: '2018-10-31T23:18:31.000Z', name: 'Joke', title: 'this is the first 1' },
    { id: 2, date: '2018-05-31T23:18:31.000Z', name: 'Mark', title: 'this is the second one' },
    { id: 3, date: '2018-05-29T23:18:31.000Z', name: 'John', title: 'this is the second one' },
    { id: 4, date: '2018-05-29T23:18:31.000Z', name: 'Luke', title: 'this is the second one' },
    { id: 5, date: '2018-05-29T23:18:31.000Z', name: 'Fred', title: 'this is the second one' },
    { id: 6, date: '2018-05-28T23:18:31.000Z', name: 'Ted', title: 'this is the second one' }
]
export default class Alerts extends Component {

    go() {
        const alerts = this.sortAlerts();
        this.getPageItems(alerts);
    }


    //give me all items for pageIndex regarding pageSize
    //this wiil return sectins with dateheader
    getAlertsForPage(pageIndex) {

        //todo implement pagination get alerts the size of pageSize and index pageindex
       // const alerts = getAlerts(pageIndex)

        //suppose it is pageindex :0
        const alerts = [
            { id: 1, date: '2018-10-31T23:18:31.000Z', name: 'Joke', title: 'this is the first 1' },
            { id: 2, date: '2018-05-31T23:18:31.000Z', name: 'Mark', title: 'this is the second one' },
            { id: 3, date: '2018-05-29T23:18:31.000Z', name: 'John', title: 'this is the second one' },
        ]

        //todo implmenet by date desc
        // alerts =sortAlerts(alerts)

        // const grouping = _.groupBy(alerts, element => element.date.substring(0, 10))
        // const sections = _.map(grouping, (items, date) => ({
        //     date: date,
        //     alerts: items
        // }));
      

        const sections = [
            {
                date: '2018-10-31T23:18:31.000Z',
                heading: 'today',
                alerts: [{ id: 1, date: '2018-10-31T23:18:31.000Z', name: 'Joke', title: 'this is the first one' }]
            },
            {
                date: '2018-10-30T23:18:31.000Z',
                heading: 'Yesterday',
                alerts: [{ id: 2, date: '2018-05-30T23:18:31.000Z', name: 'Mark', title: 'this is the second one' }]
            }
        ]

        console.log('sections',sections);

        return sections
    }

    render() {

        const test = this.getPageItems(0)
        return (<div>
            {this.getAlertsForPage(0).map(section => {
                return (
                    <div>{section.title} - {section.heading}
                        {section.alerts.map(al => <Alert name={al.name} title={al.title}></Alert>)}
                    </div>)
            }
            )}
        </div >)
    }
}
