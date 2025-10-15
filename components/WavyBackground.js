'use client'
import * as THREE from 'three'
import { useEffect, useRef } from 'react'

export default function WavyBackground() {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000)
    camera.position.z = 3

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    container.appendChild(renderer.domElement)

    const geometry = new THREE.PlaneGeometry(6, 6, 64, 64)
    const material = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0.0 } },
      vertexShader: `
        uniform float uTime;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 p = position;
          p.z += sin((p.x + uTime*0.8))*0.07 + cos((p.y*1.2 + uTime))*0.07;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }`,
      fragmentShader: `
        varying vec2 vUv;
        void main() {
          float g = 0.12 + 0.88 * smoothstep(0.0, 1.0, vUv.y);
          gl_FragColor = vec4(0.06, 0.12, 0.24, 0.9) + vec4(g*0.05, g*0.2, 0.45, 0.0);
        }`,
      transparent: true
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.rotation.x = -0.6
    scene.add(mesh)

    const onResize = () => {
      const { clientWidth, clientHeight } = container
      renderer.setSize(clientWidth, clientHeight)
      camera.aspect = clientWidth / clientHeight
      camera.updateProjectionMatrix()
    }
    window.addEventListener('resize', onResize)

    let raf
    const animate = (t) => {
      material.uniforms.uTime.value = (t || 0) / 1000
      renderer.render(scene, camera)
      raf = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      container.removeChild(renderer.domElement)
      renderer.dispose()
      geometry.dispose()
      material.dispose()
    }
  }, [])

  return <div ref={ref} className="absolute inset-0 -z-10" />
}
