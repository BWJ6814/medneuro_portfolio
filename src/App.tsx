import { useCallback, useState } from 'react'
import { DocHeader } from './components/DocHeader'
import { DocMain } from './components/DocMain'
import { DocSidebar } from './components/DocSidebar'
import { useActiveSection } from './hooks/useActiveSection'

function App() {
  const activeId = useActiveSection()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobile = useCallback(() => setMobileMenuOpen(false), [])
  const openMobile = useCallback(() => setMobileMenuOpen(true), [])

  return (
    <div className="min-h-svh bg-[#0a0b0d] text-neutral-200 antialiased">
      <DocSidebar
        activeId={activeId}
        mobileOpen={mobileMenuOpen}
        onCloseMobile={closeMobile}
      />
      <div className="min-h-svh bg-white text-slate-900 lg:ml-[20%]">
        <DocHeader
          activeId={activeId}
          showMenuButton
          onMenuClick={openMobile}
        />
        <main className="pt-14">
          <DocMain />
        </main>
      </div>
    </div>
  )
}

export default App
