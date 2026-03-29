import { SectionImage } from '../components/doc/SectionImage'
import { IMPLEMENTATION_IMAGES } from '../data/implementationImages'
import {
  dashLi,
  dashUl,
  midP,
  midWrap,
  ol1,
  strong1,
} from './docHierarchy'

export function CoreTechArticle() {
  return (
    <div className="max-w-none">
      <SectionImage
        src={IMPLEMENTATION_IMAGES.coreTech}
        alt="RAG(Retrieval-Augmented Generation) 개념, 동작 흐름, AI 채팅 UI, 핵심 코드"
        caption="핵심 기술 소개 — RAG 기반 법률 AI 상담"
      />
      <ol className={ol1}>
        <li>
          <span className={strong1}>RAG(Retrieval-Augmented Generation)의 정의</span>
          <div className={midWrap}>
            <p className={midP}>
              LLM의 환각(Hallucination)을 줄이기 위해, 답변 생성 전에 신뢰할 수 있는
              외부 지식(법령·판례 등)에서 관련 정보를 검색하고 이를 프롬프트에
              반영하는 방식입니다.
            </p>
            <ul className={dashUl}>
              <li className={dashLi}>
                검색된 근거를 바탕으로 답변이 생성되어 법률 도메인에서 요구하는
                설명 가능성을 높입니다.
              </li>
            </ul>
          </div>
        </li>
        <li>
          <span className={strong1}>동작 흐름(검색 → 증강 → 생성)</span>
          <div className={midWrap}>
            <p className={midP}>
              <span className="font-medium text-slate-700">입력:</span> 사용자 질문
              (예: 음주운전 처벌 기준 등)이 들어옵니다.
            </p>
            <p className={midP}>
              <span className="font-medium text-slate-700">검색·증강·생성:</span>{' '}
              DB에 적재된 판례·데이터에서 유사 문서를 찾고(Retrieval), 질문과 결합해
              프롬프트를 만든 뒤(Augmentation), LLM으로 답변을 생성합니다(Generation).
            </p>
            <p className={midP}>
              <span className="font-medium text-slate-700">출력:</span> 참고 판례·
              근거를 함께 제시하는 AI 답변이 채팅 UI에 표시됩니다.
            </p>
          </div>
        </li>
        <li>
          <span className={strong1}>구현과 코드</span>
          <div className={midWrap}>
            <p className={midP}>
              서비스 화면에서는 사이드바(새 상담, 최근 내역, FAQ 등)와 메인 채팅
              영역에 참고 판례가 노출되도록 구성했습니다.
            </p>
            <ul className={dashUl}>
              <li className={dashLi}>
                LangChain 등으로 로더·분할·검색기·LLM 호출 단계를 코드로 구분해
                유지보수하기 쉽게 했습니다.
              </li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  )
}
