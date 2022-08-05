import { click } from '@testing-library/user-event/dist/click';
import React from 'react'

export default function Toggle() {
    return (
        <div className='toggle'>
            <input type='checkbox' id='toggle' />
        </div>
    )
    {
        document.getElementById('toggle').addEventListener(click, toggle()); 
        function toggle()
        {
            if (document.getElementById('toggle') == 'checked') {
                document.getElementById('toggle').style.fontSize = '24';
            } else {

            }
        }
    }
}
