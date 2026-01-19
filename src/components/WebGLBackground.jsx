import { useEffect, useRef } from 'react'

function WebGLBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    if (!gl) return

    function resizeCanvas() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      if (gl) gl.viewport(0, 0, canvas.width, canvas.height)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Vertex Shader
    const vertexShaderSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `

    // Fragment Shader
    const fragmentShaderSource = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      uniform vec2 mouse;

      float noise(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
      }

      float smoothNoise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        
        float a = noise(i);
        float b = noise(i + vec2(1.0, 0.0));
        float c = noise(i + vec2(0.0, 1.0));
        float d = noise(i + vec2(1.0, 1.0));
        
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }

      float fbm(vec2 p) {
        float value = 0.0;
        float amplitude = 0.5;
        for(int i = 0; i < 5; i++) {
          value += amplitude * smoothNoise(p);
          p *= 2.0;
          amplitude *= 0.5;
        }
        return value;
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        vec2 p = uv * 2.0 - 1.0;
        p.x *= resolution.x / resolution.y;

        float n = fbm(p * 2.0 + time * 0.1);
        n += fbm(p * 4.0 - time * 0.15) * 0.5;

        float mouseDist = length(uv - mouse);
        float mouseGlow = smoothstep(0.4, 0.0, mouseDist) * 0.3;

        vec3 color1 = vec3(0.04, 0.04, 0.04);
        vec3 color2 = vec3(0.08, 0.02, 0.0);
        vec3 accent = vec3(1.0, 0.24, 0.0);

        vec3 color = mix(color1, color2, n * 0.5 + 0.5);
        color += accent * mouseGlow;
        color += accent * n * 0.05;

        float vignette = 1.0 - length(uv - 0.5) * 0.8;
        color *= vignette;

        float grain = noise(uv * 500.0 + time * 100.0) * 0.03;
        color += grain;

        gl_FragColor = vec4(color, 1.0);
      }
    `

    function createShader(type, source) {
      const shader = gl.createShader(type)
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader))
        gl.deleteShader(shader)
        return null
      }
      return shader
    }

    const vertexShader = createShader(gl.VERTEX_SHADER, vertexShaderSource)
    const fragmentShader = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource)

    const program = gl.createProgram()
    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program))
      return
    }

    gl.useProgram(program)

    const positionBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1, 1, -1, -1, 1,
      -1, 1, 1, -1, 1, 1
    ]), gl.STATIC_DRAW)

    const positionLocation = gl.getAttribLocation(program, 'position')
    gl.enableVertexAttribArray(positionLocation)
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

    const resolutionLocation = gl.getUniformLocation(program, 'resolution')
    const timeLocation = gl.getUniformLocation(program, 'time')
    const mouseLocation = gl.getUniformLocation(program, 'mouse')

    let mouseX = 0.5, mouseY = 0.5
    const handleMouseMove = (e) => {
      mouseX = e.clientX / window.innerWidth
      mouseY = 1.0 - e.clientY / window.innerHeight
    }
    document.addEventListener('mousemove', handleMouseMove)

    let animationFrameId
    function render(time) {
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height)
      gl.uniform1f(timeLocation, time * 0.001)
      gl.uniform2f(mouseLocation, mouseX, mouseY)
      gl.drawArrays(gl.TRIANGLES, 0, 6)
      animationFrameId = requestAnimationFrame(render)
    }

    animationFrameId = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      document.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return <canvas id="webgl-canvas" ref={canvasRef}></canvas>
}

export default WebGLBackground
