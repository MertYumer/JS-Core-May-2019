const appKey = 'kid_BJ_Ke8hZg';

const auth = {
    'Authorization': 'Basic ' + `${btoa('guest:pass')}`,
    'Content-type': 'application/json'
};

const getUrl = `https://baas.kinvey.com/appdata/${appKey}/venues/`;
const postUrl = `https://baas.kinvey.com/rpc/${appKey}/custom/calendar?query=`;

const elements = {
    venueDateInput: document.getElementById('venueDate'),
    venues: document.getElementById('venue-info'),
    getVenuesButton: document.getElementById('getVenues')
};

elements.getVenuesButton.addEventListener('click', getVenues);

function getVenues() {
    let url = postUrl + elements.venueDateInput.value;
    let id = '';

    fetch(url, {
        method: 'POST',
        headers: auth
    })
        .then(handler)
        .then(data => {
            data.forEach(id => getInfoForVenue(id))
        });

    elements.venues.addEventListener('click', event => {
        const currentButton = event.target;

        if (currentButton.value === 'More info') {
            const venue = currentButton.parentNode.parentNode;
            venue.getElementsByClassName('venue-details')[0].style.display = 'block';
            id = venue.getAttribute('id');
        }
    })
}

function getInfoForVenue(id) {
    const url = getUrl + id;

    fetch(url, {
        method: 'GET',
        headers: auth
    })
        .then(handler)
        .then(venue => {
            appendVenue(venue);
        });
}

function appendVenue(venue) {
    const div = document.createElement('div');

    div.innerHTML = `<div class="venue" id="${venue._id}">
                <span class="venue-name"><input class="info" type="button" value="More info">${venue.name}</span>
                <div class="venue-details" style="display: none;">
                    <table>
                        <tr>
                            <th>Ticket Price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td class="venue-price">${venue.price} lv</td>
                            <td><select class="quantity">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select></td>
                            <td><input class="purchase" type="button" value="Purchase"></td>
                        </tr>
                    </table>
                    <span class="head">Venue description:</span>
                    <p class="description">${venue.description}</p>
                    <p class="description">Starting time: ${venue.startingHour}</p>
                </div>
            </div>`;

    const moreInfoButton = div.getElementsByClassName('venue-name')[0];
    moreInfoButton.addEventListener('click', showVenueInfo);

    const purchaseButton = div.getElementsByClassName('purchase')[0];
    purchaseButton.addEventListener('click', (event) =>
        purchaseTickets(event, venue));

    elements.venues.appendChild(div);
}

function showVenueInfo(event) {
    const moreInfo = event.target.parentNode.parentNode.children[1];
    moreInfo.style.display = 'block';
}

function purchaseTickets(event, venue) {
    const ticketsInfo = event.target.parentNode.parentNode;

    const id = venue._id;
    const name = venue.name;
    const ticketPrice = venue.price;
    const ticketsQuantity = ticketsInfo.getElementsByClassName('quantity')[0].value;

    elements.venues.innerHTML = `<span class="head">Confirm purchase</span>
                                      <div class="purchase-info">
                                        <span>${name}</span>
                                        <span>${ticketsQuantity} x ${ticketPrice}</span>
                                        <span>Total: ${ticketsQuantity * ticketPrice} lv</span>
                                        <input type="button" value="Confirm">
                                      </div>`;

    const confirmButton = elements.venues.getElementsByTagName('input')[0];
    confirmButton.addEventListener('click', function () {
        confirmPurchase(id, ticketsQuantity)
    });
}

function confirmPurchase(id, ticketsQuantity) {
    const url = `https://baas.kinvey.com/rpc/kid_BJ_Ke8hZg/custom/purchase?venue=${id}&qty=${ticketsQuantity}`

    fetch(url, {
        method: 'POST',
        headers: auth
    })
        .then(handler)
        .then(data => {
            elements.venues.innerHTML = 'You may print this page as your ticket.' + data.html;
        })
}

function handler(response) {
    if (response.status >= 400) {
        throw new Error(`Something went wrong. Error: ${response.statusText}`)
    }

    return response.json();
}