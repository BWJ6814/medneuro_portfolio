import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages(프로젝트 사이트: username.github.io/저장소이름/)는 하위 경로 배포 → base 필요.
// 로컬 개발은 기본 '/'. CI에서 VITE_BASE=/저장소이름/ 로 넘김.
const base = process.env.VITE_BASE ?? '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [tailwindcss(), react()],
})
