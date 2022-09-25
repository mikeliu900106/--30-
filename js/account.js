var account = {
    isEmailFormatCorrect: false,
    isPasswordFormatCorrect: false,
    init: function () {
        var emailInput = document.querySelector("#user_email")
        var passwordInput = document.querySelector("#user_password")

        emailInput.addEventListener('input', function (e) {
            // console.log(e.target.value)
            this.isEmailFormatCorrect = true
            this.canSubmit()
        }.bind(this))

        passwordInput.addEventListener('input', function (e) {
            var value = e.target.value;
            var warning = document.querySelector('#password-warning')
            if (value.length >= 6) {
                warning.innerHTML = ""
                this.isPasswordFormatCorrect = true
            } else {
                warning.innerHTML = 'password format is not correct'
                this.isPasswordFormatCorrect = false
            }
            this.canSubmit()
        }.bind(this))
    },
    canSubmit: function () {
        var submit = document.querySelector("#submit-button")
        if (this.isPasswordFormatCorrect && this.isEmailFormatCorrect) {
            submit.disabled = false
        } else {
            submit.disabled = true
        }
    }
}
