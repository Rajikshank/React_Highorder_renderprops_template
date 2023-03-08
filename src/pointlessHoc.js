
import React from 'react'

export default function pointlessHoc(component) {
    const Component = component
    return function (props) {
        // here the another props is the default props for the component passed to the pointlesshoc
        return (<Component anotherprops="another props from pointless hoc🥰🥰" {...props} />)
    }
}
