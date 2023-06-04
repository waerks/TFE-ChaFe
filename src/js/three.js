import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import * as dat from 'lil-gui'


/**
 * Base
 */
// Debug
// const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// const axesHelper = new THREE.AxesHelper( 5 );
// scene.add( axesHelper );

/**
 * Loaders
 */
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('/draco/')

const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)


// Loading
const loading = document.getElementById("loading")
const content = document.getElementById("webgl")

/**
 * Envrinonment map
 */
scene.background = new THREE.Color('#ffe4c4')

/**
 * Models
 */
let mixer = null

gltfLoader.load(
    '/models/chafe-scene.glb',
    (gltf) =>
    {
        gltf.scene.rotation.y = Math.PI * - 0.5
        scene.add(gltf.scene)

                // Modèle chargé avec succès, masquer le chargement
                loading.style.display = "none"
                content.style.display = "block"
        
                // Obtenir le mixer pour l'animation (si applicable)
                mixer = new THREE.AnimationMixer(gltf.scene)
                const action = mixer.clipAction(gltf.animations[0])
                action.play()
    }
)

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 1)
scene.add(ambientLight)

const pointLightOne = new THREE.PointLight('#FFB272', 400)
scene.add(pointLightOne)
// const pointLightOneHelper = new THREE.PointLightHelper(pointLightOne, 1)
// scene.add(pointLightOneHelper)

const pointLightTwo = new THREE.PointLight('#FFB272', 400)
scene.add(pointLightTwo)
// const pointLightTwoHelper = new THREE.PointLightHelper(pointLightTwo, 1)
// scene.add(pointLightTwoHelper)

const pointLightThree = new THREE.PointLight('#FFB272', 400)
scene.add(pointLightThree)
// const pointLightThreeHelper = new THREE.PointLightHelper(pointLightThree, 1)
// scene.add(pointLightThreeHelper)

const pointLightFour = new THREE.PointLight('#FFB272', 700)
scene.add(pointLightFour)
// const pointLightFourHelper = new THREE.PointLightHelper(pointLightFour, 1)
// scene.add(pointLightFourHelper)

const sphereGeometry = new THREE.SphereGeometry(1, 16, 16)
const sphereMaterial = new THREE.MeshStandardMaterial({
    color: '#FFB272',
    transparent: true,
    opacity: 0
})

const light1 = new THREE.Mesh(sphereGeometry, sphereMaterial)
light1.position.set(5, 12, -10)
scene.add(light1)

const light2 = new THREE.Mesh(sphereGeometry, sphereMaterial)
light2.position.set(-8, 12, -10)
scene.add(light2)

const light3 = new THREE.Mesh(sphereGeometry, sphereMaterial)
light3.position.set(-8, 12, 0)
scene.add(light3)

const light4 = new THREE.Mesh(sphereGeometry, sphereMaterial)
light4.position.set(-8, 12, 12)
scene.add(light4)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(- 30, 20, 20)
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.target.set(0, 1, 0)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.physicallyCorrectLights = true

/**
 * Animate
 */
const clock = new THREE.Clock()
let previousTime = 0

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

    if(mixer)
    {
        mixer.update(deltaTime)
    }

    // Update lights
    pointLightOne.position.x = light1.position.x
    pointLightOne.position.y = light1.position.y
    pointLightOne.position.z = light1.position.z

    pointLightTwo.position.x = light2.position.x
    pointLightTwo.position.y = light2.position.y
    pointLightTwo.position.z = light2.position.z

    pointLightThree.position.x = light3.position.x
    pointLightThree.position.y = light3.position.y
    pointLightThree.position.z = light3.position.z

    pointLightFour.position.x = light4.position.x
    pointLightFour.position.y = light4.position.y
    pointLightFour.position.z = light4.position.z

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()