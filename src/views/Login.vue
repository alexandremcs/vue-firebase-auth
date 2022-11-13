<template>
    <main class="login">
        <section class="forms">
            <div class="form-box">
                <div class="selector-box">
                    <div id="btn" class="btn"></div>
                    <button type="button" class="toggle-btn" v-on:click="changeLogin">Login</button>
                    <button type="button" class="toggle-btn" v-on:click="changeRegister">Cadastrar</button>
                </div>
                <!-- User login form. -->
                <form id="login-form" class="login-form" @submit.prevent="login">
                    <h2>Login</h2>
                    <input
                        type="email"
                        class="input-field"
                        placeholder="Email..." 
                        v-model="login_form.email" />
                    <input
                        type="password"
                        class="input-field"
                        placeholder="Senha..."
                        v-model="login_form.password" />
                    <input
                        type="submit"
                        class="submit-btn"
                        value="Entrar"
                    />
                </form>

                <!-- User register form. -->
                <form id="register-form" class="register-form" @submit.prevent="register">
                    <h2>Registre-se</h2>
                    <input
                        type="email"
                        class="input-field"
                        placeholder="Email..." 
                        v-model="register_form.email" />
                    <input
                        type="password"
                        class="input-field"
                        placeholder="Senha..."
                        v-model="register_form.password" />
                    <input
                        type="submit"
                        class="submit-btn"
                        value="Cadastrar"
                    />
                </form>
            </div>
        </section>
    </main>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
    setup () {
        const register_form = ref({});
        const login_form = ref({});
        const store = useStore();
        

        const register = () => {
            store.dispatch('register', register_form.value)
        }

        const login = () => {
            store.dispatch('login', login_form.value)
        }

        return {
            register_form,
            login_form,
            register,
            login
        }
    },
    methods: {
        changeLogin: function () {    
            document.getElementById('login-form').classList.remove('x-register-position');        
            document.getElementById('login-form').classList.add('x-login-position');            
            document.getElementById('register-form').classList.remove('y-register-position');
            document.getElementById('register-form').classList.add('y-login-position');
            document.getElementById('btn').classList.remove('z-register-position');
            document.getElementById('btn').classList.add('z-login-position');
        },
        changeRegister: function () {            
            document.getElementById('login-form').classList.remove('x-login-position');
            document.getElementById('login-form').classList.add('x-register-position');
            document.getElementById('register-form').classList.remove('y-login-position');
            document.getElementById('register-form').classList.add('y-register-position');
            document.getElementById('btn').classList.remove('z-login-position');
            document.getElementById('btn').classList.add('z-register-position');
        }
    }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400&display=swap');

*{
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    margin: 0;
    padding: 0;
}
.login {
    height: 100%;
    width: 100%;
    background-color: rgb(2, 38, 48);
    background-image: linear-gradient(to top right,rgb(2, 38, 48) 0%,rgb(8, 75, 94) 100%);
    position: absolute;

}
.form-box {
    width: 380px;
    height: 370px;
    position: relative;
    margin: 5% auto;
    background: white;
    padding: 6px;
    border-radius: 10px;
    overflow: hidden;
}
.selector-box {
    width: 220px;
    margin: 35px auto;
    position: relative;
    box-shadow: 0 0 12px 5px rgb(227, 251, 255);
    border-radius: 30px;
}
.toggle-btn{
    padding: 10px 20px;
    cursor: pointer;
    background: transparent;
    border: 0;
    outline: none;
    position: relative;
    color: white;
}
.btn {
    top: 0;
    position: absolute;
    width: 110px;
    height: 100%;
    background: linear-gradient(to right, rgb(2, 38, 48), rgb(8, 75, 94));
    border-radius: 30px;
    transition: 0.3s;
    left: 0;
}

.login-form {
    top: 120px;
    position: absolute;
    width: 280px;
    transition: 0.3s;
    left: 50px;
}
.register-form {
    top: 120px;
    position: absolute;
    width: 280px;
    transition: 0.3s;
    left: 450px;
}
.input-field {
    width: 100%;
    padding: 10px 0;
    margin: 5px 0;
    border-left: 0;
    border-top: 0;
    border-right: 0;
    border-bottom: 1px solid #999;
    outline: none;
    background: transparent;
}
.submit-btn {
    width: 60%;
    padding: 10px 30px;
    cursor: pointer;
    display: block;
    margin: 30px auto;
    background: linear-gradient(to right, rgb(2, 38, 48), rgb(8, 75, 94));
    color: white;
    border: 0;
    outline: none;
    border-radius: 11px;
}
.x-login-position{
    left: 50px
}
.y-login-position{
    left: 450px;
}
.z-login-position{
    left: 0
}
.x-register-position{
    left: -400px;
}
.y-register-position{
    left: 50px
}
.z-register-position{
    left: 110px
}
</style>