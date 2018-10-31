import React, { Component } from 'react'
import {Alert} from './Alert'

//todo config
const pageSize = 2;


//todo check json structure
//sort by date desc
//todo conversion UTC date so I can sort
const alertsJson = [
    { id: 1, date: '2018-10-31T23:18:31.000Z', name: 'Joke', title: 'SUbmission ogf bla bla' },
    { id: 2, date: '2018-05-30T23:18:31.000Z', name: 'Mark', title: 'SUbmission cancelled' },
    { id: 3, date: '2018-10-29T23:18:31.000Z', name: 'Joke', title: 'SUbmission ogf bla bla' },
    { id: 4, date: '2018-05-29T23:18:31.000Z', name: 'Mark', title: 'SUbmission cancelled' }]
export default class Alerts extends Component {

    getPageItems() {
        const alerts = this.sortAlerts();
        this.createDateSections(alerts);
    }

    //todo sort alerts
    sortAlerts() {
        return alertsJson
    }

    createDateSections() {
        const sections = [
            {
                date: '2018-10-31T23:18:31.000Z',
                heading: 'Today',
                title: 'blabla',
                alerts: [{ id: 1, date: '2018-10-31T23:18:31.000Z', name: 'Joke', title: 'SUbmission ogf bla bla' }]
            },
            {
                date: '2018-10-30T23:18:31.000Z',
                heading: 'Yesterday',
                title: 'blabla',
                alerts: [{ id: 2, date: '2018-05-30T23:18:31.000Z', name: 'Mark', title: 'SUbmission cancelled' }]
            }
        ]
        return sections
    }

    render() {
        return (<div>
            {this.createDateSections().map(section => {
                return (
                    <div>{section.title} - {section.heading}
                        {section.alerts.map(al => <Alert name={al.name}></Alert>)}
                    </div>)
            }
            )}
        </div >)
    }
}
