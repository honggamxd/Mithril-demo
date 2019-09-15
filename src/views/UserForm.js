var m = require("mithril")
var User = require("../models/User")

module.exports = {
    oninit: function(vnode) {User.load(vnode.attrs.id)},
    view: function() {
        return m("form", {
            onsubmit: function(e) {
                e.preventDefault()
                User.save()
            }
        }, [
            m("label.label", "First name"),
            m("input.input[type=text][placeholder=First name]", {
            oninput: function (e) {User.current.firstName = e.target.value},
            value: User.current.firstName
            }),
            m("label.label", "Last name"),
            m("input.input[type=text][placeholder=Last name]", {
            oninput: function (e) {User.currenr.lastName = e.target.value},
            value: User.current.lastName
            }),
            m("button.button[type=button]","Save"),

        ])

    }
}