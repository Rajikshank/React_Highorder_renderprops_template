
import React from 'react'

export default function pointlessHoc(component) {
    const Component = component
    return function (props) {
        return (<Component anotherprop="hey there" {...props} />)
    }
}
