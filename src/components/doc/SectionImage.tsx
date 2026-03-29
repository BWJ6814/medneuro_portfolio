import { ImageIcon } from 'lucide-react'
import { useState } from 'react'

type SectionImageProps = {
  src: string
  alt: string
  caption?: string
}

export function SectionImage({ src, alt, caption }: SectionImageProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <figure className="my-6 overflow-hidden rounded-2xl border border-dashed border-amber-200/90 bg-gradient-to-b from-amber-50/80 to-amber-50/40 p-6 text-center shadow-sm ring-1 ring-amber-100/80">
        <p className="text-sm font-medium text-amber-900">
          이미지를 불러오지 못했습니다.
        </p>
        <p className="mt-2 break-all text-xs text-amber-800/90">
          <code className="rounded bg-white/80 px-1">public/images/overview/</code>{' '}
          아래에 파일이 있는지, 파일명·확장자(소문자 .png)가 코드와 같은지 확인해
          주세요.
        </p>
      </figure>
    )
  }

  return (
    <figure className="my-7 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_8px_30px_-12px_rgba(15,23,42,0.15)] ring-1 ring-slate-900/[0.035]">
      <div
        className="h-1 bg-gradient-to-r from-[#0047AB]/25 via-[#0047AB] to-[#0047AB]/25"
        aria-hidden
      />
      <div className="relative w-full bg-gradient-to-b from-slate-50/95 to-slate-100/40 px-1.5 py-0 sm:px-3">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Ccircle cx='1' cy='1' r='1' fill='%230047AB' fill-opacity='0.09'/%3E%3C/svg%3E")`,
          }}
          aria-hidden
        />
        <img
          src={src}
          alt={alt}
          className="relative z-[1] block w-full max-w-full h-auto object-contain drop-shadow-[0_2px_12px_rgba(15,23,42,0.08)]"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      </div>
      {caption ? (
        <figcaption className="border-t border-slate-100/90 bg-gradient-to-br from-[#f8fafc] via-white to-slate-50/90 px-4 py-3.5 sm:px-5 sm:py-4">
          <div className="flex gap-3 sm:gap-4">
            <span
              className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0047AB]/[0.09] text-[#0047AB] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] ring-1 ring-[#0047AB]/10"
              aria-hidden
            >
              <ImageIcon className="h-[18px] w-[18px]" strokeWidth={1.75} />
            </span>
            <div className="min-w-0 flex-1 border-l-2 border-[#0047AB]/25 pl-3 sm:pl-4">
              <p className="text-left text-sm font-medium leading-snug tracking-tight text-slate-600 sm:text-[15px]">
                {caption}
              </p>
            </div>
          </div>
        </figcaption>
      ) : null}
    </figure>
  )
}
