
        function signUp() {
            var form = document.getElementById('form_register');
            axios ({
                method:'post',
                url: 'http://localhost:8000/user/signup',
                data: {
                user_id: form.id.value,
                user_name: form.name.value,
                user_password: form.password_1.value,
                user_password: form.password_2.value,
                birth: form.year.value //
                }
            })
            .then((req) => { return req.data;})
            .then((data) => {
                alert(data);
            })
    }
    function checkID( obj ){
        let id = $( obj ).val();

        // axios로 백 가서 확인하기
    }
