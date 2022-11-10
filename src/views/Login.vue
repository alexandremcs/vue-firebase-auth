<template>
    <main class="login">
        <section class="forms">

            <!-- User register form. -->
            <form class="register_form" @submit.prevent="register">
                <h2>Registre-se</h2>
                <input
                    type="email"
                    placeholder="Email..." 
                    v-model="register_form.email" />
                <input
                    type="password"
                    placeholder="Senha..."
                    v-model="register_form.password" />
                <input
                    type="submit"
                    value="Cadastrar"
                />
            </form>

            <!-- User login form. -->
            <form class="login_form" @submit.prevent="login">
                <h2>Login</h2>
                <input
                    type="email"
                    placeholder="Email..." 
                    v-model="login_form.email" />
                <input
                    type="password"
                    placeholder="Senha..."
                    v-model="login_form.password" />
                <input
                    type="submit"
                    value="Entrar"
                />
            </form>
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
    }

}
</script>

<style>

</style>