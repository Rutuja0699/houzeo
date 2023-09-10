import React from 'react';

function Info() {
    return (
        <div className='info'>
            In Info
            <img></img>
            <hr />
            <h3 style={{ textAlign: 'left' }}>Description</h3>
            <p style={{ textAlign: 'left' }}>Welcome home to this beautiful center hall Colonial located in desirable North Coldwell! This is the epitome of old-world charm meets modern-day living. The first floor boasts an open floorplan, including a welcoming foyer and a spacious living room for entertaining. The eat-in kitchen exudes modern elegance with a marble backsplash. white cabinetry...</p>
            <hr />
            <h3 style={{ textAlign: 'left' }}>Property Details</h3>

            <table>
                <tr>
                    <td id='firstCol'>Type</td>
                    <td id='secondCol'>Single Family</td>
                </tr>
                <tr>
                    <td id='firstCol'>Status</td>
                    <td id='secondCol'>Active</td>
                </tr>
                <tr>
                    <td id='firstCol'>Days on Market</td>
                    <td id='secondCol'>5</td>
                </tr>
                <tr>
                    <td id='firstCol'>Open House</td>
                    <td id='secondCol'>Not Scheduled</td>
                </tr>
                <tr>
                    <td id='firstCol'>County</td>
                    <td id='secondCol'>Lincoln</td>
                </tr>
                <tr>
                    <td id='firstCol'>MLS</td>
                    <td id='secondCol'>Montana Regional MLS</td>
                </tr>
                <tr>
                    <td id='firstCol'>MLS number</td>
                    <td id='secondCol'>222009044</td>
                </tr>
            </table>
            <hr />
            <table>
                <tr>
                    <td id='firstCol'>Type</td>
                    <td id='secondCol'>Single Family</td>
                </tr>
                <tr>
                    <td id='firstCol'>Status</td>
                    <td id='secondCol'>Active</td>
                </tr>
                <tr>
                    <td id='firstCol'>Days on Market</td>
                    <td id='secondCol'>5</td>
                </tr>
                <tr>
                    <td id='firstCol'>Open House</td>
                    <td id='secondCol'>Not Scheduled</td>
                </tr>
                <tr>
                    <td id='firstCol'>County</td>
                    <td id='secondCol'>Lincoln</td>
                </tr>
                <tr>
                    <td id='firstCol'>MLS</td>
                    <td id='secondCol'>Montana Regional MLS</td>
                </tr>
                <tr>
                    <td id='firstCol'>MLS number</td>
                    <td id='secondCol'>222009044</td>
                </tr>
            </table>

        </div>
    )
}

export default Info;