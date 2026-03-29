import { RiskManagementCards } from '../components/doc/RiskManagementCards'
import { SectionImage } from '../components/doc/SectionImage'
import { MANAGEMENT_IMAGES } from '../data/managementImages'
import {
  dashLi,
  dashUl,
  midP,
  midWrap,
  ol1,
  strong1,
} from './docHierarchy'

export function MeetingNotesArticle() {
  return (
    <div className="max-w-none">
      <SectionImage
        src={MANAGEMENT_IMAGES.meetingNotes}
        alt="프로젝트 회의록"
        caption="회의록 — 주간 회의 예시"
      />
      <ol className={ol1}>
        <li>
          <span className={strong1}>주간 회의 운영</span>
          <div className={midWrap}>
            <p className={midP}>
              매주 금요일 정기 회의를 진행했으며, 프로젝트 기간 동안 총{' '}
              <strong className="font-semibold text-slate-800">7회</strong>의 회의를
              거쳤습니다. 일정·이슈·코드 리뷰·다음 주 목표를 공유하는 형식으로
              기록했습니다.
            </p>
            <ul className={dashUl}>
              <li className={dashLi}>
                아래는 그중 한 차례 회의록 캡처이며, 실제 문서에는 참석자·안건·결정
                사항·액션 아이템이 포함됩니다.
              </li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  )
}

export function RiskManagementArticle() {
  return (
    <div className="max-w-none">
      <RiskManagementCards />
    </div>
  )
}

export function FeedbackArticle() {
  return (
    <div className="max-w-none">
      <SectionImage
        src={MANAGEMENT_IMAGES.feedbackRevisions}
        alt="주간 발표 피드백 및 수정 사항 추적표"
        caption="피드백 수정사항 — 발표별 강사 피드백 반영"
      />
      <ol className={ol1}>
        <li>
          <span className={strong1}>주간 발표와 피드백 반영</span>
          <div className={midWrap}>
            <p className={midP}>
              매주 진행한 발표에서 강사님께서 주신 피드백을 표로 정리하고, 해당 주에
              적용 여부·담당·비고까지 남겨 추적했습니다.
            </p>
            <ul className={dashUl}>
              <li className={dashLi}>
                문서·기능·발표 방식 등 개선점을 다음 스프린트에 반영해 산출물 품질을
                끌어올렸습니다.
              </li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  )
}
