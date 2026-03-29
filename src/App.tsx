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
    <div className="min-h-svh bg-[#f4f6fa] text-slate-800 antialiased">
      <DocSidebar
        activeId={activeId}
        mobileOpen={mobileMenuOpen}
        onCloseMobile={closeMobile}
      />
      <div className="bg-gradient-to-br from-white via-[#fafbfd] to-[#f4f7fc] lg:ml-[20%]">
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
