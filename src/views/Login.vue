<template>
    <main class="login">
        <section class="forms">

            <!-- User register form. -->
            <form class="register">
                <h2>Registre-se</h2>
                <input
                    type="text"
                    placeholder="Nome..."
                    v-model="register_form.name" />
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
            <form class="login">

            </form>
        </section>
    </main>
</template>

<script>
export default {

}
</script>

<style>

</style>