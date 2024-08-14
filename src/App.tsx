import { createSignal, type Component } from 'solid-js';
import "./index.css"
import { getScreenshot, Webcam } from 'solid-webcam'
const App: Component = () => {
  const [get_image, setimage] = createSignal('')
  let camera: any
  const getImage = () => {
    const iamge = getScreenshot(camera)
    setimage(iamge as any)
    alert("image taken ::")
  }
  function save() {
    const link = document.createElement('a')
    link.href = get_image()
    link.download = 'myscreen.jpg'
    link.click()
  }
  function remove() {
    setimage("")
  }
  return (
    <div class="bg-[url('./assets/preview.webp')] p-10 h-screen bg-cover bg-center  bg-gray-600 bg-blend-overlay">
      <div class="shadow-lg  p-10 max-w-7xl mx-auto flex space-x-4 justify-between backdrop-blur-sm rounded-3xl h-[400px] " >
        <Webcam ref={camera} audio={false} width={721} height={620} class='rounded-lg '>
        </Webcam>
        <div class='grid  place-items-center  font-mono text-sm'>
          <button onclick={getImage} class='bg-black px-10 rounded-3xl font-bold  py-3 text-white shadow-lg'>Get ScreenShoot</button>
          <button onClick={save} class='bg-sky-700 px-10 rounded-3xl font-bold  py-3 text-white opacity-55'>Save image</button>
          {
            get_image().length && (
              <button onClick={remove} class='bg-red-700 px-10 rounded-3xl font-bold  py-3 text-white opacity-55'>Remove </button>

            )
          }
        </div>
        {
          get_image().length ? (
            <div class='p-10'><img src={get_image()} class='h-72 w-96 rounded-3xl object-center object-cover ' /></div>
          ) : null
        }
      </div>
    </div>
  );
};

export default App;
