<template>
  <div class="flex justify-center items-center bg-slate-800 min-h-screen">
    <div class="flex flex-col gap-3 box-border w-80 text-center">
      <h2 class="text-white font-bold text-xl">Faça o seu cadastro</h2>
      <input class="rounded p-2" placeholder="Name" type="name" />
      <input class="rounded p-2" placeholder="Email" type="email" />
    <input class="rounded p-2" placeholder="Senha" type="password" />
    <button type="submit" class="rounded p-2 bg-sky-800 hover:bg-sky-600 text-white">Cadastrar</button>

    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage'
}
</script>
