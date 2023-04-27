<template>
  <div class="flex justify-center items-center bg-slate-800 min-h-screen">
    <div class="flex flex-col gap-3 box-border w-80 text-center">
      <input class="rounded p-2" placeholder="Email" type="email" />
    <input class="rounded p-2" placeholder="Senha" type="password" />
    <button type="submit" class="rounded p-2 bg-sky-800 hover:bg-sky-600 text-white">Entrar</button>
    <a class="text-orange-500 hover:text-orange-700" href="register">Cadastre-se</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

