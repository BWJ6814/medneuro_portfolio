import { ErdViewer } from '../components/doc/ErdViewer'
import { SectionImage } from '../components/doc/SectionImage'
import { DESIGN_IMAGES } from '../data/designImages'
import {
  dashLi,
  dashUl,
  midP,
  midWrap,
  ol1,
  strong1,
} from './docHierarchy'

/** 전체 32화면 중 PM 담당 AI 채팅·법률 상담 게시판 화면 설계 발췌 */
export function ScreenDesignArticle() {
  return (
    <div className="max-w-none space-y-10">
      <p className="mb-2 text-[15px] leading-relaxed text-slate-600 sm:text-base">
        서비스 전체{' '}
        <strong className="font-semibold text-slate-800">화면 설계 32건</strong> 중,
        담당 파트인{' '}
        <strong className="font-semibold text-slate-800">
          AI 채팅 상담·법률 상담 게시판
        </strong>{' '}
        에 대한 와이어프레임·화면 구성 요약입니다.
      </p>

      <SectionImage
        src={DESIGN_IMAGES.screenAiChat}
        alt="LawPartner AI 법률 채팅 상담 화면 설계"
        caption="화면 설계서 — AI 채팅 상담"
      />
      <ol className={ol1}>
        <li>
          <span className={strong1}>AI 채팅 상담 화면</span>
          <div className={midWrap}>
            <p className={midP}>
              대화 영역, 입력창, 세션 목록, 참고 자료·출처 표시, 변호사 연결
              진입점 등 화면별 컴포넌트 배치와 상태(로딩·오류·빈 화면)를 정의했습니다.
            </p>
            <ul className={dashUl}>
              <li className={dashLi}>
                모바일·데스크톱에서 채팅 영역 비율과 스크롤 동작을 일관되게 맞췄습니다.
              </li>
              <li className={dashLi}>
                요구사항 정의서의 기능 ID와 화면 ID를 매핑해 두어 구현 시 추적이
                가능합니다.
              </li>
            </ul>
          </div>
        </li>
      </ol>

      <SectionImage
        src={DESIGN_IMAGES.screenLegalBoard}
        alt="LawPartner 법률 상담 게시판 화면 설계"
        caption="화면 설계서 — 법률 상담 게시판"
      />
      <ol className={`${ol1} list-none`}>
        <li className="relative pl-5 before:absolute before:left-0 before:font-semibold before:text-slate-900 before:content-['1.'] sm:pl-6">
          <span className={strong1}>게시판 화면 구성</span>
          <div className={midWrap}>
            <p className={midP}>
              목록·검색·필터, 글쓰기·상세·수정, 답변 영역 등 게시판 표준 흐름을
              화면별로 나누었고, 권한에 따른 버튼 노출도 설계에 포함했습니다.
            </p>
          </div>
        </li>
        <li className="relative mt-6 pl-5 before:absolute before:left-0 before:font-semibold before:text-slate-900 before:content-['2.'] sm:pl-6">
          <span className={strong1}>AI 상담·다른 메뉴와의 연결</span>
          <div className={midWrap}>
            <p className={midP}>
              동일한 헤더·사이드 구조를 쓰도록 해서 AI 채팅·게시판·마이페이지 간
              이동 시 이질감이 없게 했습니다.
            </p>
          </div>
        </li>
      </ol>
    </div>
  )
}

/** DB 논리 ERD — HTML 다이어그램 임베드 + 새 창 전체 보기 */
export function DbErdArticle() {
  return (
    <div className="max-w-none">
      <ol className={`${ol1} mb-6`}>
        <li>
          <span className={strong1}>논리 ERD 개요</span>
          <div className={midWrap}>
            <p className={midP}>
              회원·결제·AI 상담·게시판·관리자 등 도메인별 테이블과 PK/FK 관계를
              한 캔버스에 배치한 논리 모델입니다. 실제 Oracle 스키마 설계의 기준이
              되었습니다.
            </p>
            <ul className={dashUl}>
              <li className={dashLi}>
                영역(인증, AI, 게시판, 결제 등)별로 색 구분을 두어 흐름을 읽기
                쉽게 했습니다.
              </li>
              <li className={dashLi}>
                전체화면보기를 통해 전체화면을 보실 수 있습니다
              </li>
            </ul>
          </div>
        </li>
      </ol>

      <ErdViewer />
    </div>
  )
}

