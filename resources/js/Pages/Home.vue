<template>
  <Head>
    <title>Home</title>
    <meta
      name="description"
      content="Home information"
      head-key="description"
    />
  </Head>

  <h1 class="text-3xl dark:text-sky-400">Home</h1>
  <div>
    <h2 class="text-xl dark:text-sky-400">Dialog (Headless UI Example)</h2>
    <Modal
      title="A new modal title"
      type="danger"
      action="Save"
    >
      Content: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam aut blanditiis cum deleniti dolor dolorem eius enim illo inventore minima, minus nesciunt provident quae quod sequi totam ut vero. Adipisci amet assumenda autem consectetur dolor earum excepturi illo ipsum magni modi non omnis porro quibusdam repudiandae tempore, temporibus voluptates! Deserunt enim iure veniam voluptas.

      <p class="mt-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, aut, culpa dicta dolorum exercitationem facilis iure laborum officia perferendis reprehenderit veniam voluptas.</p>
      <p class="mt-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad assumenda cum dolor, est facilis inventore ipsum nemo odit, perspiciatis quae quisquam, sapiente tempora voluptate voluptatibus. At dicta dolores, eum praesentium quas rerum!</p>
      <p class="mt-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto, assumenda consectetur consequatur dignissimos distinctio dolorum earum nulla, odio omnis provident quasi quod repellendus sapiente tempora? Doloremque eius explicabo nobis sint! Accusantium alias animi cum debitis est, fuga, ipsum iusto laboriosam nemo obcaecati odit perferendis perspiciatis praesentium quaerat, quia quibusdam quis recusandae rem rerum vel.</p>
    </Modal>
  </div>

  <div class="mt-6 flex flex-col space-y-4">
    <BrandButton>Competitions</BrandButton>
    <BrandButton>Tourneys</BrandButton>
    <BrandButton>Go Underground</BrandButton>
  </div>

  <Highlight :code="snippet" class="mt-6"/>

  <div id="example2">
    <pre>
      <code ref="example3">
class ExampleAgain
{
    public function __construct()
    {
        //
    }
}
      </code>
    </pre>
  </div>


  <div class="max-w-md min-h-max mx-auto bg-gray-50 border border-cyan-400">
    <div class="relative w-full">
      <div
        class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div
        class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div
        class="absolute -bottom-24 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      <div class="relative m-8 space-y-4">
        <div class="bg-white rounded-lg flex items-center justify-between space-x-8 p-5">
          <div class="flex-1">
            <div class="h-4 w-48  bg-gray-300 rounded"></div>
          </div>
          <div>
            <div class="w-24 h-6 rounded-lg bg-purple-300"></div>
          </div>
        </div>

        <div class="bg-white rounded-lg flex items-center justify-between space-x-8 p-5">
          <div class="flex-1">
            <div class="h-4 w-52  bg-gray-300 rounded"></div>
          </div>
          <div>
            <div class="w-20 h-6 rounded-lg bg-yellow-300"></div>
          </div>
        </div>

        <div class="bg-white rounded-lg flex items-center justify-between space-x-8 p-5">
          <div class="flex-1">
            <div class="h-4 w-40  bg-gray-300 rounded"></div>
          </div>
          <div>
            <div class="w-32 h-6 rounded-lg bg-pink-300"></div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script setup>
import Highlight from "@/Components/Highlight";
import Modal from "@/Components/Modal";
import BrandButton from "@/Components/Buttons/BrandButton";


let snippet = `
class Example
{
    public function __construct()
    {
        //
    }
}
`.trim()
</script>
