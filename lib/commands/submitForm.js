/**
 *
 * Submits a form found by given selector. The submit command may also be applied
 * to any element that is a descendant of a `<form>` element.
 *
 * <example>
    :index.html
    <form action="/form.php" method="post" id="loginForm">
        <label for="username">User:</label>
        <input type="text" name="username" id="username">
        <label for="password">Password:</label>
        <input type="password" name="password" id="password">
        <input type="submit" value="Login">
    </form>

    :submitForm.js
    client.submitForm('#loginForm');
 * </example>
 *
 * @param {String} selector form element
 *
 * @uses protocol/element, protocol/submit
 * @type action
 *
 */

var staleElementRetry = require('../helpers/staleElementRetry');

module.exports = function submitForm (selector) {

    return this.element(selector).then(function(res) {
        return this.submit(res.value.ELEMENT);
    })
    .catch(staleElementRetry.bind(this, 'submitForm', arguments));

};