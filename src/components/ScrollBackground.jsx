import { useEffect, useRef } from 'react'

const frameModules = import.meta.glob('../assets/background photo/ezgif-frame-*.jpg', {
  eager: true,
  import: 'default',
})
const frameUrls = Object.keys(frameModules)
  .sort()
  .map((path) => frameModules[path])

function ScrollBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d', { alpha: true })

    if (!canvas || !context) {
      console.error('Unable to initialize the scroll background canvas.')
      return
    }

    if (frameUrls.length === 0) {
      console.error('No scroll background frames were found.')
      return
    }

    const images = frameUrls.map((url, index) => {
      const image = new Image()
      image.decoding = 'async'
      image.onload = () => {
        if (index === currentFrame) scheduleRender()
      }
      image.onerror = () => {
        console.error(`Unable to load scroll background frame: ${url}`)
      }
      image.src = url
      return image
    })

    let viewportWidth = window.innerWidth
    let viewportHeight = window.innerHeight
    let currentFrame = 0
    let animationFrame = 0

    const resizeCanvas = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
      viewportWidth = window.innerWidth
      viewportHeight = window.innerHeight
      canvas.width = Math.round(viewportWidth * pixelRatio)
      canvas.height = Math.round(viewportHeight * pixelRatio)
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
      scheduleRender()
    }

    const renderFrame = () => {
      animationFrame = 0
      const image = images[currentFrame]

      if (!image?.complete || image.naturalWidth === 0) return

      context.clearRect(0, 0, viewportWidth, viewportHeight)

      const scale = Math.max(
        viewportWidth / image.naturalWidth,
        viewportHeight / image.naturalHeight,
      )
      const width = image.naturalWidth * scale
      const height = image.naturalHeight * scale

      context.drawImage(image, (viewportWidth - width) / 2, (viewportHeight - height) / 2, width, height)
    }

    function scheduleRender() {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(renderFrame)
      }
    }

    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const scrollFraction = maxScroll > 0 ? window.scrollY / maxScroll : 0
      currentFrame = Math.min(
        images.length - 1,
        Math.floor(Math.max(0, scrollFraction) * images.length),
      )
      scheduleRender()
    }

    resizeCanvas()
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', resizeCanvas)
      window.cancelAnimationFrame(animationFrame)
      images.forEach((image) => {
        image.onload = null
        image.onerror = null
      })
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        opacity: 1,
        pointerEvents: 'none',
      }}
    />
  )
}

export default ScrollBackground
